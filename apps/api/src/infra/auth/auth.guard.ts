import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request } from 'express'

import { Role } from '@/infra/auth/types'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { JwtEncrypter } from '../cryptography/jwt-encrypter'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtEncrypter,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req

    await this.authenticateUser(req)

    return this.authorizeUser(req, context)
  }

  private async authenticateUser(req: Request): Promise<void> {
    const bearerHeader = req.headers.authorization
    // Bearer eylskfdjlsdf309
    const token = bearerHeader?.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException('No token provided.')
    }

    try {
      const user = (await this.jwtService.decrypt(token)) as { sub: string }
      req.user = {
        uid: user.sub,
        roles: [], // Initialize roles as an empty array
      }
    } catch (err) {
      throw new UnauthorizedException('Invalid token.')
    }

    if (!req.user) {
      throw new UnauthorizedException('Invalid token.')
    }
  }

  private async authorizeUser(
    req: Request,
    context: ExecutionContext,
  ): Promise<boolean> {
    if (!req.user) return false
    const userRoles = await this.getUserRoles(req.user.uid)
    req.user.roles = userRoles

    const requiredRoles = this.getMetadata<Role[]>('roles', context)
    if (!requiredRoles || requiredRoles.length === 0) {
      return true
    }

    return requiredRoles.some((role) => userRoles.includes(role))
  }

  private getMetadata<T>(key: string, context: ExecutionContext): T {
    return this.reflector.getAllAndOverride<T>(key, [
      context.getHandler(),
      context.getClass(),
    ])
  }

  private async getUserRoles(id: string): Promise<Role[]> {
    const rolePromises = [
      this.prisma.admin.findUnique({ where: { uid: id } }),
      this.prisma.manager.findUnique({ where: { uid: id } }),
      this.prisma.valet.findUnique({ where: { uid: id } }),
      // Add promises for other role models here
    ]

    const roles: Role[] = []

    const [admin, manager, valet] = await Promise.all(rolePromises)
    admin && roles.push('admin')
    manager && roles.push('manager')
    valet && roles.push('valet')

    return roles
  }
}

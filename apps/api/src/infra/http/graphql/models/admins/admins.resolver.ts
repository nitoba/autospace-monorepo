import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { User } from '../users/entity/user.entity'
import { Verification } from '../verifications/entity/verification.entity'
import { AdminsService } from './admins.service'
import { CreateAdminInput } from './dtos/create-admin.input'
import { FindManyAdminArgs, FindUniqueAdminArgs } from './dtos/find.args'
import { UpdateAdminInput } from './dtos/update-admin.input'
import { Admin } from './entity/admin.entity'

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('admin')
  @Mutation(() => Admin)
  createAdmin(
    @Args('createAdminInput') args: CreateAdminInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.adminsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [Admin], { name: 'admins' })
  findAll(@Args() args: FindManyAdminArgs) {
    return this.adminsService.findAll(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => Admin, { name: 'admin' })
  findOne(@Args() args: FindUniqueAdminArgs) {
    return this.adminsService.findOne(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Admin)
  async updateAdmin(
    @Args('updateAdminInput') args: UpdateAdminInput,
    @GetUser() user: GetUserType,
  ) {
    const admin = await this.prisma.admin.findUnique({
      where: args,
    })
    checkRowLevelPermission(user, admin?.uid)
    return this.adminsService.update(args)
  }

  @AllowAuthenticated('admin')
  @Mutation(() => Admin)
  async removeAdmin(
    @Args() args: FindUniqueAdminArgs,
    @GetUser() user: GetUserType,
  ) {
    const admin = await this.prisma.admin.findUnique(args)
    checkRowLevelPermission(user, admin?.uid)
    return this.adminsService.remove(args)
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() admin: Admin) {
    return this.prisma.user.findUnique({ where: { uid: admin.uid } })
  }

  @ResolveField(() => [Verification])
  verifications(@Parent() admin: Admin) {
    return this.prisma.verification.findMany({
      where: { adminId: admin.uid },
    })
  }

  @ResolveField(() => Number)
  verificationsCount(@Parent() admin: Admin) {
    return this.prisma.verification.count({
      where: { adminId: admin.uid },
    })
  }
}

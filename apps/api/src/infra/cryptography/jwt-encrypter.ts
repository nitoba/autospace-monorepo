import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtEncrypter {
  constructor(private readonly jwtService: JwtService) {}

  async decrypt<T>(token: string): Promise<T> {
    return this.jwtService.decode<T>(token)
  }

  async verify(token: string): Promise<boolean> {
    return !!this.jwtService.verifyAsync(token)
  }

  encrypt(
    payload: Record<string, unknown>,
    options?: Record<string, unknown>,
  ): Promise<string> {
    return this.jwtService.signAsync(payload, options)
  }
}

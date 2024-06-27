import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { EnvService } from '../env/env.service'
import { BcryptHasher } from './bcrypt-hasher'
import { JwtEncrypter } from './jwt-encrypter'

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [EnvService],
      useFactory: (envService: EnvService) => ({
        secret: envService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [BcryptHasher, JwtEncrypter],
  exports: [BcryptHasher, JwtEncrypter],
})
export class CryptographyModule {}

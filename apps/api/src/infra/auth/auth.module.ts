import { Global, Module } from '@nestjs/common'

import { CryptographyModule } from '../cryptography/cryptography.module'

@Global()
@Module({
  imports: [CryptographyModule],
  exports: [CryptographyModule],
})
export class AuthModule {}

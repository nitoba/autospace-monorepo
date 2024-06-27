import { Module } from '@nestjs/common'

import { VerificationsResolver } from './verifications.resolver'
import { VerificationsService } from './verifications.service'

@Module({
  providers: [VerificationsResolver, VerificationsService],
  exports: [VerificationsService],
})
export class VerificationsModule {}

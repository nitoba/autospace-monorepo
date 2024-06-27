import { Module } from '@nestjs/common'

import { BookingsResolver } from './bookings.resolver'
import { BookingsService } from './bookings.service'

@Module({
  providers: [BookingsResolver, BookingsService],
  exports: [BookingsService],
})
export class BookingsModule {}

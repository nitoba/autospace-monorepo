import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Booking } from '@prisma/client'

import { CreateBookingInput } from './create-booking.input'

@InputType()
export class UpdateBookingInput extends PartialType(CreateBookingInput) {
  @Field(() => ID)
  id: Booking['id']
}

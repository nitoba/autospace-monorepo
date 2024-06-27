import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { BookingTimeline } from '@prisma/client'

import { CreateBookingTimelineInput } from './create-booking-timeline.input'

@InputType()
export class UpdateBookingTimelineInput extends PartialType(
  CreateBookingTimelineInput,
) {
  @Field(() => ID)
  id: BookingTimeline['id']
}

/* eslint-disable no-use-before-define */
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { $Enums, BookingTimeline as BookingTimelineType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class BookingTimeline
  implements RestrictProperties<BookingTimeline, BookingTimelineType>
{
  @Field(() => ID)
  id: number

  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus

  bookingId: number
  @Field({ nullable: true })
  valetId: string

  @Field({ nullable: true })
  managerId: string

  timestamp: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

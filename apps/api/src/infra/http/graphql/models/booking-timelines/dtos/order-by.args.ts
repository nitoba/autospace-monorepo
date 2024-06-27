/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { BookingOrderByWithRelationInput } from '../../bookings/dtos/order-by.args'
import { ManagerOrderByWithRelationInput } from '../../managers/dtos/order-by.args'
import { ValetOrderByWithRelationInput } from '../../valets/dtos/order-by.args'

@InputType()
export class BookingTimelineOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingTimelineOrderByWithRelationInputStrict,
      Prisma.BookingTimelineOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  timestamp: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  bookingId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  valetId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  managerId: Prisma.SortOrder

  booking: BookingOrderByWithRelationInput
  valet: ValetOrderByWithRelationInput
  manager: ManagerOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingTimelineOrderByWithRelationInput extends PartialType(
  BookingTimelineOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingTimelineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

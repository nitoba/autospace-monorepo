/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '../../../common/dtos/common.input'
import { BookingOrderByRelationAggregateInput } from '../../bookings/dtos/order-by.args'
import { ReviewOrderByRelationAggregateInput } from '../../reviews/dtos/order-by.args'
import { UserOrderByWithRelationInput } from '../../users/dtos/order-by.args'

@InputType()
export class CustomerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CustomerOrderByWithRelationInputStrict,
      Prisma.CustomerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder | Prisma.SortOrderInput

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  user: UserOrderByWithRelationInput
  bookings: BookingOrderByRelationAggregateInput
  reviews: ReviewOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CustomerOrderByWithRelationInput extends PartialType(
  CustomerOrderByWithRelationInputStrict,
) {}

@InputType()
export class CustomerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

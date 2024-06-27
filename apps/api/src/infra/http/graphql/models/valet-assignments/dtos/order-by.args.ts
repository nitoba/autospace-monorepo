/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { BookingOrderByWithRelationInput } from '../../bookings/dtos/order-by.args'
import { ValetOrderByWithRelationInput } from '../../valets/dtos/order-by.args'

@InputType()
export class ValetAssignmentOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ValetAssignmentOrderByWithRelationInputStrict,
      Prisma.ValetAssignmentOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  bookingId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  pickupLat: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  pickupLng: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  returnLat: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  returnLng: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  pickupValetId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  returnValetId: Prisma.SortOrder

  pickupValet: ValetOrderByWithRelationInput
  returnValet: ValetOrderByWithRelationInput
  booking: BookingOrderByWithRelationInput
}

@InputType()
export class ValetAssignmentOrderByWithRelationInput extends PartialType(
  ValetAssignmentOrderByWithRelationInputStrict,
) {}

@InputType()
export class ValetAssignmentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

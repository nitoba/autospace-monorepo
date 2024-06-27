/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { BookingTimelineOrderByRelationAggregateInput } from '../../booking-timelines/dtos/order-by.args'
import { CompanyOrderByWithRelationInput } from '../../companies/dtos/order-by.args'
import { UserOrderByWithRelationInput } from '../../users/dtos/order-by.args'
import { ValetAssignmentOrderByRelationAggregateInput } from '../../valet-assignments/dtos/order-by.args'

@InputType()
export class ValetOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ValetOrderByWithRelationInputStrict,
      Prisma.ValetOrderByWithRelationInput
    >
{
  user: UserOrderByWithRelationInput
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  image: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  licenseID: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder

  company: CompanyOrderByWithRelationInput
  bookingTimeline: BookingTimelineOrderByRelationAggregateInput
  pickupAssignments: ValetAssignmentOrderByRelationAggregateInput
  returnAssignments: ValetAssignmentOrderByRelationAggregateInput
}

@InputType()
export class ValetOrderByWithRelationInput extends PartialType(
  ValetOrderByWithRelationInputStrict,
) {}

@InputType()
export class ValetOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

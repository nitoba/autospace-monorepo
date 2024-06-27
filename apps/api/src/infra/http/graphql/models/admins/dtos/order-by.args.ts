import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '../../../common/dtos/common.input'
import { UserOrderByWithRelationInput } from '../../users/dtos/order-by.args'
import { VerificationOrderByRelationAggregateInput } from '../../verifications/dtos/order-by.args'

@InputType()
export class AdminOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      // eslint-disable-next-line no-use-before-define
      AdminOrderByWithRelationInputStrict,
      Prisma.AdminOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  uid: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  user: UserOrderByWithRelationInput
  verifications: VerificationOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AdminOrderByWithRelationInput extends PartialType(
  AdminOrderByWithRelationInputStrict,
) {}

@InputType()
export class AdminOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

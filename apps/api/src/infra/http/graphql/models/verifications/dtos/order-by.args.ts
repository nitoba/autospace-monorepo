/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { AdminOrderByWithRelationInput } from '../../admins/dtos/order-by.args'
import { GarageOrderByWithRelationInput } from '../../garages/dtos/order-by.args'

@InputType()
export class VerificationOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      VerificationOrderByWithRelationInputStrict,
      Prisma.VerificationOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  verified: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  adminId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder

  admin: AdminOrderByWithRelationInput
  garage: GarageOrderByWithRelationInput
}

@InputType()
export class VerificationOrderByWithRelationInput extends PartialType(
  VerificationOrderByWithRelationInputStrict,
) {}

@InputType()
export class VerificationOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

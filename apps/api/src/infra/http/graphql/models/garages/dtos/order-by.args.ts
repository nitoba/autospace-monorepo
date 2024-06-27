/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { AddressOrderByWithRelationInput } from '../../addresses/dtos/order-by.args'
import { CompanyOrderByWithRelationInput } from '../../companies/dtos/order-by.args'
import { ReviewOrderByRelationAggregateInput } from '../../reviews/dtos/order-by.args'
import { SlotOrderByRelationAggregateInput } from '../../slots/dtos/order-by.args'
import { VerificationOrderByWithRelationInput } from '../../verifications/dtos/order-by.args'

@InputType()
export class GarageOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      GarageOrderByWithRelationInputStrict,
      Prisma.GarageOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  images: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder

  company: CompanyOrderByWithRelationInput
  address: AddressOrderByWithRelationInput
  verification: VerificationOrderByWithRelationInput
  reviews: ReviewOrderByRelationAggregateInput
  slots: SlotOrderByRelationAggregateInput
}

@InputType()
export class GarageOrderByWithRelationInput extends PartialType(
  GarageOrderByWithRelationInputStrict,
) {}

@InputType()
export class GarageOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

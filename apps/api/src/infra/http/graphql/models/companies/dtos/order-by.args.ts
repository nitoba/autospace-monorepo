/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { GarageOrderByRelationAggregateInput } from '../../garages/dtos/order-by.args'
import { ManagerOrderByRelationAggregateInput } from '../../managers/dtos/order-by.args'
import { ValetOrderByRelationAggregateInput } from '../../valets/dtos/order-by.args'

@InputType()
export class CompanyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CompanyOrderByWithRelationInputStrict,
      Prisma.CompanyOrderByWithRelationInput
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

  garages: GarageOrderByRelationAggregateInput
  managers: ManagerOrderByRelationAggregateInput
  valets: ValetOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CompanyOrderByWithRelationInput extends PartialType(
  CompanyOrderByWithRelationInputStrict,
) {}

@InputType()
export class CompanyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { CustomerOrderByWithRelationInput } from '../../customers/dtos/order-by.args'
import { GarageOrderByWithRelationInput } from '../../garages/dtos/order-by.args'

@InputType()
export class ReviewOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ReviewOrderByWithRelationInputStrict,
      Prisma.ReviewOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  rating: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  comment: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  customerId: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder

  costumer: CustomerOrderByWithRelationInput
  garage: GarageOrderByWithRelationInput
}

@InputType()
export class ReviewOrderByWithRelationInput extends PartialType(
  ReviewOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReviewOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

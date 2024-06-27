/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

// import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args'
import { RestrictProperties } from '../../../common/dtos/common.input'
import { GarageOrderByWithRelationInput } from '../../garages/dtos/order-by.args'

@InputType()
export class AddressOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AddressOrderByWithRelationInputStrict,
      Prisma.AddressOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  address: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  lat: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  lng: Prisma.SortOrder

  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder

  garage: GarageOrderByWithRelationInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AddressOrderByWithRelationInput extends PartialType(
  AddressOrderByWithRelationInputStrict,
) {}

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}

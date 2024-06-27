/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '../../../common/dtos/common.input'
import { GarageRelationFilter } from '../../garages/dtos/where.args'

@InputType()
export class AddressWhereUniqueInput {
  @Field(() => ID)
  id: number
}

@InputType()
export class AddressWhereInputStrict
  implements
    RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput>
{
  id: IntFilter

  createdAt: DateTimeFilter

  updatedAt: DateTimeFilter

  address: StringFilter

  lat: FloatFilter

  lng: FloatFilter

  garageId: IntFilter

  garage: GarageRelationFilter

  AND: AddressWhereInput[]
  OR: AddressWhereInput[]
  NOT: AddressWhereInput[]
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) {}

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput
  some?: AddressWhereInput
  none?: AddressWhereInput
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput
  isNot?: AddressWhereInput
}

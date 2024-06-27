/* eslint-disable no-use-before-define */
import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma, SlotType } from '@prisma/client'

import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { BookingListRelationFilter } from '../../bookings/dtos/where.args'
import { GarageRelationFilter } from '../../garages/dtos/where.args'

registerEnumType(SlotType, {
  name: 'SlotType',
})

@InputType()
export class SlotWhereUniqueInput {
  id: number
}

@InputType()
export class EnumSlotTypeFilter {
  @Field(() => SlotType, { nullable: true })
  equals?: SlotType;

  @Field(() => [SlotType], { nullable: true })
  in?: SlotType[]

  @Field(() => [SlotType], { nullable: true })
  notIn?: SlotType[]

  @Field(() => SlotType, { nullable: true })
  not?: SlotType
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  pricePerHour: FloatFilter
  length: IntFilter
  width: IntFilter
  height: IntFilter

  type: EnumSlotTypeFilter
  garageId: IntFilter
  garage: GarageRelationFilter
  bookings: BookingListRelationFilter

  AND: SlotWhereInput[]
  OR: SlotWhereInput[]
  NOT: SlotWhereInput[]
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) {}

@InputType()
export class SlotListRelationFilter {
  every?: SlotWhereInput
  some?: SlotWhereInput
  none?: SlotWhereInput
}

@InputType()
export class SlotRelationFilter {
  is?: SlotWhereInput
  isNot?: SlotWhereInput
}

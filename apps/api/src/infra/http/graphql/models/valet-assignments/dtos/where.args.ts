/* eslint-disable no-use-before-define */
import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { BookingRelationFilter } from '../../bookings/dtos/where.args'
import { ValetRelationFilter } from '../../valets/dtos/where.args'

@InputType()
export class ValetAssignmentWhereUniqueInput {
  bookingId: number
}

@InputType()
export class ValetAssignmentWhereInputStrict
  implements
    RestrictProperties<
      ValetAssignmentWhereInputStrict,
      Prisma.ValetAssignmentWhereInput
    >
{
  bookingId: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  pickupLat: FloatFilter
  pickupLng: FloatFilter
  returnLat: FloatFilter
  returnLng: FloatFilter
  pickupValetId: StringFilter
  returnValetId: StringFilter
  pickupValet: ValetRelationFilter
  returnValet: ValetRelationFilter
  booking: BookingRelationFilter

  AND: ValetAssignmentWhereInput[]
  OR: ValetAssignmentWhereInput[]
  NOT: ValetAssignmentWhereInput[]
}

@InputType()
export class ValetAssignmentWhereInput extends PartialType(
  ValetAssignmentWhereInputStrict,
) {}

@InputType()
export class ValetAssignmentListRelationFilter {
  every?: ValetAssignmentWhereInput
  some?: ValetAssignmentWhereInput
  none?: ValetAssignmentWhereInput
}

@InputType()
export class ValetAssignmentRelationFilter {
  is?: ValetAssignmentWhereInput
  isNot?: ValetAssignmentWhereInput
}

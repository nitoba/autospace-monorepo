/* eslint-disable no-use-before-define */
import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { AdminRelationFilter } from '../../admins/dtos/where.args'
import { GarageRelationFilter } from '../../garages/dtos/where.args'

@InputType()
export class VerificationWhereUniqueInput {
  garageId: number
}

@InputType()
export class VerificationWhereInputStrict
  implements
    RestrictProperties<
      VerificationWhereInputStrict,
      Prisma.VerificationWhereInput
    >
{
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  verified: BoolFilter
  adminId: StringFilter
  garageId: IntFilter
  admin: AdminRelationFilter
  garage: GarageRelationFilter

  AND: VerificationWhereInput[]
  OR: VerificationWhereInput[]
  NOT: VerificationWhereInput[]
}

@InputType()
export class VerificationWhereInput extends PartialType(
  VerificationWhereInputStrict,
) {}

@InputType()
export class VerificationListRelationFilter {
  every?: VerificationWhereInput
  some?: VerificationWhereInput
  none?: VerificationWhereInput
}

@InputType()
export class VerificationRelationFilter {
  is?: VerificationWhereInput
  isNot?: VerificationWhereInput
}

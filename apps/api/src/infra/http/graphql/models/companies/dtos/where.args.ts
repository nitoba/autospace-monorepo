/* eslint-disable no-use-before-define */
import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { GarageListRelationFilter } from '../../garages/dtos/where.args'
import { ManagerListRelationFilter } from '../../managers/dtos/where.args'
import { ValetListRelationFilter } from '../../valets/dtos/where.args'

@InputType()
export class CompanyWhereUniqueInput {
  id: number
}

@InputType()
export class CompanyWhereInputStrict
  implements
    RestrictProperties<CompanyWhereInputStrict, Prisma.CompanyWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  description: StringFilter
  garages: GarageListRelationFilter
  managers: ManagerListRelationFilter
  valets: ValetListRelationFilter

  AND: CompanyWhereInput[]
  OR: CompanyWhereInput[]
  NOT: CompanyWhereInput[]
}

@InputType()
export class CompanyWhereInput extends PartialType(CompanyWhereInputStrict) {}

@InputType()
export class CompanyListRelationFilter {
  every?: CompanyWhereInput
  some?: CompanyWhereInput
  none?: CompanyWhereInput
}

@InputType()
export class CompanyRelationFilter {
  is?: CompanyWhereInput
  isNot?: CompanyWhereInput
}

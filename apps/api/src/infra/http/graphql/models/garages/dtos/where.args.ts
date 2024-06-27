/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import { InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
  StringListFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { AddressRelationFilter } from '../../addresses/dtos/where.args'
import { CompanyRelationFilter } from '../../companies/dtos/where.args'
import { ReviewListRelationFilter } from '../../reviews/dtos/where.args'
import { SlotListRelationFilter } from '../../slots/dtos/where.args'
import { VerificationRelationFilter } from '../../verifications/dtos/where.args'

@InputType()
export class GarageWhereUniqueInput {
  id: number
}

@InputType()
export class GarageWhereInputStrict
  implements
    RestrictProperties<GarageWhereInputStrict, Prisma.GarageWhereInput>
{
  id: IntFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  description: StringFilter
  images: StringListFilter
  companyId: IntFilter
  company: CompanyRelationFilter
  address: AddressRelationFilter
  verification: VerificationRelationFilter
  reviews: ReviewListRelationFilter
  slots: SlotListRelationFilter

  AND: GarageWhereInput[]
  OR: GarageWhereInput[]
  NOT: GarageWhereInput[]
}

@InputType()
export class GarageWhereInput extends PartialType(GarageWhereInputStrict) {}

@InputType()
export class GarageListRelationFilter {
  every?: GarageWhereInput
  some?: GarageWhereInput
  none?: GarageWhereInput
}

@InputType()
export class GarageRelationFilter {
  is?: GarageWhereInput
  isNot?: GarageWhereInput
}

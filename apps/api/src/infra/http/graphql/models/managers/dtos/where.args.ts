/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from '@/infra/http/graphql/common/dtos/common.input'

import { BookingTimelineListRelationFilter } from '../../booking-timelines/dtos/where.args'
import { CompanyRelationFilter } from '../../companies/dtos/where.args'
import { UserRelationFilter } from '../../users/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  uid: string
}

@InputType()
export class ManagerWhereInputStrict
  implements
    RestrictProperties<ManagerWhereInputStrict, Prisma.ManagerWhereInput>
{
  user: UserRelationFilter
  @Field()
  uid: StringFilter

  @Field()
  createdAt: DateTimeFilter

  @Field()
  updatedAt: DateTimeFilter

  @Field()
  displayName: StringFilter

  @Field()
  companyId: IntFilter

  company: CompanyRelationFilter

  bookingTimeline: BookingTimelineListRelationFilter

  AND: ManagerWhereInput[]

  OR: ManagerWhereInput[]

  NOT: ManagerWhereInput[]
}

@InputType()
export class ManagerWhereInput extends PartialType(ManagerWhereInputStrict) {}

@InputType()
export class ManagerListRelationFilter {
  every?: ManagerWhereInput
  some?: ManagerWhereInput
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter extends PartialType(
  ManagerWhereInput,
  InputType,
) {}

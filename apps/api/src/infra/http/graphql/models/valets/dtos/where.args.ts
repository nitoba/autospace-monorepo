/* eslint-disable no-use-before-define */
import { InputType, PartialType } from '@nestjs/graphql'
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
import { ValetAssignmentListRelationFilter } from '../../valet-assignments/dtos/where.args'

@InputType()
export class ValetWhereUniqueInput {
  uid: string
}

@InputType()
export class ValetWhereInputStrict
  implements RestrictProperties<ValetWhereInputStrict, Prisma.ValetWhereInput>
{
  user: UserRelationFilter
  uid: StringFilter
  createdAt: DateTimeFilter
  updatedAt: DateTimeFilter
  displayName: StringFilter
  image: StringFilter
  licenseID: StringFilter
  companyId: IntFilter
  company: CompanyRelationFilter
  bookingTimeline: BookingTimelineListRelationFilter
  pickupAssignments: ValetAssignmentListRelationFilter
  returnAssignments: ValetAssignmentListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ValetWhereInput[]
  OR: ValetWhereInput[]
  NOT: ValetWhereInput[]
}

@InputType()
export class ValetWhereInput extends PartialType(ValetWhereInputStrict) {}

@InputType()
export class ValetListRelationFilter {
  every?: ValetWhereInput
  some?: ValetWhereInput
  none?: ValetWhereInput
}

@InputType()
export class ValetRelationFilter {
  is?: ValetWhereInput
  isNot?: ValetWhereInput
}

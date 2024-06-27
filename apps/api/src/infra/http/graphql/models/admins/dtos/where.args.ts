/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from '../../../common/dtos/common.input'
import { UserRelationFilter } from '../../users/dtos/where.args'
import { VerificationListRelationFilter } from '../../verifications/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  @Field(() => ID)
  uid: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  @Field()
  uid: StringFilter

  @Field()
  createdAt: DateTimeFilter

  @Field()
  updatedAt: DateTimeFilter

  user: UserRelationFilter
  verifications: VerificationListRelationFilter

  AND: AdminWhereInput[]

  OR: AdminWhereInput[]

  NOT: AdminWhereInput[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput

  some?: AdminWhereInput

  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter extends PartialType(AdminWhereInput) {}

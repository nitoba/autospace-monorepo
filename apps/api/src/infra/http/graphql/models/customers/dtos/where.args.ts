/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from '../../../common/dtos/common.input'
import { BookingListRelationFilter } from '../../bookings/dtos/where.args'
import { ReviewListRelationFilter } from '../../reviews/dtos/where.args'
import { UserRelationFilter } from '../../users/dtos/where.args'

@InputType()
export class CustomerWhereUniqueInput {
  @Field(() => ID)
  uid: string
}

@InputType()
export class CustomerWhereInputStrict
  implements
    RestrictProperties<CustomerWhereInputStrict, Prisma.CustomerWhereInput>
{
  @Field()
  user: UserRelationFilter

  @Field()
  uid: StringFilter

  @Field()
  createdAt: DateTimeFilter

  @Field()
  updatedAt: DateTimeFilter

  @Field()
  displayName: StringFilter

  bookings: BookingListRelationFilter
  reviews: ReviewListRelationFilter
  AND: CustomerWhereInput[]
  OR: CustomerWhereInput[]
  NOT: CustomerWhereInput[]
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  every?: CustomerWhereInput[]
  some?: CustomerWhereInput[]
  none?: CustomerWhereInput[]
}

@InputType()
export class CustomerRelationFilter {
  is?: CustomerWhereInput
  isNot?: CustomerWhereInput
}

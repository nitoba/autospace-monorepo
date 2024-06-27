/* eslint-disable no-use-before-define */
import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { BookingOrderByWithRelationInput } from './order-by.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
class FindManyBookingArgsStrict
  implements
    RestrictProperties<
      FindManyBookingArgsStrict,
      Omit<Prisma.BookingFindManyArgs, 'include' | 'select'>
    >
{
  where: BookingWhereInput
  orderBy: BookingOrderByWithRelationInput[]
  cursor: BookingWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.BookingScalarFieldEnum])
  distinct: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingArgs extends PartialType(
  FindManyBookingArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingArgs {
  where: BookingWhereUniqueInput
}
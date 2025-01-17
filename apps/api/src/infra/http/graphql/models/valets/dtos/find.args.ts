/* eslint-disable no-use-before-define */
import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

import { ValetOrderByWithRelationInput } from './order-by.args'
import { ValetWhereInput, ValetWhereUniqueInput } from './where.args'

registerEnumType(Prisma.ValetScalarFieldEnum, {
  name: 'ValetScalarFieldEnum',
})

@ArgsType()
class FindManyValetArgsStrict
  implements
    RestrictProperties<
      FindManyValetArgsStrict,
      Omit<Prisma.ValetFindManyArgs, 'include' | 'select'>
    >
{
  where: ValetWhereInput
  orderBy: ValetOrderByWithRelationInput[]
  cursor: ValetWhereUniqueInput
  take: number
  skip: number
  @Field(() => [Prisma.ValetScalarFieldEnum])
  distinct: Prisma.ValetScalarFieldEnum[]
}

@ArgsType()
export class FindManyValetArgs extends PartialType(FindManyValetArgsStrict) {}

@ArgsType()
export class FindUniqueValetArgs {
  where: ValetWhereUniqueInput
}

/* eslint-disable no-use-before-define */
import { ArgsType, Field, PartialType, registerEnumType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

import { RestrictProperties } from '../../../common/dtos/common.input'
import { AdminOrderByWithRelationInput } from './order-by.args'
import { AdminWhereInput, AdminWhereUniqueInput } from './where.args'

registerEnumType(Prisma.AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
})

@ArgsType()
class FindManyAdminArgsStrict
  implements
    RestrictProperties<
      FindManyAdminArgsStrict,
      Omit<Prisma.AdminFindManyArgs, 'include' | 'select'>
    >
{
  @Field(() => AdminWhereInput)
  where: AdminWhereInput

  @Field(() => [AdminOrderByWithRelationInput])
  orderBy: AdminOrderByWithRelationInput[]

  @Field(() => AdminWhereUniqueInput)
  cursor: AdminWhereUniqueInput

  @Field()
  take: number

  @Field()
  skip: number

  @Field(() => [Prisma.AdminScalarFieldEnum])
  distinct: Prisma.AdminScalarFieldEnum[]
}

@ArgsType()
export class FindManyAdminArgs extends PartialType(FindManyAdminArgsStrict) {}

@ArgsType()
export class FindUniqueAdminArgs {
  @Field(() => AdminWhereUniqueInput)
  where: AdminWhereUniqueInput
}

import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Company as CompanyType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
// eslint-disable-next-line no-use-before-define
export class Company implements RestrictProperties<Company, CompanyType> {
  @Field(() => ID)
  id: number

  @Field()
  displayName: string

  @Field()
  description: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

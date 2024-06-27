/* eslint-disable no-use-before-define */
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { User as UserType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field(() => ID)
  uid: string

  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  image: string | null

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}

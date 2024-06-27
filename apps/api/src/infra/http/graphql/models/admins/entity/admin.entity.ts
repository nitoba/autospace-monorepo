import { Field, ObjectType } from '@nestjs/graphql'
import { Admin as AdminType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
// eslint-disable-next-line no-use-before-define
export class Admin implements RestrictProperties<Admin, AdminType> {
  @Field()
  uid: string

  createdAt: Date
  updatedAt: Date
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

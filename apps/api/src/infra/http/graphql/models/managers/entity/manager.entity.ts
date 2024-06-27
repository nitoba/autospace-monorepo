/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Manager as ManagerType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class Manager implements RestrictProperties<Manager, ManagerType> {
  uid: string
  @Field({ nullable: true })
  displayName: string

  createdAt: Date
  updatedAt: Date
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

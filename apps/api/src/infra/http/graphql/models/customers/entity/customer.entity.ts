/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Customer as CustomerType } from '@prisma/client'

import { RestrictProperties } from '../../../common/dtos/common.input'

@ObjectType()
export class Customer implements RestrictProperties<Customer, CustomerType> {
  @Field()
  uid: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field({ nullable: true })
  displayName: string
}

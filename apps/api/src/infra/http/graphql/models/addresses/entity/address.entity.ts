/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Address as AddressType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  id: number
  createdAt: Date
  updatedAt: Date
  address: string
  lat: number
  lng: number
  @Field({ nullable: true })
  garageId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

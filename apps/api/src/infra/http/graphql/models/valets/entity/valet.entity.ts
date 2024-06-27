/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Valet as ValetType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class Valet implements RestrictProperties<Valet, ValetType> {
  uid: string
  createdAt: Date
  updatedAt: Date
  displayName: string
  @Field({ nullable: true })
  image: string

  licenseID: string
  @Field({ nullable: true })
  companyId: number
}

/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Garage as GarageType, SlotType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  id: number
  createdAt: Date
  updatedAt: Date
  @Field({ nullable: true })
  displayName: string

  @Field({ nullable: true })
  description: string

  images: string[]
  companyId: number
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}

@ObjectType()
export class SlotTypeCount {
  @Field(() => SlotType)
  type: SlotType

  count?: number
}

/* eslint-disable no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql'
import { Review as ReviewType } from '@prisma/client'

import { RestrictProperties } from '@/infra/http/graphql/common/dtos/common.input'

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  id: number
  createdAt: Date
  updatedAt: Date
  rating: number
  @Field({ nullable: true })
  comment: string

  customerId: string
  garageId: number
}

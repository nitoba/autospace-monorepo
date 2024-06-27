import {
  ArgsType,
  Field,
  Float,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'

export type RestrictProperties<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never
} & Required<U>

// implements Prisma.DateTimeFilter
@InputType()
export class DateTimeFilter {
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: string[]

  @Field(() => [String], { nullable: true })
  notIn?: string[]

  lt?: string

  lte?: string

  gt?: string

  gte?: string
}

registerEnumType(Prisma.QueryMode, {
  name: 'QueryMode',
})

// implements Required<Prisma.StringFilter>
@InputType()
export class StringFilter {
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: string[]

  @Field(() => [String], { nullable: true })
  notIn?: string[]

  lt?: string

  lte?: string

  gt?: string

  gte?: string

  contains?: string

  startsWith?: string

  endsWith?: string

  not?: string

  @Field(() => Prisma.QueryMode, { nullable: true })
  mode?: Prisma.QueryMode
}
@InputType()
export class StringListFilter {
  @Field(() => [String], { nullable: true })
  equals?: string[]

  has?: string
  @Field(() => [String], { nullable: true })
  hasEvery?: string[]

  @Field(() => [String], { nullable: true })
  hasSome?: string[]

  isEmpty?: boolean
}

@InputType()
export class BoolFilter {
  equals?: boolean

  not?: boolean
}

// implements Required<Prisma.IntFilter>
@InputType()
export class IntFilter {
  equals?: number

  lt?: number

  lte?: number

  gt?: number

  gte?: number
}

@InputType()
export class FloatFilter {
  equals?: number

  lt?: number

  lte?: number

  gt?: number

  gte?: number

  not?: number
}

registerEnumType(Prisma.SortOrder, {
  name: 'SortOrder',
})

@ObjectType()
export class AggregateCountOutput {
  @Field()
  count: number
}

@InputType()
export class LocationFilterInput {
  @Field(() => Float)
  ne_lat: number

  @Field(() => Float)
  ne_lng: number

  @Field(() => Float)
  sw_lat: number

  @Field(() => Float)
  sw_lng: number
}

@ArgsType()
export class PaginationInput {
  take?: number

  skip?: number
}

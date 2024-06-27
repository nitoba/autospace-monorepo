import { Type } from '@nestjs/common'
import { InputType, PartialType } from '@nestjs/graphql'

export const createWhereInput = <T extends Type<Partial<any>>>(
  type: T,
  className: string,
): Type<Partial<T>> => {
  const DynamicClass = class extends PartialType(type, InputType) {}

  Object.defineProperty(DynamicClass, 'name', { value: className })

  InputType({ isAbstract: true })(DynamicClass)
  return DynamicClass as T
}

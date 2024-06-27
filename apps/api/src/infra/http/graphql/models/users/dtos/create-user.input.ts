import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql'
import { AuthProviderType } from '@prisma/client'

import { User } from '../entity/user.entity'

registerEnumType(AuthProviderType, {
  name: 'AuthProviderType',
})

@InputType()
export class RegisterWithProviderInput extends PickType(
  User,
  ['uid', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType)
  type: AuthProviderType
}

@InputType()
export class RegisterWithCredentialsInput extends PickType(
  User,
  ['name', 'image'],
  InputType,
) {
  email: string

  password: string
}

@InputType()
export class LoginInput extends OmitType(RegisterWithCredentialsInput, [
  'image',
  'name',
]) {}

@ObjectType()
export class LoginOutput {
  token: string

  @Field(() => User)
  user: User
}

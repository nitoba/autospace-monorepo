import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Admin } from '@prisma/client'

import { CreateAdminInput } from './create-admin.input'

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field(() => ID)
  uid: Admin['uid']
}

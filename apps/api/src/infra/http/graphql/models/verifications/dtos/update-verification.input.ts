import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Verification } from '@prisma/client'

import { CreateVerificationInput } from './create-verification.input'

@InputType()
export class UpdateVerificationInput extends PartialType(
  CreateVerificationInput,
) {
  @Field(() => ID)
  garageId: Verification['garageId']
}

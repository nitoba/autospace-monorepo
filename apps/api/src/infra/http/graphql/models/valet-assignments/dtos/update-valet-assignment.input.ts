import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { ValetAssignment } from '@prisma/client'

import { CreateValetAssignmentInput } from './create-valet-assignment.input'

@InputType()
export class UpdateValetAssignmentInput extends PartialType(
  CreateValetAssignmentInput,
) {
  @Field(() => ID)
  bookingId: ValetAssignment['bookingId']
}

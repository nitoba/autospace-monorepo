import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { Company } from '@prisma/client'

import { CreateCompanyInput } from './create-company.input'

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => ID)
  id: Company['id']
}

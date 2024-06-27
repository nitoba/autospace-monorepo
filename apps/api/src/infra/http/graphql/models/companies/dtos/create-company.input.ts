import { Field, ID, InputType, PickType } from '@nestjs/graphql'

import { Company } from '../entity/company.entity'

@InputType()
export class CreateCompanyInput extends PickType(
  Company,
  ['displayName', 'description'],
  InputType,
) {
  @Field(() => ID)
  managerId: string

  @Field({ nullable: true })
  managerName?: string
}

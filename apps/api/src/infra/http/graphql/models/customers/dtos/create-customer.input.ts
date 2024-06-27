import { InputType, PickType } from '@nestjs/graphql'

import { Customer } from '../entity/Customer.entity'

@InputType()
export class CreateCustomerInput extends PickType(
  Customer,
  ['displayName'],
  InputType,
) {}

import { InputType, PickType } from '@nestjs/graphql'

import { CreateAddressInputWithoutGarageId } from '../../addresses/dtos/create-address.input'
import { CreateSlotInputWithoutGarageId } from '../../slots/dtos/create-slot.input'
import { Garage } from '../entity/garage.entity'

@InputType()
export class CreateGarageInput extends PickType(
  Garage,
  ['description', 'displayName', 'images'],
  InputType,
) {
  address: CreateAddressInputWithoutGarageId
  slots: CreateSlotInputWithoutGarageId[]
}

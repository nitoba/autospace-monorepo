import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

import { User } from '../entity/user.entity';

@InputType()
export class UpdateUserInput extends PartialType(User, InputType) {
  @Field(() => ID)
  uid: User['uid'];
}

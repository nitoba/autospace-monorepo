/* eslint-disable no-use-before-define */
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from '../../../common/dtos/common.input';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => ID)
  uid: string;
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<
        Prisma.UserWhereInput,
        | 'credentials'
        | 'authProvider'
        | 'admin'
        | 'image'
        | 'manager'
        | 'valet'
        | 'costumer'
      >
    >
{
  uid: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  name: StringFilter;

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}

@InputType()
export class UserWhereInput extends PartialType(
  UserWhereInputStrict,
  InputType,
) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator';
import { GetUserType } from '@/infra/auth/types';
import { checkRowLevelPermission } from '@/infra/auth/util';
import { PrismaService } from '@/infra/database/prisma/prisma.service';

import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  async registerWithCredentials(
    @Args('registerWithCredentialsInput')
    args: RegisterWithCredentialsInput,
  ) {
    return this.usersService.registerWithCredentials(args);
  }

  @Mutation(() => User)
  async registerWithProvider(
    @Args('registerWithProviderInput')
    args: RegisterWithProviderInput,
  ) {
    return this.usersService.registerWithProvider(args);
  }

  @Mutation(() => LoginOutput)
  async login(@Args('loginInput') args: LoginInput) {
    return this.usersService.login(args);
  }

  @AllowAuthenticated()
  @Query(() => User)
  whoami(@GetUser() user: GetUserType) {
    return this.usersService.findOne({ where: { uid: user.uid } });
  }

  @AllowAuthenticated()
  @Query(() => [User], { name: 'users' })
  findAll(@Args() args: FindManyUserArgs) {
    return this.usersService.findAll(args);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ) {
    console.log(args);
    const userInfo = await this.prisma.user.findUnique({
      where: { uid: args.uid },
    });

    if (!userInfo) {
      throw new NotFoundException('user not found!');
    }
    checkRowLevelPermission(user, userInfo.uid);
    return this.usersService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async removeUser(
    @Args() args: FindUniqueUserArgs,
    @GetUser() user: GetUserType,
  ) {
    const userInfo = await this.prisma.user.findUnique(args);
    checkRowLevelPermission(user, userInfo?.uid);
    return this.usersService.remove(args);
  }
}

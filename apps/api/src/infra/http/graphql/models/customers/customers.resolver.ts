import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { User } from '../users/entity/user.entity'
import { CustomersService } from './customers.service'
import { CreateCustomerInput } from './dtos/create-customer.input'
import { FindManyCustomerArgs, FindUniqueCustomerArgs } from './dtos/find.args'
import { UpdateCustomerInput } from './dtos/update-customer.input'
import { Customer } from './entity/customer.entity'

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private readonly customersService: CustomersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') args: CreateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.customersService.create(args)
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll(@Args() args: FindManyCustomerArgs) {
    return this.customersService.findAll(args)
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args() args: FindUniqueCustomerArgs) {
    return this.customersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async updateCustomer(
    @Args('updateCustomerInput') args: UpdateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    const costumer = await this.prisma.customer.findUnique({
      where: { uid: args.id },
    })
    checkRowLevelPermission(user, costumer?.uid)
    return this.customersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async removeCustomer(
    @Args() args: FindUniqueCustomerArgs,
    @GetUser() user: GetUserType,
  ) {
    const customer = await this.prisma.customer.findUnique(args)
    checkRowLevelPermission(user, customer?.uid)
    return this.customersService.remove(args)
  }

  @ResolveField(() => User, { nullable: true })
  user(@Parent() customer: Customer) {
    return this.prisma.user.findUnique({ where: { uid: customer.uid } })
  }
}

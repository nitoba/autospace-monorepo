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

import { Garage } from '../garages/entity/garage.entity'
import { AddressesService } from './addresses.service'
import { CreateAddressInput } from './dtos/create-address.input'
import { FindManyAddressArgs, FindUniqueAddressArgs } from './dtos/find.args'
import { UpdateAddressInput } from './dtos/update-address.input'
import { Address } from './entity/address.entity'

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Address)
  async createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.garageId },
      include: { company: { include: { managers: true } } },
    })
    checkRowLevelPermission(
      user,
      garage?.company.managers.map((man) => man.uid),
    )
    return this.addressesService.create(args)
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll(@Args() args: FindManyAddressArgs) {
    return this.addressesService.findAll(args)
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async updateAddress(
    @Args('updateAddressInput') args: UpdateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.id },
      include: {
        garage: {
          include: { company: { include: { managers: true } } },
        },
      },
    })
    checkRowLevelPermission(
      user,
      address?.garage.company.managers.map((man) => man.uid),
    )
    return this.addressesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async removeAddress(
    @Args() args: FindUniqueAddressArgs,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.where.id },
      include: {
        garage: {
          include: { company: { include: { managers: true } } },
        },
      },
    })
    checkRowLevelPermission(
      user,
      address?.garage.company.managers.map((man) => man.uid),
    )
    return this.addressesService.remove(args)
  }

  @ResolveField(() => Garage, { nullable: true })
  garage(@Parent() address: Address) {
    return this.prisma.company.findFirst({ where: { id: address.garageId } })
  }
}

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

import { Booking } from '../bookings/entity/booking.entity'
import { Garage } from '../garages/entity/garage.entity'
import { CreateSlotInput } from './dtos/create-slot.input'
import { FindManySlotArgs, FindUniqueSlotArgs } from './dtos/find.args'
import { UpdateSlotInput } from './dtos/update-slot.input'
import { Slot } from './entity/slot.entity'
import { SlotsService } from './slots.service'

@Resolver(() => Slot)
export class SlotsResolver {
  constructor(
    private readonly slotsService: SlotsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Slot)
  createSlot(
    @Args('createSlotInput') args: CreateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.slotsService.create(args)
  }

  @Query(() => [Slot], { name: 'slots' })
  findAll(@Args() args: FindManySlotArgs) {
    return this.slotsService.findAll(args)
  }

  @Query(() => Slot, { name: 'slot' })
  findOne(@Args() args: FindUniqueSlotArgs) {
    return this.slotsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async updateSlot(
    @Args('updateSlotInput') args: UpdateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique({ where: { id: args.id } })
    checkRowLevelPermission(user, slot?.id.toString())
    return this.slotsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async removeSlot(
    @Args() args: FindUniqueSlotArgs,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique(args)
    checkRowLevelPermission(user, slot?.id.toString())
    return this.slotsService.remove(args)
  }

  @ResolveField(() => [Booking])
  bookings(@Parent() slot: Slot) {
    return this.prisma.booking.findMany({ where: { slotId: slot.id } })
  }

  @ResolveField(() => Garage)
  garage(@Parent() slot: Slot) {
    return this.prisma.garage.findUnique({ where: { id: slot.garageId } })
  }
}

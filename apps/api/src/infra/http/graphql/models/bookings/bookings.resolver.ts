import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { BookingsService } from './bookings.service'
import { CreateBookingInput } from './dtos/create-booking.input'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dtos/find.args'
import { UpdateBookingInput } from './dtos/update-booking.input'
import { Booking } from './entity/booking.entity'

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Booking)
  createBooking(
    @Args('createBookingInput') args: CreateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.bookingsService.create(args)
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll(@Args() args: FindManyBookingArgs) {
    return this.bookingsService.findAll(args)
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async updateBooking(
    @Args('updateBookingInput') args: UpdateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, booking?.id.toString())
    return this.bookingsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async removeBooking(
    @Args() args: FindUniqueBookingArgs,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique(args)
    checkRowLevelPermission(user, booking?.id.toString())
    return this.bookingsService.remove(args)
  }
}
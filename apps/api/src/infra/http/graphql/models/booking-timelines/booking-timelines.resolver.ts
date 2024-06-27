import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { BookingTimelinesService } from './booking-timelines.service'
import { CreateBookingTimelineInput } from './dtos/create-booking-timeline.input'
import {
  FindManyBookingTimelineArgs,
  FindUniqueBookingTimelineArgs,
} from './dtos/find.args'
import { UpdateBookingTimelineInput } from './dtos/update-booking-timeline.input'
import { BookingTimeline } from './entity/booking-timeline.entity'

@Resolver(() => BookingTimeline)
export class BookingTimelinesResolver {
  constructor(
    private readonly bookingTimelinesService: BookingTimelinesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  createBookingTimeline(
    @Args('createBookingTimelineInput') args: CreateBookingTimelineInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.bookingTimelinesService.create(args)
  }

  @Query(() => [BookingTimeline], { name: 'bookingTimelines' })
  findAll(@Args() args: FindManyBookingTimelineArgs) {
    return this.bookingTimelinesService.findAll(args)
  }

  @Query(() => BookingTimeline, { name: 'bookingTimeline' })
  findOne(@Args() args: FindUniqueBookingTimelineArgs) {
    return this.bookingTimelinesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async updateBookingTimeline(
    @Args('updateBookingTimelineInput') args: UpdateBookingTimelineInput,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, bookingTimeline?.id.toString())
    return this.bookingTimelinesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async removeBookingTimeline(
    @Args() args: FindUniqueBookingTimelineArgs,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique(args)
    checkRowLevelPermission(user, bookingTimeline?.id.toString())
    return this.bookingTimelinesService.remove(args)
  }
}

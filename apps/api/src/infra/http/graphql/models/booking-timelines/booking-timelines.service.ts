import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateBookingTimelineInput } from './dtos/create-booking-timeline.input'
import {
  FindManyBookingTimelineArgs,
  FindUniqueBookingTimelineArgs,
} from './dtos/find.args'
import { UpdateBookingTimelineInput } from './dtos/update-booking-timeline.input'

@Injectable()
export class BookingTimelinesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBookingTimelineInput: CreateBookingTimelineInput) {
    return this.prisma.bookingTimeline.create({
      data: createBookingTimelineInput,
    })
  }

  findAll(args: FindManyBookingTimelineArgs) {
    return this.prisma.bookingTimeline.findMany(args)
  }

  findOne(args: FindUniqueBookingTimelineArgs) {
    return this.prisma.bookingTimeline.findUnique(args)
  }

  update(updateBookingTimelineInput: UpdateBookingTimelineInput) {
    const { id, ...data } = updateBookingTimelineInput
    return this.prisma.bookingTimeline.update({
      where: { id },
      data,
    })
  }

  remove(args: FindUniqueBookingTimelineArgs) {
    return this.prisma.bookingTimeline.delete(args)
  }
}

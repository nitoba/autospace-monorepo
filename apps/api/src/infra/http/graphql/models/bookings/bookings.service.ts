import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateBookingInput } from './dtos/create-booking.input'
import { FindManyBookingArgs, FindUniqueBookingArgs } from './dtos/find.args'
import { UpdateBookingInput } from './dtos/update-booking.input'

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createBookingInput: CreateBookingInput) {
    console.log(createBookingInput)
  }

  findAll(args: FindManyBookingArgs) {
    return this.prisma.booking.findMany(args)
  }

  findOne(args: FindUniqueBookingArgs) {
    return this.prisma.booking.findUnique(args)
  }

  update(updateBookingInput: UpdateBookingInput) {
    const { id } = updateBookingInput
    return this.prisma.booking.update({
      where: { id },
      data: {},
    })
  }

  remove(args: FindUniqueBookingArgs) {
    return this.prisma.booking.delete(args)
  }
}

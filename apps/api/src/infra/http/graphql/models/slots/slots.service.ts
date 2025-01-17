import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateSlotInput } from './dtos/create-slot.input'
import { FindManySlotArgs, FindUniqueSlotArgs } from './dtos/find.args'
import { UpdateSlotInput } from './dtos/update-slot.input'

@Injectable()
export class SlotsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSlotInput: CreateSlotInput) {
    return this.prisma.slot.create({
      data: createSlotInput,
    })
  }

  findAll(args: FindManySlotArgs) {
    return this.prisma.slot.findMany(args)
  }

  findOne(args: FindUniqueSlotArgs) {
    return this.prisma.slot.findUnique(args)
  }

  update(updateSlotInput: UpdateSlotInput) {
    const { id, ...data } = updateSlotInput
    return this.prisma.slot.update({
      where: { id },
      data,
    })
  }

  remove(args: FindUniqueSlotArgs) {
    return this.prisma.slot.delete(args)
  }
}

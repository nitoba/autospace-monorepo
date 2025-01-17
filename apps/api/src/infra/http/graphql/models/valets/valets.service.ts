import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateValetInput } from './dtos/create-valet.input'
import { FindManyValetArgs, FindUniqueValetArgs } from './dtos/find.args'
import { UpdateValetInput } from './dtos/update-valet.input'

@Injectable()
export class ValetsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createValetInput: CreateValetInput) {
    return this.prisma.valet.create({
      data: createValetInput,
    })
  }

  findAll(args: FindManyValetArgs) {
    return this.prisma.valet.findMany(args)
  }

  findOne(args: FindUniqueValetArgs) {
    return this.prisma.valet.findUnique(args)
  }

  update(updateValetInput: UpdateValetInput) {
    const { uid, ...data } = updateValetInput
    return this.prisma.valet.update({
      where: { uid },
      data,
    })
  }

  remove(args: FindUniqueValetArgs) {
    return this.prisma.valet.delete(args)
  }
}

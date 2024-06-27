import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateGarageInput } from './dtos/create-garage.input'
import { FindManyGarageArgs, FindUniqueGarageArgs } from './dtos/find.args'
import { UpdateGarageInput } from './dtos/update-garage.input'

@Injectable()
export class GaragesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGarageInput: CreateGarageInput) {
    console.log(createGarageInput)
  }

  findAll(args: FindManyGarageArgs) {
    return this.prisma.garage.findMany(args)
  }

  findOne(args: FindUniqueGarageArgs) {
    return this.prisma.garage.findUnique(args)
  }

  update(updateGarageInput: UpdateGarageInput) {
    console.log(updateGarageInput)
  }

  remove(args: FindUniqueGarageArgs) {
    return this.prisma.garage.delete(args)
  }
}

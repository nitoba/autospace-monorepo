import { Injectable } from '@nestjs/common'
import { ulid } from 'ulidx'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateCustomerInput } from './dtos/create-customer.input'
import { FindManyCustomerArgs, FindUniqueCustomerArgs } from './dtos/find.args'
import { UpdateCustomerInput } from './dtos/update-customer.input'

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: {
        uid: ulid(),
        ...createCustomerInput,
      },
    })
  }

  findAll(args: FindManyCustomerArgs) {
    return this.prisma.customer.findMany(args)
  }

  findOne(args: FindUniqueCustomerArgs) {
    return this.prisma.customer.findUnique(args)
  }

  update(updateCustomerInput: UpdateCustomerInput) {
    const { id, ...data } = updateCustomerInput
    return this.prisma.customer.update({
      where: { uid: id },
      data,
    })
  }

  remove(args: FindUniqueCustomerArgs) {
    return this.prisma.customer.delete(args)
  }
}

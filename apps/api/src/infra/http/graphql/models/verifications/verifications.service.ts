import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateVerificationInput } from './dtos/create-verification.input'
import {
  FindManyVerificationArgs,
  FindUniqueVerificationArgs,
} from './dtos/find.args'
import { UpdateVerificationInput } from './dtos/update-verification.input'

@Injectable()
export class VerificationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createVerificationInput: CreateVerificationInput) {
    return this.prisma.verification.create({
      data: {
        garageId: createVerificationInput.garageId,
        adminId: '',
      },
    })
  }

  findAll(args: FindManyVerificationArgs) {
    return this.prisma.verification.findMany(args)
  }

  findOne(args: FindUniqueVerificationArgs) {
    return this.prisma.verification.findUnique(args)
  }

  update(updateVerificationInput: UpdateVerificationInput) {
    const { garageId, ...data } = updateVerificationInput
    return this.prisma.verification.update({
      where: { garageId },
      data,
    })
  }

  remove(args: FindUniqueVerificationArgs) {
    return this.prisma.verification.delete(args)
  }
}

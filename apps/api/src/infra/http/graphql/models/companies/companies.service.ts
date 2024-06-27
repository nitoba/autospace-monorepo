import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateCompanyInput } from './dtos/create-company.input'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { UpdateCompanyInput } from './dtos/update-company.input'

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}
  create({
    description,
    displayName,
    managerId,
    managerName,
  }: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        description,
        displayName,
        managers: {
          connect: { uid: managerId, displayName: managerName },
        },
      },
    })
  }

  findAll(args: FindManyCompanyArgs) {
    return this.prisma.company.findMany(args)
  }

  findOne(args: FindUniqueCompanyArgs) {
    return this.prisma.company.findUnique(args)
  }

  update(updateCompanyInput: UpdateCompanyInput) {
    const { id, ...data } = updateCompanyInput
    return this.prisma.company.update({
      where: { id },
      data,
    })
  }

  remove(args: FindUniqueCompanyArgs) {
    return this.prisma.company.delete(args)
  }
}

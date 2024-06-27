import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CompaniesService } from './companies.service'
import { CreateCompanyInput } from './dtos/create-company.input'
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from './dtos/find.args'
import { UpdateCompanyInput } from './dtos/update-company.input'
import { Company } from './entity/company.entity'

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('manager')
  @Mutation(() => Company)
  createCompany(@Args('createCompanyInput') args: CreateCompanyInput) {
    return this.companiesService.create(args)
  }

  @Query(() => [Company], { name: 'companies' })
  findAll(@Args() args: FindManyCompanyArgs) {
    return this.companiesService.findAll(args)
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Company)
  async updateCompany(
    @Args('updateCompanyInput') args: UpdateCompanyInput,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, company?.id.toString())
    return this.companiesService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Company)
  async removeCompany(
    @Args() args: FindUniqueCompanyArgs,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique(args)
    checkRowLevelPermission(user, company?.id.toString())

    return this.companiesService.remove(args)
  }
}

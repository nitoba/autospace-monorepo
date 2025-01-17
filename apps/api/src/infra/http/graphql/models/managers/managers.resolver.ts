import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { Company } from '../companies/entity/company.entity'
import { CreateManagerInput } from './dtos/create-manager.input'
import { FindManyManagerArgs, FindUniqueManagerArgs } from './dtos/find.args'
import { UpdateManagerInput } from './dtos/update-manager.input'
import { Manager } from './entity/manager.entity'
import { ManagersService } from './managers.service'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(
    private readonly managersService: ManagersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Manager)
  createManager(
    @Args('createManagerInput') args: CreateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.managersService.create(args)
  }

  @Query(() => [Manager], { name: 'managers' })
  findAll(@Args() args: FindManyManagerArgs) {
    return this.managersService.findAll(args)
  }

  @Query(() => Manager, { name: 'manager' })
  findOne(@Args() args: FindUniqueManagerArgs) {
    return this.managersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  async updateManager(
    @Args('updateManagerInput') args: UpdateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    const manager = await this.prisma.manager.findUnique({
      where: { uid: args.uid },
    })
    checkRowLevelPermission(user, manager?.uid)
    return this.managersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  async removeManager(
    @Args() args: FindUniqueManagerArgs,
    @GetUser() user: GetUserType,
  ) {
    const manager = await this.prisma.manager.findUnique(args)
    checkRowLevelPermission(user, manager?.uid)
    return this.managersService.remove(args)
  }

  @ResolveField(() => Company, { nullable: true })
  company(@Parent() manager: Manager) {
    return this.prisma.company.findUnique({ where: { id: manager.companyId } })
  }
}

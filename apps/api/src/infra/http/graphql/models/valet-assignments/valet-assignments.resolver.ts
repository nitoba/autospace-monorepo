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

import { Valet } from '../valets/entity/valet.entity'
import { CreateValetAssignmentInput } from './dtos/create-valet-assignment.input'
import {
  FindManyValetAssignmentArgs,
  FindUniqueValetAssignmentArgs,
} from './dtos/find.args'
import { UpdateValetAssignmentInput } from './dtos/update-valet-assignment.input'
import { ValetAssignment } from './entity/valet-assignment.entity'
import { ValetAssignmentsService } from './valet-assignments.service'

@Resolver(() => ValetAssignment)
export class ValetAssignmentsResolver {
  constructor(
    private readonly valetAssignmentsService: ValetAssignmentsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  createValetAssignment(
    @Args('createValetAssignmentInput') args: CreateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.valetAssignmentsService.create(args)
  }

  @Query(() => [ValetAssignment], { name: 'valetAssignments' })
  findAll(@Args() args: FindManyValetAssignmentArgs) {
    return this.valetAssignmentsService.findAll(args)
  }

  @Query(() => ValetAssignment, { name: 'valetAssignment' })
  findOne(@Args() args: FindUniqueValetAssignmentArgs) {
    return this.valetAssignmentsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async updateValetAssignment(
    @Args('updateValetAssignmentInput') args: UpdateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user)
    return this.valetAssignmentsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async removeValetAssignment(
    @Args() args: FindUniqueValetAssignmentArgs,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique(args)
    checkRowLevelPermission(user, valetAssignment?.bookingId.toString())
    return this.valetAssignmentsService.remove(args)
  }

  @ResolveField(() => Valet, { nullable: true })
  pickupValet(@Parent() valetAssignment: ValetAssignment) {
    if (!valetAssignment.pickupValetId) {
      return null
    }

    return this.prisma.valet.findUnique({
      where: { uid: valetAssignment.pickupValetId },
    })
  }

  @ResolveField(() => Valet, { nullable: true })
  returnValet(@Parent() valetAssignment: ValetAssignment) {
    if (!valetAssignment.returnValetId) {
      return null
    }

    return this.prisma.valet.findUnique({
      where: { uid: valetAssignment.returnValetId },
    })
  }
}

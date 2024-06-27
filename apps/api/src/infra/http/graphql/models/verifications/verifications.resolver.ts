import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { AllowAuthenticated, GetUser } from '@/infra/auth/auth.decorator'
import { GetUserType } from '@/infra/auth/types'
import { checkRowLevelPermission } from '@/infra/auth/util'
import { PrismaService } from '@/infra/database/prisma/prisma.service'

import { CreateVerificationInput } from './dtos/create-verification.input'
import {
  FindManyVerificationArgs,
  FindUniqueVerificationArgs,
} from './dtos/find.args'
import { UpdateVerificationInput } from './dtos/update-verification.input'
import { Verification } from './entity/verification.entity'
import { VerificationsService } from './verifications.service'

@Resolver(() => Verification)
export class VerificationsResolver {
  constructor(
    private readonly verificationsService: VerificationsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Verification)
  createVerification(
    @Args('createVerificationInput') args: CreateVerificationInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.garageId.toString())
    return this.verificationsService.create(args)
  }

  @Query(() => [Verification], { name: 'verifications' })
  findAll(@Args() args: FindManyVerificationArgs) {
    return this.verificationsService.findAll(args)
  }

  @Query(() => Verification, { name: 'verification' })
  findOne(@Args() args: FindUniqueVerificationArgs) {
    return this.verificationsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Verification)
  async updateVerification(
    @Args('updateVerificationInput') args: UpdateVerificationInput,
    @GetUser() user: GetUserType,
  ) {
    const verification = await this.prisma.verification.findUnique({
      where: { garageId: args.garageId },
    })
    checkRowLevelPermission(user, verification?.garageId.toString())
    return this.verificationsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Verification)
  async removeVerification(
    @Args() args: FindUniqueVerificationArgs,
    @GetUser() user: GetUserType,
  ) {
    const verification = await this.prisma.verification.findUnique(args)
    checkRowLevelPermission(user, verification?.garageId.toString())
    return this.verificationsService.remove(args)
  }
}

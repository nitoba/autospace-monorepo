import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ulid } from 'ulidx';

import { BcryptHasher } from '@/infra/cryptography/bcrypt-hasher';
import { JwtEncrypter } from '@/infra/cryptography/jwt-encrypter';
import { PrismaService } from '@/infra/database/prisma/prisma.service';

import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { UpdateUserInput } from './dtos/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtEncrypter: JwtEncrypter,
    private readonly bcryptHasher: BcryptHasher,
  ) {}

  async registerWithProvider({
    name,
    type,
    image,
    uid,
  }: RegisterWithProviderInput) {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { uid },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists with this email.');
    }

    return this.prisma.user.create({
      data: {
        uid,
        name,
        image,
        authProvider: {
          create: {
            type,
          },
        },
      },
    });
  }

  async registerWithCredentials({
    email,
    name,
    password,
    image,
  }: RegisterWithCredentialsInput) {
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists with this email.');
    }

    // Hash the password
    const passwordHash = await this.bcryptHasher.hash(password);

    const uid = ulid();

    return this.prisma.user.create({
      data: {
        uid,
        name,
        image,
        credentials: {
          create: {
            email,
            passwordHash,
          },
        },
        authProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        credentials: true,
      },
    });
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    const user = await this.prisma.user.findFirst({
      where: {
        credentials: { email },
      },
      include: {
        credentials: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const isPasswordValid = await this.bcryptHasher.compare(
      password,
      user.credentials!.passwordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password.');
    }

    const jwtToken = await this.jwtEncrypter.encrypt(
      { sub: user.uid },
      {
        algorithm: 'HS256',
      },
    );

    return {
      token: jwtToken,
      user: {
        uid: user.uid,
        name: user.name!,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput;
    return this.prisma.user.update({
      where: { uid },
      data,
    });
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args);
  }
}

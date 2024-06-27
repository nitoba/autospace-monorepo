import { join } from 'node:path'

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql'

import { AuthModule } from '@/infra/auth/auth.module'
import { DatabaseModule } from '@/infra/database/database.module'

import { AddressesModule } from './models/addresses/addresses.module'
import { AdminsModule } from './models/admins/admins.module'
import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module'
import { BookingsModule } from './models/bookings/bookings.module'
import { CompaniesModule } from './models/companies/companies.module'
import { CustomersModule } from './models/customers/customers.module'
import { GaragesModule } from './models/garages/garages.module'
import { ManagersModule } from './models/managers/managers.module'
import { ReviewsModule } from './models/reviews/reviews.module'
import { SlotsModule } from './models/slots/slots.module'
import { UsersModule } from './models/users/users.module'
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module'
import { ValetsModule } from './models/valets/valets.module'
import { VerificationsModule } from './models/verifications/verifications.module'

@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      playground: false,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/infra/http/graphql/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // metadata,
    }),
    DatabaseModule,
    AuthModule,
    AddressesModule,
    AdminsModule,
    BookingTimelinesModule,
    BookingsModule,
    CompaniesModule,
    UsersModule,
    CustomersModule,
    GaragesModule,
    ManagersModule,
    ReviewsModule,
    SlotsModule,
    ValetsModule,
    ValetAssignmentsModule,
    VerificationsModule,
  ],
})
export class GraphQLModule {}
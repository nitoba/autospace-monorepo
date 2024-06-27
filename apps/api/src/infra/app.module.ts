import { Module } from '@nestjs/common'

import { EnvModule } from './env/env.module'
import { GraphQLModule } from './http/graphql/graphql.module'

@Module({
  imports: [EnvModule, GraphQLModule],
})
export class AppModule {}

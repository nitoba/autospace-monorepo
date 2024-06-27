import { Module } from '@nestjs/common'

import { CustomersResolver } from './Customers.resolver'
import { CustomersService } from './Customers.service'

@Module({
  providers: [CustomersResolver, CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}

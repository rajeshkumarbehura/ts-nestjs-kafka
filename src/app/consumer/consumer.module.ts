import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';

@Module({
  providers: [ConsumerService],
})
export class ConsumerModule {}

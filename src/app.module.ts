import { Module } from '@nestjs/common';
import { DefaultModule } from './app/default/default.module';
import { ConsumerModule } from './app/consumer/consumer.module';
import { KafkaModule } from './app/common/kafka/kafka.module';

@Module({
  imports: [
    KafkaModule.register({
      clientId: 'test-app-client',
      brokers: ['localhost:9092'],
      groupId: 'test-app-group',
    }),
    DefaultModule,
    ConsumerModule,
  ],
})
export class AppModule {}

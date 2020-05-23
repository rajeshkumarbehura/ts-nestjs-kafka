import { OnModuleInit } from '@nestjs/common';
import { SUBSCRIBER_OBJ_REF_MAP } from './kafka.decorator';

export abstract class AbstractKafkaConsumer implements OnModuleInit {
  protected abstract registerTopic();

  public async onModuleInit(): Promise<void> {
    this.registerTopic();
  }

  protected addTopic(topicName) {
    SUBSCRIBER_OBJ_REF_MAP.set(topicName, this);
  }
}

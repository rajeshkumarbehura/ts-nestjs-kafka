import { Injectable } from '@nestjs/common';
import { KafkaService } from '../common/kafka/kafka.service';
import { KafkaPayload } from '../common/kafka/kafka.message';
import { HELLO_FIXED_TOPIC } from '../constant';

@Injectable()
export class DefaultService {
  constructor(private readonly kafkaService: KafkaService) {}

  getHello() {
    return {
      value: 'hello world',
    };
  }

  async send() {
    const message = {
      value: 'Message send to Kakfa Topic',
    };
    const payload: KafkaPayload = {
      messageId: '' + new Date().valueOf(),
      body: message,
      messageType: 'Say.Hello',
      topicName: 'hello.topic',
    };
    const value = await this.kafkaService.sendMessage('hello.topic', payload);
    console.log('kafka status ', value);
    return message;
  }

  async sendToFixedConsumer() {
    const message = {
      value: 'Message send to Kakfa Topic',
    };
    const payload: KafkaPayload = {
      messageId: '' + new Date().valueOf(),
      body: message,
      messageType: 'Say.Hello',
      topicName: HELLO_FIXED_TOPIC, // topic name could be any name
    };
    const value = await this.kafkaService.sendMessage(
      HELLO_FIXED_TOPIC,
      payload,
    );
    console.log('kafka status ', value);
    return message;
  }
}

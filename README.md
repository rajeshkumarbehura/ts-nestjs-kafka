<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

# Example of NestJs & KafkaJs integration simplified.
  
## Description
This example built on 
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

It integrates with kafkajs and simplified to subscribe and publish message to kafka topics.

Find more in -
https://dev.to/rajeshkumarbehura/kafkajs-nestjs-with-typescript-simplified-example-35ep

## Installation

```bash
$ yarn install
```

## Running the app

#### Step- 1 
Make sure docker & docker-compose is installed. 

```
# Run kafka server in local machine, go to docker folder 
$ docker-compose -f kafka.yml up
```

```
# To run kafka drop UI to monitor kafka in local machine, go to docker folder 
$ docker-compose -f kafka-drop-ui.yml up

```
After running Kafka Server & Kafka Drop UI successuflly, access kafka-drop monitoring UI
http://localhost:9000

More on kafka drop Application - 
https://github.com/obsidiandynamics/kafdrop
https://raw.githubusercontent.com/obsidiandynamics/kafdrop/master/docs/images/overview.png

#### Step- 2
 Run the application
```bash
# development
$ yarn start

```

#### Step- 3
Send message to Kafka & receive message by consumer testing.
1.  http://localhost:3000/send/consumer   - send a sample message to kafka & consumer receives and print in application log
2.  http://localhost:3000/send/fixed-consumer

When you call above api, application console log will print " [KAKFA-CONSUMER] ...." .



## License
Nest is [MIT licensed](LICENSE).

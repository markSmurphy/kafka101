const { Kafka } = require('kafkajs');

// Configuration
const config = require('./api-key.json');

const kafka = new Kafka({
   clientId: config.Client.Name,
   brokers: config.Cluster.bootstrapServer
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
   // Producer
   await producer.connect();
   await producer.send({
      topic: config.Topic.Name,
      messages: [
         { value: 'Hello Kafka, from node.js' },
      ],
   });

   // Consumer
   await consumer.connect();
   await consumer.subscribe({ topic: config.Topic.Name, fromBeginning: true });

   await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
         console.log({
            topic,
            partition,
            offset: message.offset,
            value: message.value.toString(),
         })
      },
   })
};

run().catch(console.error);
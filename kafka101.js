const chalk = require('chalk');
const newLine = require('os').EOL;

console.log(chalk.blueBright('Kafka 101'));

console.log(newLine);

console.log(`This project contains simple examples of creating ${chalk.yellow('Publishers')} and ${chalk.yellow('Consumers')}`);
console.log(`for Apache Kafka hosted in ${chalk.cyan('Confluent Cloud')}`);

console.log(newLine);

console.log('               ┌────────────┐');
console.log('               │            │');
console.log('      ┌────────►   Kafka    ├───────┐');
console.log('      │        │            │       │');
console.log('      │        └────────────┘       │');
console.log('      │                             │');
console.log('      │                             │');
console.log('      │                             │');
console.log('      │                             │');
console.log('      │                             │');
console.log('      │                             │');
console.log('      │                             │');
console.log('┌─────┴─────┐                 ┌─────▼────┐');
console.log('│           │                 │          │');
console.log('│ Publisher │                 │ Consumer │');
console.log('│           │                 │          │');
console.log('└─────▲─────┘                 └─────┬────┘');
console.log('      │                             │');
console.log('      │                             │');
console.log('┌─────┴─────┐                 ┌─────▼────┐');
console.log('│  Source   │                 │  Target  │');
console.log('│  Folder   │                 │  Folder  │');
console.log('│           │                 │          │');
console.log('└───────────┘                 └──────────┘');

console.log(newLine);
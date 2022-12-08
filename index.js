const {deterministicPartitionKey} = require("./dpk");

const trivialKey = deterministicPartitionKey({partitionKey: 'qwer', attr: 'wwww'});
console.log(trivialKey);
const {deterministicPartitionKey} = require("./dpk");

const trivialKey = deterministicPartitionKey('{"partitionKey1": "test", "partitionKey2": "test2", "partitionKey3": "test2", "partitionKey4": "test2"}');
console.log(trivialKey.length);
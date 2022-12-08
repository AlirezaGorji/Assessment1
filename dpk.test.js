const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the length json input", () => {
    const trivialKey = deterministicPartitionKey('{"partitionKey1": "test"}');
    expect(trivialKey.length).toBe(128);
  });


  it("Returns the value of partitionKey when passed as inputinput", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'test'});
    expect(trivialKey).toBe('test');
  });

  it("Returns the value of partitionKey even if other attributes are passed ", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'test', otherAttr: 'test2'});
    expect(trivialKey).toBe('test');
  });

});

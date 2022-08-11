module.exports = {
  collectCoverageFrom: ["!**"],
  preset: "./jest/preset",
  resolver: "./jest/resolver",
  testEnvironment: "./jest/environments/node",
  testSequencer: "./jest/sequencer"
};

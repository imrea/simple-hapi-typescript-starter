module.exports = {
  displayName: 'UNIT',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.(spec|test).[jt]s'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

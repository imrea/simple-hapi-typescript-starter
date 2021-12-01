module.exports = {
  displayName: 'E2E',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testMatch: ['**/e2e/**/*.(spec|test).[jt]s'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

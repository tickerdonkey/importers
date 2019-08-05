module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  reporters: ['default'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/lib/**'],
  coverageDirectory: '<rootDir>/coverage/',
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  globals: {
    'ts-jest': {},
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  verbose: true,
}

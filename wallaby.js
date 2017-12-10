module.exports = () => ({
  files: ['package.json', 'tsconfig.json', 'src/**/*.ts', '!src/**/__tests__/*.ts'],
  tests: ['src/**/__tests__/*.ts'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'jest',
})

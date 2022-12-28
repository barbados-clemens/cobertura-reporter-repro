import type { Config } from 'jest';

const jestConfig: Config = {
  displayName: 'my-app',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageReporters: ['cobertura', 'html', 'lcov', 'text'],
};

export default jestConfig;

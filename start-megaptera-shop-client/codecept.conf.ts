/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line import/no-extraneous-dependencies
import { setCommonPlugins, setHeadlessWhen } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

export const config = {
  name: '20230516-start-react-with-typescript',
  tests: './tests/**/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:8000',
      show: false,
      browser: 'chromium',
    },
  },
  include: {
    I: './tests/steps_file',
  },
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
  },
};

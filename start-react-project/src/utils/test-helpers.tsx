/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line import/no-extraneous-dependencies
import { render as originalRender } from '@testing-library/react';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/defaultTheme';

type Option = {
  path?: string;
}

export function render(
  element: React.ReactElement,
  { path = '/' }: Option = {},
) {
  return originalRender((
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider theme={defaultTheme}>
        {element}
      </ThemeProvider>
    </MemoryRouter>
  ));
}

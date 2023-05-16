import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [ path ] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/Home page/);
    });
  });
});

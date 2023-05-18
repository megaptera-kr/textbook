/* eslint-disable import/no-unresolved */

import '@testing-library/jest-dom';

import 'reflect-metadata';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

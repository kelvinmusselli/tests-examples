import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import fetchMock from "jest-fetch-mock";

describe('tests', () => {
  const setState = jest.fn();

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn()
  }));

  const useStateMock = (user) => [user, setState];

  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    fetch.mockClear();
  });

  fetchMock.enableMocks();


  test('renders hello', async () => {

    fetch.mockResponseOnce(JSON.stringify({ name:'Kelvin Musselli' }))

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(<App/>);

    await waitFor(() => { fireEvent.submit(screen.getByText('Olá')) })

    expect(screen.getByText('Hello, Kelvin Musselli')).toBeInTheDocument();

  });

});

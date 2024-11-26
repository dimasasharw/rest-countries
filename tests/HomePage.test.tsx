import { render, screen, waitFor } from '@testing-library/react';
import React, { StrictMode } from 'react';
import HomePage from '../src/views/HomePage';
import { Provider } from 'react-redux';
import { persistor, store } from '../src/redux/index';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { PersistGate } from 'redux-persist/integration/react';

describe('HomePage', () => {
  test("make sure heading is List of Countries", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StrictMode>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </StrictMode>
        </PersistGate>
      </Provider>
    );

    // Check if the heading has the expected text
    await waitFor(() => screen.getByTestId("web__title"));
    const webTitle = screen.getByTestId("web__title");
    expect(webTitle).toHaveTextContent("List of Countries");
  });
});

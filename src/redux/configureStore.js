import { configureStore } from '@reduxjs/toolkit';
import reducerCurrencies from './currencies/currencies';

const store = configureStore({
  reducer: {
    currencies: reducerCurrencies,
  },
});

export default store;

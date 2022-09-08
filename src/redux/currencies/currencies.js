/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action types
const FETCHED_CURRENCIES = '/metric-webapp/currencies/FETCHED_CURRENCIES';

// Create and export async action creators
export const FetchedCurrencies = createAsyncThunk(
  FETCHED_CURRENCIES,
  async () => {
    const payload = await fetch(
      'https://api.currencyfreaks.com/supported-currencies',
    ).then((data) => data.json());
    return payload;
  },
);

// Initialize the state
const initialState = {
  currencies: [],
  currency: [],
  status: '',
};

//
const reducerCurrencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    getCurrency: (state, action) => {
      state.currency = state.currencies.filter(
        (currency) => currency.currencyCode === action.payload.currency.currencyCode,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FetchedCurrencies.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(FetchedCurrencies.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.currencies = action.payload;
      })
      .addCase(FetchedCurrencies.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      });
  },
});

// Exports actions created automaticaly with createSlice
export const { getCurrency } = reducerCurrencies.actions;

export default reducerCurrencies.reducer;

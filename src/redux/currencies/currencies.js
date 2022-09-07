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
    const payload = await fetch('https://api.currencyfreaks.com/supported-currencies').then(
      (data) => data.json(),
    );
    return payload;
  },
);

// Initialize the state
const initialState = {
  currencies: [],
  loading: 'idle',
};

//
const reducerCurrencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
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

export default reducerCurrencies.reducer;

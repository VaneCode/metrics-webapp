/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable max-len */

// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action types
const FETCHED_CURRENCIES = '/metric-webapp/currencies/FETCHED_CURRENCIES';
const FETCHED_BY_NAME = '/metric-webapp/currencies/FETCHED_BY_NAME';

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

export const FetchedByName = createAsyncThunk(
  FETCHED_BY_NAME,
  async () => {
    const result = await fetch(
      'https://api.currencyfreaks.com/supported-currencies',
    ).then((data) => data.json());
    const payload = result.filter((currency) => currency.currencyName === 'Adventure Gold');
    return payload;
  },
);

// Initialize the state
const initialState = {
  currencies: [],
  currenByName: [],
  currencyDetails: [],
  status: '',
};

//
const reducerCurrencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    getCurrencyDetails: (state, action) => {
      state.currencyDetails = state.currencies.filter(
        (currency) => currency.currencyCode === action.payload.currency.currencyCode,
      );
    },
    getCurrenciesByName: (state, action) => {
      const search = action.payload.newFilter.searchWord;
      const filteredData = state.currencies.filter((item) => Object.values(item).join('').toLowerCase().includes(search));
      state.currenByName = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(FetchedCurrencies.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.currencies = action.payload;
      })
      .addCase(FetchedByName.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.currencies = action.payload;
      });
  },
});

// Exports actions created automaticaly with createSlice
export const { getCurrencyDetails, getCurrenciesByName } = reducerCurrencies.actions;

export default reducerCurrencies.reducer;

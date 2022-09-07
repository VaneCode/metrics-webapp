// Import
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FetchedCurrencies } from '../../redux/currencies/currencies';
import Currency from '../Currency/Currency';

const CurrencyList = () => {
  // Get the list of currencies from the state
  const currenciesStatus = useSelector((state) => state.currencies, shallowEqual);
  // Dispatch the action to get the currencies from the API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchedCurrencies());
  }, []);
  return (
    <>
      <div>
        {currenciesStatus.currencies.map((currency) => (
          <Currency key={currency.id} currency={currency} />
        ))}
      </div>
    </>
  );
};

export default CurrencyList;

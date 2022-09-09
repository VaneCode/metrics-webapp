// Import
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FetchedCurrencies,
  getCurrencyDetails,
  FetchedByName,
} from '../../redux/currencies/currencies';
import Currency from '../Currency/Currency';
import styles from './CurrencyList.module.css';

const CurrencyList = () => {
  // Get the list of currencies from the state
  const currenciesStatus = useSelector(
    (state) => state.currencies,
    shallowEqual,
  );
  // console.log(currenciesStatus.currencies);
  // const { filter } = currenciesStatus;
  // Dispatch the action to get the currencies from the API
  const dispatch = useDispatch();
  useEffect(() => {
    if (currenciesStatus.filter === '') {
      // console.log(`Filter list:${currenciesStatus.filter}`);
      dispatch(FetchedCurrencies());
    } else {
      // console.log(currenciesStatus.filter);
      dispatch(FetchedByName(currenciesStatus.filter));
    }
  }, [currenciesStatus.filter]);
  return (
    <div className={styles.listCurrencies}>
      {currenciesStatus.currencies.map((currency) => (
        <Link
          to="/details"
          key={currency.currencyCode}
          onClick={() => dispatch(getCurrencyDetails({ currency }))}
        >
          <Currency key={currency.currencyCode} currency={currency} />
        </Link>
      ))}
    </div>
  );
};

export default CurrencyList;

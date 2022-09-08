// Import
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FetchedCurrencies,
  getCurrencyDetails,
} from '../../redux/currencies/currencies';
import Currency from '../Currency/Currency';
import styles from './CurrencyList.module.css';

const CurrencyList = () => {
  // Get the list of currencies from the state
  const currenciesStatus = useSelector(
    (state) => state.currencies,
    shallowEqual,
  );
  // Dispatch the action to get the currencies from the API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchedCurrencies());
  }, []);
  return (
    <div className={styles.listCurrencies}>
      {currenciesStatus.currencies.map((currency) => (
        <Link
          to="/details"
          key={currency.id}
          onClick={() => dispatch(getCurrencyDetails({ currency }))}
        >
          <Currency key={currency.id} currency={currency} />
        </Link>
      ))}
    </div>
  );
};

export default CurrencyList;

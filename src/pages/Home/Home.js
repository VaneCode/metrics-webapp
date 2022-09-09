import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.css';
import backArrow from '../../img/backArrow.png';
import microphone from '../../img/microphone.png';
import settings from '../../img/settings.png';
import {
  FetchedByName,
  FetchedCurrencies,
} from '../../redux/currencies/currencies';
import Currency from '../../components/Currency/Currency';

const Home = () => {
  const currencyStatus = useSelector((state) => state.currencies, shallowEqual);
  const [param, setParam] = useState('');
  const dispatch = useDispatch();
  // console.log(param);
  useEffect(() => {
    // console.log(param);
    if (param === '') {
      dispatch(FetchedCurrencies());
    } else {
      // console.log('Fetched by name');
      dispatch(FetchedByName(param));
    }
  }, [param]);
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={backArrow} alt="home" />
        </div>
        <SearchBar filter={(newParam) => setParam(newParam)} />
        <div>
          <img src={microphone} alt="microphone" />
          <img src={settings} alt="settings" />
        </div>
      </header>
      <div className={styles.currenciesList}>
        {currencyStatus.currencies.map((currency) => (
          <Currency key={currency.currencyCode} currency={currency} />
        ))}
      </div>
    </>
  );
};
export default Home;

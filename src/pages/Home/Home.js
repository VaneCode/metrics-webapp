import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Home.module.css';
import backArrow from '../../img/backArrow.png';
import microphone from '../../img/microphone.png';
import settings from '../../img/settings.png';
import {
  getCurrenciesByName,
  getCurrencyDetails,
} from '../../redux/currencies/currencies';
import Currency from '../../components/Currency/Currency';

const Home = () => {
  const currencyStatus = useSelector((state) => state.currencies);
  console.log(currencyStatus);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const handleChange = (p) => {
    const newFilter = {
      id: 1,
      searchWord: p.toLowerCase(),
    };
    setFilter(p);
    dispatch(getCurrenciesByName({ newFilter }));
    console.log(currencyStatus.currenByName);
  };
  let currenList;
  if (!currencyStatus.currenByName.length) {
    currenList = currencyStatus.currencies.map((currency) => (
      <Link
        to="/details"
        key={currency.currencyCode}
        onClick={() => dispatch(getCurrencyDetails({ currency }))}
      >
        <Currency key={currency.currencyCode} currency={currency} />
      </Link>
    ));
  } else {
    currenList = currencyStatus.currenByName.map((currency) => (
      <Link
        to="/details"
        key={currency.currencyCode}
        onClick={() => dispatch(getCurrencyDetails({ currency }))}
      >
        <Currency key={currency.currencyCode} currency={currency} />
      </Link>
    ));
  }
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={backArrow} alt="home" />
        </div>
        <div className={styles.search}>
          <input
            type="text"
            value={filter}
            placeholder="Currency name"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </div>
        <div>
          <img src={microphone} alt="microphone" />
          <img src={settings} alt="settings" />
        </div>
      </header>
      <div className={styles.currenciesList}>{currenList}</div>
    </>
  );
};
export default Home;

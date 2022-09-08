import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './CurrencyDetails.module.css';
import dollar from './dollar.png';

const CurrencyDetails = () => {
  const [imgStatus, setImgStatus] = useState(true);
  // Get the currency from the state
  const currency = useSelector((state) => state.currencies.currencyDetails);
  const dateFrom = new Date(currency[0].available_in_historical_data_from.slice(1, -1));
  const dateTill = new Date(currency[0].available_in_historical_data_till);
  return (
    <div>
      <div className={styles.currencyIcon}>
        <img
          src={imgStatus ? currency[0].icon : dollar}
          onError={() => setImgStatus(false)}
          alt="Currency icon"
          className={styles.icon}
        />
      </div>
      <div className={styles.currencyTags}>
        <h3>{currency[0].currencyName}</h3>
        <span>{currency[0].currencyCode}</span>
      </div>
      <div>
        <ul>
          <li>
            <span>Available in historical data from:</span>
            <span>{dateFrom.toLocaleDateString()}</span>
          </li>
          <li>
            <span>Available in historical data until:</span>
            <span>{dateTill.toLocaleDateString()}</span>
          </li>
          <li>
            <span>Status:</span>
            <span>{currency[0].status.toLowerCase()}</span>
          </li>
          <li>
            <span>Country code:</span>
            <span>{currency[0].countryCode}</span>
          </li>
          <li>
            <span>Country name:</span>
            <span>{currency[0].countryName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurrencyDetails;

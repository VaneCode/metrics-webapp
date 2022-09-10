import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CurrencyDetails.css';
import backArrow from '../../img/backArrow.png';
import microphone from '../../img/microphone.png';
import settings from '../../img/settings.png';
import dollar from './dollar.png';

const CurrencyDetails = () => {
  const [imgStatus, setImgStatus] = useState(true);
  // Get the currency from the state
  const currency = useSelector((state) => state.currencies.currencyDetails);
  const dateFrom = new Date(
    currency[0].available_in_historical_data_from.slice(1, -1),
  );
  const dateTill = new Date(currency[0].available_in_historical_data_till);
  return (
    <>
      <header className="header">
        <div>
          <Link to="/">
            <img src={backArrow} alt="Back home" />
          </Link>
        </div>
        <div>
          <h1>{currency[0].currencyName}</h1>
        </div>
        <div>
          <img src={microphone} alt="microphone" />
          <img src={settings} alt="settings" />
        </div>
      </header>
      <div>
        <div className="currencyIcon">
          <img
            src={imgStatus ? currency[0].icon : dollar}
            onError={() => setImgStatus(false)}
            alt="Currency icon"
            className="icon"
          />
        </div>
        <div className="currencyTags">
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
    </>
  );
};

export default CurrencyDetails;

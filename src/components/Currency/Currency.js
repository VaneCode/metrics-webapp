// Import
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Currency.css';
import dollar from './dollar.png';

const Currency = (props) => {
  const [imgStatus, setImgStatus] = useState(true);
  const { currency } = props;
  return (
    <div className="currencyDiv">
      <div className="currencyIcon">
        <img
          src={imgStatus ? currency.icon : dollar}
          onError={() => setImgStatus(false)}
          alt="Currency icon"
          className="icon"
        />
      </div>
      <div className="currencyTags">
        <h3>{currency.currencyName}</h3>
        <span>{currency.currencyCode}</span>
      </div>
    </div>
  );
};

Currency.propTypes = {
  currency: PropTypes.shape({
    icon: PropTypes.string,
    currencyName: PropTypes.string,
    currencyCode: PropTypes.string,
  }).isRequired,
};

export default Currency;

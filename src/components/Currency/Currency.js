// Import
import PropTypes from 'prop-types';

const Currency = (props) => {
  const { currency } = props;
  return (
    <div>
      <div>
        <img src={currency.icon} alt="Currency icon" />
      </div>
      <h3>{currency.currencyName}</h3>
      <span>{currency.currencyCode}</span>
    </div>
  );
};

Currency.PropTypes = {
  currency: PropTypes.shape({
    icon: PropTypes.string,
    currencyName: PropTypes.string,
    currencyCode: PropTypes.string,
  }).isRequired,
};

export default Currency;

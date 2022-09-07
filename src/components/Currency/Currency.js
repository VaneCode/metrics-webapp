// Import
import PropTypes from 'prop-types';
import styles from './Currency.module.css';

const Currency = (props) => {
  const { currency } = props;
  return (
    <div className={styles.currencyDiv}>
      <div className={styles.currencyIcon}>
        <img src={currency.icon} alt="Currency icon" className={styles.icon} />
      </div>
      <div className={styles.currencyTags}>
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

// Imports
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const { filter } = props;
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    filter(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={value}
        placeholder="Currency name"
        onChange={(e) => { handleChange(e); }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default SearchBar;

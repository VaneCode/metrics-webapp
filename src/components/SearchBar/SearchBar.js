// Imports
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchBar = () => {
  const filteredData = '';
  const clearInput = () => {
    console.log('clear');
  };
  const handleFilter = () => {
    console.log('handle filter');
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search"
          value="filter"
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

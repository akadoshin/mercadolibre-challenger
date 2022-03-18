import { useState } from 'react';

/** lang */
import lang from '../../utils/lang.json';

/** Assets */
import searchIcon from '../../assets/images/ic_Search.svg';

/** Scss styles */
import './SearchBar.scss';

const langText = lang.molecules.search;

const SearchBar = (): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState<string>();
  console.log('SearchBar', search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    if (value) {
      setSearch(e.target.value);
    }
  };

  return (
    <div data-testid="search" className={`search ${focus && 'search-focus'}`}>
      <div className="search__box">
        <input
          type="text"
          placeholder={langText.input.placeholder}
          className="search__box-input"
          onFocus={(): void => {
            setFocus(true);
          }}
          onBlur={(): void => {
            setFocus(false);
          }}
          onChange={handleChange}
        />
        <button className="search__box-button" type="button">
          <img src={searchIcon} alt="search" className="search__box-button-icon" />
        </button>
      </div>
      {focus && search && (
        <div className="search__dropdown">
          <ul className="search__dropdown-list">
            <li className="search__dropdown-item">Apple Ipod</li>
            <li className="search__dropdown-item">Apple Ipod touch</li>
            <li className="search__dropdown-item">Apple Ipod 5g</li>
            <li className="search__dropdown-item">Apple 16gb</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

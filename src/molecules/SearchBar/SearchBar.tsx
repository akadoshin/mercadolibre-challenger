import { useState } from 'react';

/** lang */
import lang from '../../utils/lang.json';

/** Assets */
import searchIcon from '../../assets/icons/ic_Search.svg';

/** Scss styles */
import './SearchBar.scss';

const langText = lang.molecules.search;

/** Search Bar
 *
 * @example
 * <SearchBar />
 */
const SearchBar = (): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const [suggestions, setSuggestions] = useState<string[]>([]);

  /**
   * @description Handle the input change
   * @param {HTMLInputElement} value
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setSuggestions(value.length ? [value, value + value, value + value + value] : []);
    setSearch(e.target.value);
  };

  /**
   * @description Handle the input submit
   * @param {HTMLFormElement} value
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form className={`search ${focus && 'search-focus'}`} onSubmit={handleSubmit} role="search">
      <div className="search__box">
        <input
          type="text"
          role="searchbox"
          placeholder={langText.input.placeholder}
          className="search__box-input"
          onFocus={(): void => {
            setFocus(true);
          }}
          onBlur={(): void => {
            /** delay focus for 100ms, to be able to click on the dropdown list */
            setTimeout(() => {
              setFocus(false);
            }, 100);
          }}
          value={search}
          onChange={handleChange}
        />
        <button className="search__box-button" type="submit">
          <img src={searchIcon} alt="search" className="search__box-button-icon" />
        </button>
      </div>
      {focus && search && suggestions.length > 0 && (
        <div className="search__dropdown">
          <ul className="search__dropdown-list">
            {suggestions.map((suggestion: string) => (
              <li
                key={suggestion}
                role="option"
                aria-selected="false"
                className="search__dropdown-item"
                onClick={(): void => {
                  setSearch(suggestion);
                }}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBar;

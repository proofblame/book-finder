import React from 'react';
import './SearchForm.css';

const SearchForm = ({
  handleSubmit,
  searchValue,
  setSearchValue,
  setSearchCategory,
  setSearchSort,
  searchCategory,
  searchSort,
}) => {
  return (
    <div className="search section">
      <form
        name="search-form"
        className="search__form"
        action=""
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="search__field search__field_type_search">
          <input
            className="search__input"
            type="text"
            placeholder="Book"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button className="search__submit" type="submit" value="" />
        </fieldset>
        <fieldset className="search__field search__field_type_select">
          <p className="search__subtitile">Categories</p>
          <select
            name="search-select"
            className="search__select"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </fieldset>
        <fieldset className="search__field search__field_type_select">
          <p className="search__subtitile">Sorting by</p>
          <select
            name="search-select"
            className="search__select"
            value={searchSort}
            onChange={(e) => setSearchSort(e.target.value)}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchForm;

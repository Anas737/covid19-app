import React from "react";
import { Country } from "../../types";

interface SearchProps {
  countries: Country[];
  displayCountryData: (countrySlug: string) => void;
}

const Search: React.FC<SearchProps> = ({ countries, displayCountryData }) => {
  const [filtered, setFiltered] = React.useState({
    init: false,
    countries: [] as Country[],
  });

  const handleOnChange = React.useCallback(
    (e) => {
      const value = e.target.value;

      if (!value || value.length === 0) {
        setFiltered({
          ...filtered,
          countries,
        });

        return;
      }

      const filtredCountries = filtered.countries.filter((countryData) =>
        countryData.Country.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered({
        ...filtered,
        countries: filtredCountries,
      });
    },
    [countries, filtered]
  );

  if (!countries) return <div>No data</div>;

  if (!filtered.init) {
    setFiltered({
      init: true,
      countries,
    });
  }

  return (
    <div className="search">
      <header className="search__header">
        <div className="container">
          <fieldset className="search__input-group">
            <label className="search__icon" htmlFor="search-input">
              <i className="fas fa-search"></i>
            </label>
            <input
              id="search-input"
              className="search__input"
              type="search"
              onChange={handleOnChange}
            />
          </fieldset>
        </div>
      </header>
      <div className="search__content">
        <div className="container">
          {/* search results */}
          <div className="search__result">
            {filtered.countries.map((countryData) => {
              return (
                <div
                  key={countryData.Slug}
                  className="result__item"
                  onClick={() => displayCountryData(countryData.Slug)}
                >
                  {countryData.Country}
                </div>
              );
            })}

            {!filtered.countries.length && <div>No result !</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { Country } from "../../types";

interface SearchProps {
  countries: Country[];
  displayDashboard: () => void;
  displayCountryData: (countrySlug: string) => void;
}

const Search: React.FC<SearchProps> = ({
  countries,
  displayDashboard,
  displayCountryData,
}) => {
  return (
    <div className="search">
      <div className="container">
        <div className="search__content">
          <fieldset className="search__input">
            <input type="search" />
          </fieldset>
        </div>

        {/* search results */}
        <div className="search__result">
          {countries.map((countryData) => {
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
        </div>
      </div>
    </div>
  );
};

export default Search;

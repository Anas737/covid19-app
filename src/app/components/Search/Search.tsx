import React from "react";
import { Country } from "../../../types";

interface SearchProps {
  countries: Country[];
  displayDashboard: () => void;
  displayCountryData: (countrySlug: string) => void;
}

const Search: React.FC<SearchProps> = () => {
  return <div>Search</div>;
};

export default Search;

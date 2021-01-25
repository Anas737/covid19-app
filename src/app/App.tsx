import React from "react";
import "./App.css";

import { DataContext } from "../context";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import CountryData from "./components/CountryData";
import { Country } from "../types";

const DASHBOARD = "DASHBOARD";
const SEARCH = "SEARCH";
const COUNTRY_DATA = "COUNTRY_DATA";

const App = () => {
  const [displayedScreen, setDisplayedSecreen] = React.useState(DASHBOARD);
  const [countryData, setCountryData] = React.useState({} as Country);

  const { fetching, summary } = React.useContext(DataContext);
  const { global, countries } = summary;

  const displayDashboard = React.useCallback(() => {
    setDisplayedSecreen(DASHBOARD);
  }, []);

  const displaySearch = React.useCallback(() => {
    setDisplayedSecreen(SEARCH);
  }, []);

  const displayCountryData = React.useCallback((countrySlug: string) => {
    const countryData = countries.find(
      (_country) => _country.slug === countrySlug
    );

    setCountryData(countryData as Country);
    setDisplayedSecreen(COUNTRY_DATA);
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Dashbaord */}
      {displayedScreen === DASHBOARD && (
        <Dashboard global={global} displaySearch={displaySearch} />
      )}

      {/* Search */}
      {displayedScreen === SEARCH && (
        <Search
          countries={countries}
          displayDashboard={displayDashboard}
          displayCountryData={displayCountryData}
        />
      )}

      {/* Country Data */}
      {displayedScreen === COUNTRY_DATA && (
        <CountryData data={countryData} displayDashboard={displayDashboard} />
      )}

      {/* Fetching */}
      {fetching && <div>Fetching...</div>}
    </div>
  );
};

export default App;

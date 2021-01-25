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
  const [displayedScreen, setDisplayedSecreen] = React.useState(SEARCH);
  const [countryData, setCountryData] = React.useState({} as Country);

  const { fetching, summary } = React.useContext(DataContext);
  const { Global, Countries } = summary;

  const displayDashboard = React.useCallback(() => {
    setDisplayedSecreen(DASHBOARD);
  }, []);

  const displaySearch = React.useCallback(() => {
    setDisplayedSecreen(SEARCH);
  }, []);

  const displayCountryData = React.useCallback(
    (countrySlug: string) => {
      const countryData = Countries.find(
        (_country) => _country.Slug === countrySlug
      );

      setCountryData(countryData as Country);
      setDisplayedSecreen(COUNTRY_DATA);
    },
    [Countries]
  );

  return (
    <div className="App">
      <Header
        displayedScreen={displayedScreen}
        displayDashboard={displayDashboard}
        countryData={countryData}
      />

      {/* dashbaord */}
      {!fetching && displayedScreen === DASHBOARD && (
        <Dashboard global={Global} displaySearch={displaySearch} />
      )}

      {/* search */}
      {!fetching && displayedScreen === SEARCH && (
        <Search countries={Countries} displayCountryData={displayCountryData} />
      )}

      {/* country data */}
      {!fetching && displayedScreen === COUNTRY_DATA && (
        <CountryData data={countryData} />
      )}

      {/* fetching */}
      {fetching && <div className="fetching container">Fetching...</div>}
    </div>
  );
};

export default App;

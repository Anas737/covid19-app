import React from "react";
import { Country } from "../../types";

const DASHBOARD = "DASHBOARD";
const SEARCH = "SEARCH";
const COUNTRY_DATA = "COUNTRY_DATA";

const DASHBOARD_TITLE = "global statistic";
const SEARCH_TITLE = "countries";

interface HeaderProps {
  displayedScreen: string;
  displayDashboard: () => void;
  countryData: Country;
}

const Header: React.FC<HeaderProps> = ({
  displayedScreen,
  displayDashboard,
  countryData,
}) => {
  const [title, setTitle] = React.useState(DASHBOARD_TITLE);
  const [isBackDisplayed, setIsBackDisplayed] = React.useState(false);

  if (displayedScreen === DASHBOARD && title !== DASHBOARD_TITLE) {
    setTitle(DASHBOARD_TITLE);
    setIsBackDisplayed(false);
  }

  if (displayedScreen === SEARCH && title !== SEARCH_TITLE) {
    setTitle("countries");
    setIsBackDisplayed(true);
  }

  if (displayedScreen === COUNTRY_DATA && title !== countryData.Country) {
    setTitle(countryData.Country);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {isBackDisplayed && (
            <button
              className="back-btn"
              type="button"
              onClick={displayDashboard}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          )}
          <h1 className="header__title">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

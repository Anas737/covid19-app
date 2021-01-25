import React from "react";
import { drawHistogram } from "../utils";
import { Global } from "../../types";

import Card from "./Card";

interface DashboardProps {
  global: Global;
  displaySearch: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ global, displaySearch }) => {
  React.useEffect(() => {
    drawHistogram("#dashboard-chart", 300, 300);
  });

  if (!global) return <div>No data</div>;

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard__content">
          <h2 className="dashboard__title">
            <span>Daily new cases</span> for past week
          </h2>

          <div id="dashboard-chart" className="dashboard__chart"></div>

          {/* tatal cases */}
          <Card
            type="cases"
            total={global.TotalConfirmed}
            _new={global.NewConfirmed}
          />

          {/* total deaths */}
          <Card
            type="deaths"
            total={global.TotalDeaths}
            _new={global.NewDeaths}
          />

          {/* total recovered */}
          <Card
            type="recovered"
            total={global.TotalRecovered}
            _new={global.NewRecovered}
          />
        </div>

        <button
          type="button"
          className="search-by-country-btn"
          onClick={displaySearch}
        >
          Search by <span>country</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

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
    const data = [
      {
        status: "New Cases",
        value: global.NewConfirmed,
      },
      {
        status: "New Deaths",
        value: global.NewDeaths,
      },
      {
        status: "New Recovered",
        value: global.NewRecovered,
      },
    ];

    drawHistogram("#dashboard-chart", 400, 400, data, "test");
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

          {/* search by country */}
          <button
            type="button"
            className="search-by-country-btn"
            onClick={displaySearch}
          >
            Search by <span>country</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

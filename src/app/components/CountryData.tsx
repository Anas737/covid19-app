import React from "react";
import { Country } from "../../types";
import { drawLine } from "../utils";
import Card from "./Card";

interface CountryDataProps {
  data: Country;
}

const CountryData: React.FC<CountryDataProps> = ({ data }) => {
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    drawLine("#country-data-chart", 300, 300);
  });

  return (
    <div className="country-data">
      <div className="container">
        <div className="country-data__content">
          <h2 className="country-data__title">
            <span>Daily new cases</span> for 30 days
          </h2>

          <div id="country-data-chart" className="country-data__chart"></div>

          {/* tatal cases */}
          <Card
            type="cases"
            total={data.TotalConfirmed}
            _new={data.NewConfirmed}
          />

          {/* total deaths */}
          <Card type="deaths" total={data.TotalDeaths} _new={data.NewDeaths} />

          {/* total recovered */}
          <Card
            type="recovered"
            total={data.TotalRecovered}
            _new={data.NewRecovered}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryData;

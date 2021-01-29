import React from "react";
import api from "../../api";
import { Country, CountryDetail } from "../../types";
import { drawLine } from "../utils";
import Card from "./Card";

interface CountryDataProps {
  data: Country;
}

const CountryData: React.FC<CountryDataProps> = ({ data }) => {
  React.useEffect(() => {
    (async () => {
      // Get data for the last 7 days for the current country
      const startDate = new Date(data.Date);
      const endDate = new Date();
      endDate.setDate(startDate.getDate() - 7);

      const to = startDate.toISOString().substr(0, 11);
      const from = endDate.toISOString().substr(0, 11);

      const dataDetail: CountryDetail[] = await api.getCountryData(
        data.Slug,
        from,
        to
      );

      const chartSize = 400;

      // confirmed
      const confirmed = dataDetail.map((d) => {
        return {
          date: d.Date,
          value: d.Confirmed,
        };
      });

      drawLine(
        "#confirmed-chart",
        chartSize,
        chartSize,
        confirmed,
        "blue",
        "Confirmed"
      );

      // deaths
      const deaths = dataDetail.map((d) => {
        return {
          date: d.Date,
          value: d.Deaths,
        };
      });

      drawLine("#deaths-chart", chartSize, chartSize, deaths, "red", "Deaths");

      // recovered
      const recovered = dataDetail.map((d) => {
        return {
          date: d.Date,
          value: d.Recovered,
        };
      });

      drawLine(
        "#recovered-chart",
        chartSize,
        chartSize,
        recovered,
        "green",
        "Recovered"
      );
    })();
  });

  return (
    <div className="country-data">
      <div className="container">
        <div className="country-data__content">
          <h2 className="country-data__title">
            <span>Last 7 days</span> cases
          </h2>

          <div className="country-data__charts">
            <div id="confirmed-chart"></div>
            <div id="deaths-chart"></div>
            <div id="recovered-chart"></div>
          </div>

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

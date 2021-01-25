import React from "react";
import { Country } from "../../../types";

interface CountryDataProps {
  data: Country;
  displayDashboard: () => void;
}

const CountryData: React.FC<CountryDataProps> = () => {
  return <div>Country Data</div>;
};

export default CountryData;

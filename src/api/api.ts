import { Summary } from "../types";

const API_URL = "https://api.covid19api.com";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // @return global totals and daily counts
  getSummary(): Promise<Summary> {
    return this.get("summary");
  },

  // @return countries
  getCountries(): Promise<any> {
    return this.get("countries");
  },

  // @param slug: country slug from the summary
  // @param from: start date
  // @param to: end date
  // @return a specific country data
  getCountryData(slug: string, from: Date, to: Date): Promise<any> {
    return this.get(
      `country/${slug}/status/confirmed?from=${from.toDateString()}&to=${
        to.toDateString
      }`
    );
  },

  get(route: string): Promise<any> {
    return fetch(`${API_URL}/${route}`, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        return result;
      })
      .catch((error) => {
        console.log(error);

        return null;
      });
  },
};

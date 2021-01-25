export default class api {
  private readonly API_URL = "https://covid19api.com/";
  private readonly options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // @return get global totals and daily counts
  getSummary(): Promise<any> {
    return this.get("summary");
  }

  // @return countries
  getCountries(): Promise<any> {
    return this.get("countries");
  }

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
  }

  private get(route: string): Promise<any> {
    return fetch(`${this.API_URL}\\${route}`, this.options)
      .then((response) => {
        console.log(response);

        return response;
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  }
}

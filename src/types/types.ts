export interface Global {
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
}

export interface Country {
  country: string;
  countryCode: string;
  slug: string;
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
  date: Date;
  Premium: any;
}

export interface Summary {
  id: string;
  message: string;
  global: Global;
  countries: Country[];
}

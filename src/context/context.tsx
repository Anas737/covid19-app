import React from "react";
import api from "../api";
import { Summary } from "../types";

interface ContextProps {
  fetching: boolean;
  summary: Summary;
}

interface ProviderProps {
  children: React.ReactNode;
}

const Context = React.createContext({} as ContextProps);
const Provider = Context.Provider;

const DataProvider: React.FC<ProviderProps> = ({ children }) => {
  const [fetching, setFetching] = React.useState(true);
  const [summary, setSummary] = React.useState({} as Summary);

  React.useEffect(() => {
    const getSummary = async () => {
      const summary: Summary = await api.getSummary();

      console.log(summary);
      setSummary(summary);
      setFetching(false);
    };

    getSummary();
  }, []);

  return <Provider value={{ fetching, summary }}>{children}</Provider>;
};

export { Context as DataContext, DataProvider };

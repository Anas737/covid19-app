import React from "react";
import api from "../api";
import { Summary } from "../types";
import { ActionTypes, fetching, setSummary } from "./actions";
import { reducer, initialState } from "./reducer";
import { StateType } from "./types";

interface ContextProps {
  state: StateType;
  dispatch: React.Dispatch<ActionTypes>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const Context = React.createContext({} as ContextProps);
const Provider = Context.Provider;

const DataProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const getSummary = async () => {
      dispatch(fetching());

      const summary: Summary = await api.getSummary();

      dispatch(setSummary(summary));
    };

    getSummary();
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Context as DataContext, DataProvider };

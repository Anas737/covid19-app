import { Summary } from "../../types";
import { ActionTypes, FETCHING, SET_SUMMARY } from "../actions";
import { StateType } from "../types";

export const initialState: StateType = {
  fetching: false,
  summary: {} as Summary,
};

export const reducer = (
  state = initialState,
  action: ActionTypes
): StateType => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };

    case SET_SUMMARY:
      return {
        ...state,
        summary: action.summary,
        fetching: false,
      };
  }
};

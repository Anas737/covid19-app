import { Summary } from "../../types";
import { ActionTypes, FETCHING, SET_SUMMARY } from "./types";

export const fetching = (): ActionTypes => {
  return {
    type: FETCHING,
  };
};

export const setSummary = (summary: Summary): ActionTypes => {
  return {
    type: SET_SUMMARY,
    summary,
  };
};

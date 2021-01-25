import { Summary } from "../../types";

export const FETCHING = "FETCHING";
export const SET_SUMMARY = "GET_SUMMARY";

interface FetchingAction {
  type: typeof FETCHING;
}

interface SummaryAction {
  type: typeof SET_SUMMARY;
  summary: Summary;
}

export type ActionTypes = FetchingAction | SummaryAction;

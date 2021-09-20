import axios from "axios";
import { createInferTypeNode } from "typescript";

import TMResponse from "../models/TMResponse";

const key = process.env.REACT_APP_TM_KEY || "";
const city = process.env.REACT_APP_LOCATION || "";

export const getUpcomingEvents = (): Promise<TMResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events/", {
      params: {
        apikey: key,
        city: city,

      },
    })
    .then((response) => {
      return response.data._embedded;
    });
};

import axios from "axios";
import Event from "../models/Event";
import TMResponse from "../models/TMResponse";

const key = process.env.REACT_APP_TM_KEY || "";

export const getUpcomingEvents = (): Promise<TMResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events/", {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data._embedded.events;
    });
};

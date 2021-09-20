import axios from "axios";
import TMResponse from "../models/TMResponse";

const key = process.env.REACT_APP_TM_KEY || "";

export const getUpcomingEvents = (
  postalCode: number | null,
  radius?: number,
  keyword?: string,
  venue?: string
): Promise<TMResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events/", {
      params: {
        apikey: key,
        postalCode: postalCode,
        radius: radius,
        unit: "miles",
        keyword: keyword,
        venue: venue,
      },
    })
    .then((response) => {
      console.log("Monday", response);
      return response.data._embedded;
    });
};

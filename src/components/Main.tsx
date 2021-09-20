import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/TMService";
import "./Main.css";
import ResultList from "./ResultList";
import Event from "../models/Event";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const query = new URLSearchParams(useLocation().search);
  const keyword = query.get("keyword");
  const postalCode = parseInt(query.get("postalCode"));
  const radius = parseInt(query.get("radius"));
  const venue = query.get("venue");

  useEffect(() => {
    getUpcomingEvents(postalCode, keyword, radius, venue).then((response) => {
      // console.log(events);
      /*console.log(events.dates) */
      return setEvents(response.events);
    });
  }, []);
  return (
    <div className="Main">
      <Header />
      <SearchForm />
      <ResultList events={events} dates={[]} />
    </div>
  );
};

export default Main;

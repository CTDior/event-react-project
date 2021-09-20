import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/TMService";
import "./Main.css";
import ResultList from "./ResultList";
import Event from "../models/Event";

const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getUpcomingEvents().then((response) => {
      return setEvents(response.events);
    });
  }, []);
  console.log(events);
  //   console.log("Sunday", events[0].dates);
  return (
    <div className="Main">
      <ResultList events={events} />
    </div>
  );
};

export default Main;

import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/TMService";
import "./Main.css";
import ResultList from "./ResultList";
import Event from "../models/Event"


const Main = () => {
  const [ events, setEvents ] = useState<Event[]>([]);

  useEffect(() => {
      getUpcomingEvents().then((response) => {
        console.log(events);
        /*console.log(events.dates) */
        return setEvents(response.events);
        
      })
  }, [])
  return <div className="Main">
    <ResultList events={events} dates={[]} />
  </div>;
};

export default Main;

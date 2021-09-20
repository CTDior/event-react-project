import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/TMService";
import "./Main.css";
import ResultList from "./ResultList";
import Event from "../models/Event"
import SearchForm from "./SearchForm/SearchForm";
import Header from "./Header/Header";
import { useLocation } from "react-router";


const Main = () => {
  const [ events, setEvents ] = useState<Event[]>([]);
  // const query = new URLSearchParams(useLocation().search);
  // const keyword = query.get("keyword")




  useEffect(() => {
      getUpcomingEvents().then((response) => {
        // console.log(events);
        /*console.log(events.dates) */
        return setEvents(response.events);
        
      })
  }, [])
  return <div className="Main">
    <Header />
    <SearchForm />
    <ResultList events={events} dates={[]} />
    
  </div>;
};

export default Main;

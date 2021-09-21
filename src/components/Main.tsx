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
  const keyword = query.get("keyword") ?? undefined;
  const postalCode = parseInt(query.get("postalCode") ?? "");
  const sort = query.get("sort") ?? "";
  const venue = query.get("venue") ?? "";
  console.log(keyword);
  console.log(query);

  useEffect(() => {
    getUpcomingEvents(postalCode, sort, keyword).then((response) => {
      

      if (response === undefined) {
        setEvents([]);
      } else {
        setEvents(response.events);
        console.log(response.events);
      }
    });
  }, [postalCode, sort, keyword]);

  return (
    <div className="Main">
  
      <section className="SearchFormContainer">
        <SearchForm />
      </section>

      <ResultList events={events} dates={[]}  />
    </div>
  );
};

export default Main;

import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/TMService";
import "./Main.css";


const Main = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    getUpcomingEvents().then((response)=>{
      setEvents(response.events)
    })  
  }, [])
  console.log(events);
  return( 
  <div className="Main">
      Main Works
  </div>
  )
};

export default Main;

import "./Result.css";
import Event from "../models/Event";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  let imagesArray = event.images[0].url;
  let venueName = event._embedded.venues[0].name;
  // Write a function here to convert military time to 
  // regular time.
  let day = ""
  
  return (
    <li className="Result">
      <p> {event.name} </p>
      <img src={imagesArray} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{venueName}</p>
      <a href={event.url}>Ticketmaster Link</a>
      <p>
      <button className="favorite" >Add to Bucket List &hearts;</button>
      <button className="favorite" >Remove from Bucket List</button>
      </p>

    </li>
  );
};

export default Result;

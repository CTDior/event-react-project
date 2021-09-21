import "./Result.css";
import Event from "../models/Event";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";

interface Props {
  event: Event;
}

const Result = ({ event }: Props) => {
  let imagesArray = event.images[0].url;
  let venueName = event._embedded.venues[0].name;
  // Write a function here to convert military time to 
  // regular time.
  let day = ""
  
  const {favorites, addFavorite, removeFavorite} = useContext(FavoritesContext); // this gets the add favorite function from context
 
  const isFav = (url: string): boolean => {
    return favorites.some( (event) => {
      return event.url === url;
    })
  }




  return (
    <li className="Result">
      <p> {event.name} </p>
      <img src={imagesArray} alt={event.name} />
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{venueName}</p>
      <a href={event.url}>Ticketmaster Link</a>
      <p>
      {isFav(event.url) === false &&
        <button className="favorite" onClick={()=>addFavorite(event)} >Add to Bucket List &hearts;</button>
        }
      {isFav(event.url) &&
        <button className="favorite" onClick={()=>removeFavorite(event.url)}>Remove from Bucket List</button>
      }
      </p>
        
    </li>
  );
};

export default Result;

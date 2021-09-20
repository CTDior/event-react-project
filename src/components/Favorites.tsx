import Result from "./Result";
import "./Favorites.css";
import Event from "../models/Event"
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
/* import TMService from "../services/TMService" */

const Favorites = () => {
  //const context variable here     
  const {favorites, removeFavorite} = useContext(FavoritesContext);  
  
    return (
        <ul className="FavoritesList">
                {favorites.map((event) =>(
                    <Result event={event} key={event.name} />
                    // add remove favorite here
                ))}
        </ul>
    );
}

export default Favorites;
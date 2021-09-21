import Result from "./Result";
import "./Favorites.css";
import Event from "../models/Event"
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import ResultList from "./ResultList";
/* import TMService from "../services/TMService" */

const Favorites = () => {
  //const context variable here     
  const {favorites} = useContext(FavoritesContext);  
  
    return (
        <div>
            <ResultList events={favorites} dates={[]}  />
        </div>
    );
}

export default Favorites;
import { createContext } from "react";
import Event from "../models/Event";

interface FavoritesContextModel {
  favorites: Event[];
  addFavorite: (event: Event) => void;
  removeFavorite: (id: string) => void; 
  //do we need something besides id?
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  addFavorite: () => { },
  removeFavorite: () => { }
}

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;
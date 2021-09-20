import { ReactNode, useState } from "react";
   import Event from "../models/Event";
   import FavoritesContext from "./FavoritesContext";
 
   interface Props {
    children: ReactNode;
   }
 
   const FavoritesContextProvider = ({ children }: Props) => {
    const [favorites, setFavorites] = useState<Event[]>([]);
    const addFavorite = (event: Event): void => {
      setFavorites((prev) => [...prev, event]);
    };
    const removeFavorite = (url: string): void => {
      const index: number = favorites.findIndex((item) => item.url === url);
      setFavorites((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    };
    return (
      <FavoritesContext.Provider
        value={{ favorites, addFavorite, removeFavorite }}
      >
        {children}
      </FavoritesContext.Provider>
    );
   };
 
   export default FavoritesContextProvider;

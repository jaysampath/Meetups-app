import { createContext, useState } from "react";

 const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite:(meetupId) => {},
  itemIsFavorite:(meetupId) => {}

});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  

  const addFovoriteHander = (favoriteMeetup) => {
    setUserFavorites((prevFavoriteMeetups) => {
      return prevFavoriteMeetups.concat(favoriteMeetup);
    });
  };
  const removeFovoriteHandler = (meetupId) => {
      setUserFavorites(prevFavoriteMeetups => {
         return  prevFavoriteMeetups.filter(meetup => meetup.id!==meetupId);
      })
  };
  const itemIsFavoriteHandler = (meetupId) => {
      return userFavorites.some(meetup => meetup.id === meetupId)
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite:addFovoriteHander,
    removeFavorite:removeFovoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;

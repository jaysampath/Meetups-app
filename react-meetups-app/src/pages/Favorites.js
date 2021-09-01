import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/Meetups/MeetUpList";
const Favourites = () => {
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if(favoriteCtx.totalFavorites===0){
        content = <p>You got no favorites yet. Start adding some?</p>;
    }else{
        content = <MeetUpList meetups={favoriteCtx.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}

        </section>
    )
};

export default Favourites;
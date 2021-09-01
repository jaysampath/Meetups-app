import classes from './MeetupItem.module.css';
import Card from '../UI/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const MeetUpItem = (props) => {

  const favouriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favouriteCtx.itemIsFavorite(props.id)
  
  const toggleFavoriteStatusHandler = () => {
        if(itemIsFavorite){
          favouriteCtx.removeFavorite(props.id);
        }else{
          favouriteCtx.addFavorite({
            id: props.id,
            title:props.title,
            description:props.description,
            image:props.image,
            address:props.address
          })
        }
  }

  return (
    <Card  className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt="meetup " />
      </div>
      <div className={classes.content}>
        <h3> {props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites':'Add to Favorites'}</button>
      </div>
    </Card>
  );
};

export default MeetUpItem;

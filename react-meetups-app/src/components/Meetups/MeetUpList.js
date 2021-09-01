import MeetUpItem from "./MeetUpItem";
import classes from "./MeetupList.module.css";

const MeetUpList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};

export default MeetUpList;

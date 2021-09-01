import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";
const NewMeetupForm = (props) => {
  const enteredTitleRef = useRef();
  const enteredImageRef = useRef();
  const enteredAddressRef = useRef();
  const enteredDescriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = enteredTitleRef.current.value;
    const enteredImage = enteredImageRef.current.value;
    const enteredAddress = enteredAddressRef.current.value;
    const enteredDescription = enteredDescriptionRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title <span className={classes.required}> * </span>{" "}
          </label>
          <input ref={enteredTitleRef} id="title" type="text" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image <span className={classes.required}> * </span>{" "}
          </label>
          <input ref={enteredImageRef} id="image" type="url" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">
            Meetup Address <span className={classes.required}> * </span>{" "}
          </label>
          <input ref={enteredAddressRef} id="address" type="text" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">
            Meetup description <span className={classes.required}> * </span>{" "}
          </label>
          <textarea
            ref={enteredDescriptionRef}
            id="description"
            required
            rows="5"
          />
        </div>

        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

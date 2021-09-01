import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetUp = () => {
    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch(
            "https://react-meetups-6c31f-default-rtdb.firebaseio.com/meetups.json",
            {
              method: "POST",
              body: JSON.stringify(meetupData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((response) => {
            return response.json();
          }).then(responseData => {
             // console.log(responseData);
              history.replace('/');
          }).catch(error=>{
              throw new Error('Error while adding data to firebase '+error.message);
          })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup = {addMeetupHandler} />
        </section>
    )
};

export default NewMeetUp;
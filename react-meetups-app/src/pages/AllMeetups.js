import { useEffect, useState } from "react";
import MeetUpList from "../components/Meetups/MeetUpList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetups = () => {
   const [loadedData, setLoadedData] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [error,setError] = useState();

  useEffect(() => {
      setIsLoading(true);
    fetch(
      "https://react-meetups-6c31f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
          setIsLoading(false);
          setError(null);
        return response.json();
      })
      .then((responseData) => {
       // console.log(responseData);
        const fetchedData = [];
        for(const key in responseData){
            fetchedData.push({
                id: key,
                ...responseData[key]
            })
        }
        setLoadedData(fetchedData);
      })
      .catch((error) => {
          setIsLoading(false);
          setError("Error while fetching data from database. Please try again after sometime");
       // throw new Error(error.message);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      {isLoading && <p>Fetching Meetups data..</p>}
      { !isLoading && <MeetUpList meetups={loadedData} />}
      {error && <p style={{color:'red'}}> {error}</p>}
    </section>
  );
};

export default AllMeetups;

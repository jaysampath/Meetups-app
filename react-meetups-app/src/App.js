import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetUp from "./pages/NewMeetup";
import Favourites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetUp />
        </Route>
        <Route path="/favorites" exact>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

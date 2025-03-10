import Button from "./Components/Button";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Pages/Homepage";
import EventPage from "./Pages/EventPage";
import CateringPage from "./Pages/CateringPage";
import MenuPage from "./Pages/MenuPage";
import ReservationPage from "./Pages/ReservationPage";
import RestaurantPage from "./Pages/RestaurantPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Event">
            <EventPage/>
          </Route>
          <Route path="/Catering">
            <CateringPage/>
          </Route>
          <Route path="/Menu">
            <MenuPage/>
          </Route>
          <Route path="/Reservation">
            <ReservationPage/>
          </Route>
          <Route path="/Restaurant">
            <RestaurantPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

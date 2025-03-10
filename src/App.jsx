import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import CateringPage from "./Pages/CateringPage";
import MenuPage from "./Pages/MenuPage";
import ReservationPage from "./Pages/ReservationPage";
import RestaurantPage from "./Pages/RestaurantPage";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Event" element={<EventPage />} />
          <Route path="/Catering" element={<CateringPage />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Reservation" element={<ReservationPage />} />
          <Route path="/Restaurant" element={<RestaurantPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

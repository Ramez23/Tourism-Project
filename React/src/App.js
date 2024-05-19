import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historical from "./pages/Historical";
import Adventure from "./pages/Adventure";
import Cultural from "./pages/Cultural";
import Religious from "./pages/Religious";
import Nautical from "./pages/Nautical";
import Medical from "./pages/Medical";
import All from "./pages/AllPlaces";
import SignLogin from "./pages/SignLogin";
import AboutUs from "./pages/AboutUs";
import TourGuides from "./pages/TourGuides";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/historical" element={<Historical />}></Route>
        <Route path="/adventure" element={<Adventure />}></Route>
        <Route path="/cultural" element={<Cultural />}></Route>
        <Route path="/religious" element={<Religious />}></Route>
        <Route path="/nautical" element={<Nautical />}></Route>
        <Route path="/medical" element={<Medical />}></Route>
        <Route path="/allplaces" element={<All />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/tourguides" element={<TourGuides />}></Route>
        <Route path="/signin" element={<SignLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

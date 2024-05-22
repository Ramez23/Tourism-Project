import React, { useState, useEffect } from "react";
import axios from "axios";
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import Floatnav from "../components/Float-nav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TourGuide from "../components/TourGuide";
import Category_part from "../components/Category_part";

const API_URL = "http://localhost:3000/api/v1/tours";

function TourGuides() {
  const [tours, setTours] = useState([]);
  const isMobile = ScreenSize();
  const isScrolled = Scroll(250);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        setTours(data.data.data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <>
      {isScrolled ? <Floatnav /> : <Nav />}
      <div className="whole-tourguide">
        {isMobile ? (
          <Category_part
            img="guidever.jpg"
            h2="EXPLORE WITH OUR TOUR GUIDES!"
            h3="Your Key to Unlocking Destination Delights."
          />
        ) : (
          <Category_part
            img="guide.jpeg"
            h2="EXPLORE WITH OUR TOUR GUIDES!"
            h3="Your Key to Unlocking Destination Delights."
          />
        )}
        <div className="staff-div">
          {tours.map((tour) => (
            <TourGuide
              key={tour._id}
              img={tour.imageCover}
              name={tour.name}
              brief={tour.summary}
              city={tour.startLocation.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TourGuides;

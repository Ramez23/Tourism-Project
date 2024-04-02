import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import data from "../data/places.json"; // Import your data file containing the places
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import FloatNav from '../components/Float-nav'

export default function Historical() {
    const isMobile = ScreenSize()
    // Filter the data to get only the places with historical tourism
    const historicalPlaces = data.filter(place => place.tourism === "historical");
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                {isMobile ? <Category_part
                    img="histver.jpg"
                    h2="DISCOVER EGYPT'S HISTORICAL TREASURES!"
                    h3="Explore Egypt's ancient wonders, where millennia-old temples, pyramids, and tombs reveal a glorious past."
                /> : <Category_part
                    img="hist.jpg"
                    h2="DISCOVER EGYPT'S HISTORICAL TREASURES!"
                    h3="Explore Egypt's ancient wonders, where millennia-old temples, pyramids, and tombs reveal a glorious past."
                />}

                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {/* Map through the filtered historical places and render CardPlace components */}
                        {historicalPlaces.map(place => (
                            <CardPlace
                                key={place.title}
                                title={place.title}
                                desc={place.desc}
                                img={place.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer name='footer-main' />
        </>
    );
}

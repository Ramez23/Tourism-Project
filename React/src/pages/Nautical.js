import React from "react";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data/places.json";
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import FloatNav from '../components/Float-nav'

export default function Nautical() {
    const isMobile = ScreenSize()
    // Extracting the nautical tourism places data from the imported JSON file
    const nauticalPlaces = data.filter(place => place.tourism === "nautical");
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                {isMobile ?
                    <Category_part
                        img="nautver.jpg"
                        h2="EXPLORE EGYPT'S NAUTICAL TOURISM"
                        h3="Discover Egypt's coastal treasures: pristine beaches, vibrant coral reefs, and ancient ports."
                    /> :
                    <Category_part
                        img="naut.jpg"
                        h2="EXPLORE EGYPT'S NAUTICAL TOURISM"
                        h3="Discover Egypt's coastal treasures: pristine beaches, vibrant coral reefs, and ancient ports."
                    />}

                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {/* Map over the nauticalPlaces array and render CardPlace components */}
                        {nauticalPlaces.map((place, index) => (
                            <CardPlace
                                key={index}
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
    )
}

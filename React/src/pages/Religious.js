import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import data from "../data/places.json"; // Import the data
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import FloatNav from '../components/Float-nav'

export default function Religious() {
    const isMobile = ScreenSize()
    // Filter the data to extract only the places related to religious tourism
    const religiousPlaces = data.filter(place => place.tourism === "religious");
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                {isMobile ?
                    <Category_part
                        img="relver.jpg"
                        h2="EXPERIENCE EGYPT'S RELIGIOUS TOURISM"
                        h3="Explore Egypt's sacred sites, where ancient temples, mosques, and churches reveal a rich religious heritage."
                    /> :
                    <Category_part
                        img="religious.jpg"
                        h2="EXPERIENCE EGYPT'S RELIGIOUS TOURISM"
                        h3="Explore Egypt's sacred sites, where ancient temples, mosques, and churches reveal a rich religious heritage."
                    />}
                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {/* Map over the religiousPlaces array and render CardPlace components */}
                        {religiousPlaces.map((place, index) => (
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

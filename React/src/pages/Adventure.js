import React from "react";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data/places.json"
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Adventure() {
    // Filter the data to get only the places with adventure tourism
    const adventurePlaces = data.filter(place => place.tourism === 'adventure');
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                <Category_part img='adventure.jpg' h2="DISCOVER EGYPT' S ADVENTURE THRILLS!" h3="Your Gateway to Unforgettable Experiences." />
                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {/* Map through the filtered adventure places and render CardPlace components */}
                        {adventurePlaces.map(place => (
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
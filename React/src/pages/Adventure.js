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
                <Category_part img='adventure.jpg' title='Adventure Tourism' def='Adventure Tourism in Egypt beckons thrill-seekers with a treasure trove of adrenaline-pumping experiences. Egypt’s vast deserts are an open playground for those who crave excitement. Desert safaris offer the opportunity to explore the mesmerizing dunes of the Sahara, where you can ride on a camel or even conquer the sands on a quad bike. Beneath the crystal-clear waters of the Red Sea, scuba diving enthusiasts will discover a vibrant underwater world teeming with colorful marine life, coral reefs, and sunken shipwrecks. But if you seek adventure of a different kind, don’t miss the chance to ascend into the skies of Luxor in a hot air balloon, providing breathtaking panoramic views of ancient wonders and the Nile.' />
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
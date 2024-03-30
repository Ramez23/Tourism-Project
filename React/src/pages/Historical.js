import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import data from "../data/places.json"; // Import your data file containing the places
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Historical() {
    // Filter the data to get only the places with historical tourism
    const historicalPlaces = data.filter(place => place.tourism === "historical");
    const isScrolled=Scroll(250)
    return (
        <>
            {isScrolled?<FloatNav/>:<Nav/>}
            <div className="hist-main">
                <Category_part img='hist.jpg' title='Historical Tourism' def='Historical Tourism in Egypt is an enchanting journey through the annals of time, where the echoes of ancient civilizations resonate in the very stones and sands of the land. As you embark on this exploration, you’ll stand in awe before the iconic Pyramids of Giza, an enduring testament to human ingenuity and engineering prowess. Nearby, the enigmatic Sphinx guards its secrets, inviting contemplation of millennia-old mysteries. In Luxor, the Valley of the Kings beckons, revealing the final resting place of Egyptian pharaohs, treasures, and temples that narrate stories etched in hieroglyphs.' />
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

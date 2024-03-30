import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import data from "../data/places.json"; // Import the data
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Religious() {
    // Filter the data to extract only the places related to religious tourism
    const religiousPlaces = data.filter(place => place.tourism === "religious");
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                <Category_part img='religious.jpg' title='Religious Tourism' def='Religious Tourism in Egypt offers a profound journey through the spiritual tapestry of this ancient land. As you delve into Egypt’s religious heritage, you’ll encounter a rich mosaic of historical mosques and churches that have stood for centuries, witnessing the nation’s diverse faith traditions. From the majestic Sultan Hassan Mosque in Cairo to the serene Coptic churches of Old Cairo, these sacred sites offer a glimpse into Egypt’s religious history and architectural marvels. For those seeking a more remote pilgrimage, St. Catherine’s Monastery, nestled at the base of Mount Sinai, presents a spiritual haven. This ancient monastery houses a wealth of religious relics and art and offers a tranquil setting for contemplation.' />
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

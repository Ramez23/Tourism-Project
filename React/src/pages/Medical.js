import React from "react";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

// Import the data
import data from "../data/places.json"; // Assuming the data is stored in a JSON file

export default function Medical() {
    const medicalPlaces = data.filter(place => place.tourism == 'medical')
    const isScrolled = Scroll(250)

    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                <Category_part img='medi.jpg' title='Medical Tourism' def="Medical tourism in Egypt merges modern healthcare with a rich cultural backdrop. Renowned hospitals in Cairo and specialized clinics offer high-quality care across various specialties. Beyond medical facilities, wellness retreats along the Red Sea provide a holistic approach to recovery. Egypt's medical tourism blends advanced treatments with a journey through a nation steeped in history, offering a unique and rejuvenating experience at the crossroads of healthcare and ancient culture." />
                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {/* Map over the medicalData array and render CardPlace components */}
                        {medicalPlaces.map((place, index) => (
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

import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import culturalData from "../data/places.json"; // Assuming your data file is named culturalData.js
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Cultural() {
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            <div className="hist-main">
                <Category_part
                    img='cultural.jpg'
                    h2="IMMERSE IN EGYPT' S CULTURAL RICHES!"
                    h3='Your Passport to Cultural Exploration.' />
                <div className="rec-hist-part">
                    <h2>Recommended Places</h2>
                    <div className="cards-rec-hist">
                        {culturalData.map(place => (
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

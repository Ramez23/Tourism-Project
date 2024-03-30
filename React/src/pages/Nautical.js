import React from "react";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data/places.json";
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Nautical() {
    // Extracting the nautical tourism places data from the imported JSON file
    const nauticalPlaces = data.filter(place => place.tourism === "nautical");
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled?<FloatNav/>:<Nav/>}
            <div className="hist-main">
                <Category_part img='naut.jpeg' title='Nautical Tourism' def="Nautical tourism in Egypt unveils a mesmerizing odyssey across the cerulean waters that embrace this historically enriched land. Exploring Egypt's maritime legacy introduces travelers to a diverse array of seafaring wonders, from bustling ports to ancient harbors steeped in centuries of maritime trade and exploration. The vibrant Mediterranean coastline weaves a vivid tapestry of coastal towns, each exuding its unique maritime allure. Alexandria's bustling port echoes with the tales of ancient mariners, while the Red Sea's coastal towns beckon divers and snorkelers to vibrant coral reefs. For those craving a secluded maritime retreat, the serene waters around the Sinai Peninsula offer a chance to sail along pristine coastlines, discovering hidden coves and secluded beaches." />
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

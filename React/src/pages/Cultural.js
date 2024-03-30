import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import CardPlace from "../components/CardPlace";
import culturalData from "../data/places.json"; // Assuming your data file is named culturalData.js
import { Scroll } from "../func/Scroll";
import FloatNav from '../components/Float-nav'

export default function Cultural() {
    const isScrolled=Scroll(250)
    return (
        <>
            {isScrolled?<FloatNav/>:<Nav/>}
            <div className="hist-main">
                <Category_part img='cultural.jpg' title='Cultural Tourism' def='Cultural Tourism in Egypt is a delightful immersion into a world where ancient traditions and contemporary vibrancy coexist harmoniously. As you embark on this cultural odyssey, you’ll discover the heart and soul of Egypt through its music and dance, where traditional rhythms and graceful movements have transcended time. The culinary delights of Egyptian cuisine await your taste buds, offering a compelling fusion of flavors and aromas that have been perfected over generations. Arts and crafts flourish here, with artisans crafting intricate pieces that reflect the nation’s rich heritage and creativity.' />
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

import React from "react";
import { Scroll } from '../func/Scroll'
import ScreenSize from "../func/ScreenSize";
import Floatnav from '../components/Float-nav'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import TourGuide from "../components/TourGuide";
import Category_part from "../components/Category_part";
export default function TourGuides() {
    const isMobile = ScreenSize()
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <Floatnav /> : <Nav />}
            <div className="whole-tourguide">
                {isMobile ?
                    <Category_part
                        img='guidever.jpg'
                        h2="EXPLORE WITH OUR TOUR GUIDES!"
                        h3='Your Key to Unlocking Destination Delights.' />
                    :
                    <Category_part
                        img='guide.jpeg'
                        h2="EXPLORE WITH OUR TOUR GUIDES!"
                        h3='Your Key to Unlocking Destination Delights.' />
                }
                <div className="staff-div">
                    <TourGuide img='tour3.jpeg' name='Ahmed Hassan' brief="Passionate about Egyptian history and culture. Fluent in English, French, and Arabic. Specializes in guiding visitors through the wonders of ancient Egypt, including the Pyramids of Giza and the temples of Luxor." city="Cairo" />
                    <TourGuide img='tour2.jpeg' name='Fatima Ali' brief="Enthusiastic and knowledgeable tour guide with a love for connecting visitors with the vibrant culture of Alexandria. Skilled in storytelling and making history come alive. Fluent in Arabic and English." city="Alexandria" />
                    <TourGuide img='tour1.jpeg' name="Mohamed Said" brief="Experienced tour guide based in Aswan, known for his expertise in Nubian history and traditions. Offers personalized tours to Philae Temple, Abu Simbel, and other fascinating sites along the Nile River." city="Aswan" />
                    <TourGuide img='tour4.jpg' name='Nour Ibrahim' brief="Dynamic and friendly tour guide from Luxor, passionate about showcasing the treasures of ancient Thebes. Fluent in English and German. Offers insightful tours to the Valley of the Kings, Karnak Temple, and more." city="Luxor" />
                </div>
            </div>
            <Footer name='footer-main' />
        </>
    )
}
import React from "react";
import { Scroll } from '../func/Scroll'
import { isCancel } from "axios";
import Floatnav from '../components/Float-nav'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import TourGuide from "../components/TourGuide";

export default function TourGuides() {
    const isScrolled = Scroll(250)
    return (
        <>
            {isScrolled ? <Floatnav /> : <Nav />}
            <div className="whole-tourguide">
                <div className="first-home-part">
                    <img
                        className="background-image"
                        src={require("../imgs/guide.jpeg")}
                    />
                    <span className="first-home-part-writings">
                        <h2 className="first-home-part-writings-h2">
                            EXPLORE WITH OUR TOUR GUIDES!
                        </h2>
                        <h3>Your Key to Unlocking Destination Delights.</h3>
                    </span>
                </div>
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
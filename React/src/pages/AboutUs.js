import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import FloatNav from '../components/Float-nav'
export default function AboutUs() {
    const isMobile = ScreenSize()
    const isScrolled1 = Scroll(250)
    let isScrolled2
    if (isMobile) {
         isScrolled2 = Scroll(900)
    } else {
         isScrolled2=Scroll(700)
    }
    return (
        <>
            {isScrolled1 ? <FloatNav /> : <Nav />}
            <div className="about-page">
                {isMobile ?
                    <Category_part
                        img='aboutver.jpg'
                        h2='About Us'
                        h3="Welcome to MeetThePharaohs.com! We're passionate about sharing Egypt's timeless beauty with the world. Join us on a journey of discovery, adventure, and wonder as we unveil the mysteries of Egypt, one breathtaking moment at a time."
                    /> :
                    <Category_part
                        img='aboutdark .jpg'
                        h2='About Us'
                        h3="Welcome to MeetThePharaohs.com! We're passionate about sharing Egypt's timeless beauty with the world. Join us on a journey of discovery, adventure, and wonder as we unveil the mysteries of Egypt, one breathtaking moment at a time."
                    />
                }

                <div className="about-content">
                    <div className="about-each">
                        <span className="about-writings">
                            <h4>At MeetThePharaohs.com, we offer:</h4>
                            <ol className={isScrolled1 ? 'slide-in-list-on' : 'slide-in-list-off'}>
                                <li><strong>Insider Insights:</strong> Explore hidden gems and off-the-beaten-path destinations.</li>
                                <li><strong>Complete Guides:</strong> Plan your trip with confidence using our comprehensive travel guides.</li>
                                <li><strong>Cultural Immersion:</strong> Immerse yourself in Egypt's rich heritage and vibrant culture.</li>
                                <li><strong>Sustainability:</strong> We prioritize responsible tourism to preserve Egypt's beauty.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="about-each">
                        <span className="about-writings">
                            <h4>Discover Egypt's wonders with us:</h4>
                            <ol className={isScrolled2 ? 'slide-in-list-on' : 'slide-in-list-off'}>
                                <li><strong>Guides & Itineraries:</strong> From iconic landmarks to hidden gems, find everything you need to plan your adventure.</li>
                                <li><strong>Insider Tips: </strong> Insider Tips: Benefit from local insights for authentic experiences off the beaten path.</li>
                                <li><strong>Cultural Insights:</strong> Cultural Insights: Delve into Egypt's rich heritage with in-depth articles and features.</li>
                                <li><strong>Practical Advice:</strong> Navigate your travels smoothly with essential tips and advice.</li>
                            </ol>
                        </span>
                    </div>
                </div>
                <Footer name='footer-main' />
            </div>

        </>
    )
}
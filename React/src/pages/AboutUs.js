import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Category_part from "../components/Category_part";
import { Scroll } from "../func/Scroll";
import FloatNav from'../components/Float-nav'
export default function AboutUs() {
    const isScrolled1 = Scroll(250)
    const isScrolled2 = Scroll(700)
    return (
        <>
            {isScrolled1?<FloatNav/>:<Nav/>}
            <div className="about-page">
                <Category_part img='about.jpg' title='About Us' def="Welcome to MeetThePharaohs.com!, where our love for Egypt's timeless beauty fuels our mission to share its wonders with the world. Inspired by the desire to reveal the hidden treasures and authentic experiences awaiting travelers, we are dedicated to showcasing Egypt's lesser-known gems and promoting responsible tourism practices. Join us on a journey of discovery, adventure, and wonder as we unveil the mysteries of Egypt, one breathtaking moment at a time." />
                <div className="about-content">
                    <div className="about-each">
                        <span className="about-writings">
                            <h2>Discover Egypt's Secrets with MeetThePharaohs.com</h2>
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
                            <h2>Explore Egypt with MeetThePharaohs.com</h2>
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
                <Footer name='footer-main-about' />
            </div>

        </>
    )
}
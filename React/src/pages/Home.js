import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Scroll } from "../func/Scroll";
import FloatNav from "../components/Float-nav";
import CategoryPart from "../components/Category_part";
import '../style/mobile.css'
import ScreenSize from "../func/ScreenSize";
import ReasonHome from "../components/ReasonHome";


export default function Home() {
	const isScrolled = Scroll(150)
	const isMobile = ScreenSize();
	return (
		<>
			{isScrolled ? <FloatNav /> : <Nav />}
			<div className="whole-home">
				{isMobile ?
					<CategoryPart img='homever.jpg' h2='WELCOME TO MeetThePharaohs.com!' h3='Your Gateway to the Wonders of the Nile.' />
					: <CategoryPart img='spencer-davis-ONVA6s03hg8-unsplash.jpg' h2='WELCOME TO MeetThePharaohs.com!' h3='Your Gateway to the Wonders of the Nile.' />
				}
				{isMobile ? <div className="why-choose-home">
					<h2>Why choose us</h2>
					<div className="reasons-part">
						<ReasonHome h3='Expert Guidance' image='expert.jpg' />
						<ReasonHome h3='Tailored Itineraries' image='Tailored Itineraries.jpg' />
						<ReasonHome h3='Local Experiences' image='Local Experiences.jpg' />
						<ReasonHome h3='Safe and Secure' image='safe.jpg' />
					</div>
				</div>
					: <div className="why-choose-home">
						<h2>Why choose us</h2>
						<div className="reasons-part">
							<div className="sep-reason">
								<h3>Expert Guidance</h3>
								<img src={require('../imgs/expert.jpg')} />
							</div>
							<div className="double-reasons">
								<div className="sec-reason">
									<h3>Tailored Itineraries</h3>
									<img src={require('../imgs/Tailored Itineraries.jpg')} />
								</div>
								<div className="third-reason">
									<h3>Local Experiences</h3>
									<img src={require('../imgs/Local Experiences.jpg')} />
								</div>
							</div>
							<div className="sep-reason">
								<h3>Safe and Secure</h3>
								<img src={require('../imgs/safe.jpg')} />
							</div>
						</div>
					</div>}
				<div className="home-dest">
					<span>
						<h2 className="dest-h2">Explore Our Egypt</h2>
					</span>
					<div className="dest-items">
						<div className='dest-itemL'>
							<img src={require("../imgs/cairo.jpg")} />
							<span className="dest-writings">
								<h4>Cairo</h4>
							</span>
						</div>
						<div className='dest-itemR'>
							<img src={require("../imgs/luxor.jpg")} />
							<span className="dest-writings">
								<h4>Luxor</h4>
							</span>
						</div>
						<div className='dest-itemR'>
							<img src={require("../imgs/aswan.jpg")} />
							<span className="dest-writings">
								<h4>Aswan</h4>
							</span>
						</div>
						<div className='dest-itemL'>
							<img src={require("../imgs/red sea.jpg")} />
							<span className="dest-writings">
								<h4>Red Sea</h4>
							</span>
						</div>
					</div>
				</div>
			</div >
			<Footer name='footer-main' />
		</>
	);
}

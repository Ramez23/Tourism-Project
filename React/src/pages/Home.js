import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Scroll } from "../func/Scroll";
import FloatNav from "../components/Float-nav";

export default function Home() {
	const isScrolled = Scroll(250)
	return (
		<>
			{isScrolled?<FloatNav/>:<Nav/>}
			<div className="whole-home">
				<div className="first-home-part">
					<img
						className="background-image"
						src={require("../imgs/spencer-davis-ONVA6s03hg8-unsplash.jpg")}
					/>
					<span className="first-home-part-writings">
						<h2 className="first-home-part-writings-h2">
							WELCOME TO MeetThePharaohs.com!
						</h2>
						<h3>Your Gateway to the Wonders of the Nile.</h3>
					</span>
				</div>
				<div className="why-choose-home">
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
				</div>
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
			</div>
			<Footer name='footer-main' />
		</>
	);
}

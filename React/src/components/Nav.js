import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Scroll } from "../func/Scroll";
import '@fortawesome/fontawesome-free/css/all.css';
export default function Nav(props) {
	const isScrolled = Scroll(250)
	return (
		<nav className='main-nav-body'>
			<div className="logo-search">
				<span>
					<Link to={'/'}>
						<img className="logo-img"  src={require('../imgs/image-nT9eQgiX_U-transformed-removebg-preview (1).png')} width='80px' />
					</Link>
				</span>

				<div class="search-container">
					<input type="text" class="search-input" placeholder="Search..." />
					<button class="search-button">Search</button>
				</div>
			</div>
			<div>
				<ul className="nav-list">
					<li>
						<Link to={'/'} className="nav-link">Home</Link>
					</li>
					<li className="dropdown">
						<Link className="nav-link" to={'/allplaces'}>Tours</Link>
						<div className="dropdown-content">
							<Link className="nav-link" to={'/historical'}>Historical</Link>
							<Link className="nav-link" to={'/adventure'}>Adventure</Link>
							<Link className="nav-link" to={'/cultural'}>Cultural</Link>
							<Link className="nav-link" to={'/religious'}>Religious</Link>
							<Link className="nav-link" to={'/nautical'}>Nautical</Link>
							<Link className="nav-link" to={'/medical'}>Medical</Link>
						</div>
					</li>
					<li>
						<Link to={'/tourguides'} className="nav-link" >Tour Guides</Link>
					</li>
					<li>
						<Link to={'/aboutus'} className="nav-link">About Us</Link>
					</li>
					<li>
						<Link className="nav-link">Blog</Link>
					</li>
					<li className="user-things">
						<Link to={'/profile'} className="nav-link"><i class="fa-regular fa-user fa-lg"></i></Link>
						<Link to={'/signin'} className="nav-link">Log In</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

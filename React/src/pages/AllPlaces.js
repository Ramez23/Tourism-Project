import React, { useState } from "react";
import CardPlace from "../components/CardPlace";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from '../data/places.json';
import { Scroll } from "../func/Scroll";
import ScreenSize from "../func/ScreenSize";
import FloatNav from '../components/Float-nav'
import CategoryPart from "../components/Category_part";
export default function All() {
    const isMobile = ScreenSize()
    const isScrolled = Scroll(250)
    // State variables for filtering
    const [filterCriteria, setFilterCriteria] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    // Filter function
    const filterData = () => {
        const filtered = data.filter(item =>
            item.tourism.toLowerCase().includes(filterCriteria.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <>
            {isScrolled ? <FloatNav /> : <Nav />}
            {/* Filter select */}
            {isMobile ?
                <CategoryPart img='allver.jpg' h2='Our Marvelous Egypt' h3="Discover places to visit!" />
                :
                <CategoryPart img='all.jpg' h2='Our Marvelous Egypt' h3="Discover places to visit!" />
            }
            <div className="places-whole">
                <div className="filter-options">
                    <select
                        className="select-dropdown"
                        value={filterCriteria}
                        onChange={e => setFilterCriteria(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Adventure">Adventure Tourism</option>
                        <option value="Historical">Historical Tourism</option>
                        <option value="Cultural">Cultural Tourism</option>
                        <option value="Medical">Medical Tourism</option>
                        <option value="Nautical">Nautical Tourism</option>
                        <option value="Religious">Religious Tourism</option>
                    </select>
                    <button className='filter-button' onClick={filterData}>Filter</button>
                </div>
                {/* Display filtered data */}
                {filteredData.map(place => (
                    <CardPlace
                        key={place.title}
                        title={place.title}
                        desc={place.desc}
                        img={place.img}
                    />
                ))}
            </div>
            <Footer name='footer-main' />
        </>
    )
}

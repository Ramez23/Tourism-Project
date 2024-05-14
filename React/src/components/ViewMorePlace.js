import React, { useState } from "react";
import placeData from '../data/places.json';

export default function ViewMore(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle isVisible state when clicking
    };

    const placeId = props.place;

    // Filter the placeData array to find the place with the matching id
    const place = placeData.find(place => place.id === placeId);

    console.log(placeId);

    return (
        <>
            {place && (
                <>
                    {isVisible && (
                        <div className="modal">
                            <div className="modal-content">
                                <i className="fa-solid fa-xmark fa-lg" onClick={toggleVisibility}></i>
                                <h2>Details</h2>
                                <h3>{place.name}</h3>
                                <p>{place.description}</p>
                                {/* Add additional content here */}
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

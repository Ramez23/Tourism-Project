import React from "react";
import ScreenSize from "../func/ScreenSize";
import defaultImage from "../imgs/tour1.jpeg"; // Adjust the path as necessary

function TourGuide({ img, name, brief, city }) {
  const isMobile = ScreenSize();
  const imageSrc = img ? `/path/to/images/${img}` : defaultImage; // Adjust the path as necessary

  return (
    <div className="info-button">
      <div className="info-button-left">
        <img
          src={imageSrc}
          alt={name}
          onError={(e) => (e.target.src = defaultImage)}
        />
        <span className="tour-info">
          <h3>{name}</h3>
          {isMobile ? <h4>Book Me For More Info.</h4> : <h4>{brief}</h4>}
          <p>{city}</p>
          <span className="tour-icons">
            <i className="fa-brands fa-linkedin fa-lg"></i>
            <i className="fa-brands fa-google-plus-g fa-lg"></i>
          </span>
        </span>
      </div>
      <span className="button">
        <h5>Book Me</h5>
      </span>
    </div>
  );
}

export default TourGuide;

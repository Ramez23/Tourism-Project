import React, { useState, useEffect } from "react";
import ScreenSize from '../func/ScreenSize'
import ViewMore from "./ViewMorePlace";

export default function CardPlace(props) {
  const [image, setImage] = useState(null);
  const [pressed, setPressed] = useState(false);
  const isMobile = ScreenSize();

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imgModule = await import(`../imgs/${props.img}`);
        setImage(imgModule.default);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [props.img]);

  const handleButtonClick = () => {
    setPressed(!pressed);
  };

  return (
    <>
      <div className="card-rec-hist">
        {image && <img src={image} alt={props.title} />}
        <span className="card-rec-hist-writings">
          <h4>{props.title}</h4>
          {isMobile ? <p>View More For Details</p> : <p>{props.desc}</p>}
          <span className="card-buttons">
            <i className="fa-solid fa-heart fa-lg"></i>
          </span>
        </span>
        <span className="button" onClick={handleButtonClick}>
          <h5>View More</h5>
        </span>
      </div>
      {pressed ? <ViewMore place={props.placeid}/> : null}
    </>
  );
}

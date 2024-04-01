import React, { useState, useEffect } from "react";

export default function CardPlace(props) {
  const [image, setImage] = useState(null);

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

  return (
    <div className="card-rec-hist">
      {image && <img src={image} alt={props.title} />}
      <span className="card-rec-hist-writings">
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <span className="card-buttons">
          <i class="fa-solid fa-heart fa-lg"></i>
        </span>
      </span>
      <span className="button">
        <h5>View More</h5>
      </span>
    </div>
  );
}

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
          <img src={require('../imgs/green-heart-emoji-2048x1835-ime8vvj2.png')} />
          <button>View More</button>
        </span>
      </span>
    </div>
  );
}

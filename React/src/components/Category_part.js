import React, { useState, useEffect } from "react";

export default function CategoryPart(props) {
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
    <div className="first-home-part">
      <img
        className="background-image"
        src={require(`../imgs/${props.img}`)}
      />
      <span className="first-home-part-writings">
        <h2 className="first-home-part-writings-h2">
          {props.h2}
        </h2>
        <h3>{props.h3}</h3>
      </span>
    </div>
  );
}

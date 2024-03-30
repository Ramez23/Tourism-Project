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
    <div className="first-hist-part">
      {image && <img src={image} alt={props.title} />}
      <span className="first-part-hist-writings">
        <h2>{props.title}</h2>
        <p>{props.def}</p>
      </span>
    </div>
  );
}

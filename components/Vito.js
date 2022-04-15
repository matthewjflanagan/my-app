import React from 'react';
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import vito1 from "../public/images/vito1.jpg";
import vito2 from "../public/images/vito2.jpg";
import vito3 from "../public/images/vito3.jpg";
import vito4 from "../public/images/vito4.jpg";
import vito5 from "../public/images/vito5.jpg";
import vito6 from "../public/images/vito6.jpg";

const images = [vito1, vito2, vito3, vito4, vito5, vito6];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

export default function Vito() {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <Image key={index} src={each} />
        ))}
      </Zoom>
    </div>
  );
}
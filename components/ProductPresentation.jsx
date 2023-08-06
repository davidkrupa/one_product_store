import React from "react";
import { ImageWithText } from ".";
import headphones from "../assets/5.jpg";

const ProductPresentation = () => {
  const details = [
    {
      imgSrc: headphones,
      altTxt: "black headphones",
      title: "Wireless Connectivity",
      paragraph:
        "These headphones use Bluetooth 5.0 technology to provide seamless wireless connectivity up to 33 feet (10 meters) away from the audio source.",
    },
    {
      imgSrc: headphones,
      altTxt: "black headphones",
      title: "LED Battery Indicator",
      paragraph:
        "The headphones feature a LED battery indicator that shows you how much battery life is left, so you can plan your charging accordingly.",
    },
  ];

  return (
    <div className="max-w-5xl">
      {details?.map((item, index) => (
        <ImageWithText
          details={item}
          flexRow={index % 2 ? "md:flex-row-reverse" : "md:flex-row"}
        />
      ))}
    </div>
  );
};

export default ProductPresentation;

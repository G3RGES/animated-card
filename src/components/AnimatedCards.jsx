/* eslint-disable no-unused-vars */
import React from "react";

// react awsome reveal
import { Slide, Fade } from "react-awesome-reveal";

// assets
import Photo1 from "../assets/pics/photo1.jpg";
import Photo2 from "../assets/pics/photo2.jpg";
import Photo3 from "../assets/pics/photo3.jpg";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 2,
    img: Photo2,
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 3,
    img: Photo3,
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
];

const AnimatedCards = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="">Responsive Animated Cards</h1>
    </div>
  );
};

export default AnimatedCards;

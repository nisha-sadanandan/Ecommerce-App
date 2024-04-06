import React from "react";
import Girl from "../assets/image/women.png";

const Hero = () => {
  return (
    <div className="cover">
      <div className="girl">
        <img src={Girl} alt="girl" />
      </div>
    </div>
  );
};

export default Hero;

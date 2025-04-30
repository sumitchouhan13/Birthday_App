import React from "react";
import "./BubbleText.css";

const BubblyText = () => {
  const sweetNames = [
    "Lovebug",
    "Honeybun",
    "Sweetheart",
    "Pumpkin",
    "Angel",
    "Babe",
    "Love",
    "Princess",
    "Snugglebug",
    "Darling",
    "Cutiepie",
    "Wifey",
    "Snookums",
    "Baby",
    "Sunshine",
    "Sweetpea",
    "Sugarplum",
    "Lovey",
    "Muffin",
    "Dollface",
    "Vais'sh'ali",
    "Sweetie",
    "Cutie",
    "Love",
    "Queen",
  ];
  return (
    <div className="bubbly-wrapper">
      <p className="bubbly-text">Happy Birthday</p>
      <br></br>
      <p className="bubbly-text small">
        {sweetNames[Math.floor(Math.random() * sweetNames.length)]}
      </p>
    </div>
  );
};

export default React.memo(BubblyText);

import React, { useState, useEffect } from "react";
import "./BubbleText.css";

const sweetNames = [
  "Lovebug",
  "Honeybun",
  "Sweetheart",
  "Pumpkin",
  "Angel",
  "Babe",
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
  "Muffin",
  "Dollface",
  "Sweetie",
  "Cutie",
  "Love",
  "Queen",
  "Meri Jaan",
  "Vai'sh'ali",
  "Mine",
];

const BubblyText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = sweetNames[loopIndex % sweetNames.length];

    const type = () => {
      if (isDeleting) {
        setText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(120);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % sweetNames.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  return (
    <div className="bubbly-wrapper">
      <p className="bubbly-text">Happy Birthday</p>
      <br />
      <p className="bubbly-text small">
        {text}
        <span className="cursor">|</span>
      </p>
    </div>
  );
};

export default React.memo(BubblyText);

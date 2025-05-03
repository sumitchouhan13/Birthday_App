import React, { useState, useEffect, useRef } from "react";
import "./BubbleText.css";

const BubblyText = () => {
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
  ];

  const [typedText, setTypedText] = useState("");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const animationRef = useRef<number>(null);
  const lastUpdateTime = useRef<number>(0);

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let currentName = sweetNames[currentNameIndex];
    let typingSpeed = 150; // Slower typing speed (ms per character)
    const pauseDuration = 1500; // Longer pause after typing (ms)

    const animate = (timestamp: number) => {
      if (!lastUpdateTime.current) {
        lastUpdateTime.current = timestamp;
      }

      const deltaTime = timestamp - lastUpdateTime.current;

      if (deltaTime > typingSpeed) {
        lastUpdateTime.current = timestamp;

        if (!isDeleting) {
          // Typing forward
          if (i <= currentName.length) {
            setTypedText(currentName.substring(0, i));
            i++;
          } else {
            // Start deleting after pause
            if (deltaTime > pauseDuration) {
              isDeleting = true;
              typingSpeed = 75; // Slightly faster backspacing
            }
          }
        } else {
          // Deleting backward
          if (i >= 0) {
            setTypedText(currentName.substring(0, i));
            i--;
          } else {
            // Move to next name
            isDeleting = false;
            setCurrentNameIndex((prev) => (prev + 1) % sweetNames.length);
            currentName =
              sweetNames[(currentNameIndex + 1) % sweetNames.length];
            typingSpeed = 150; // Reset to original typing speed
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentNameIndex]);

  return (
    <div className="bubbly-wrapper">
      <p className="bubbly-text">Happy Birthday</p>
      <br />
      <p className="bubbly-text small">
        {typedText}
        <span className="cursor">|</span>
      </p>
    </div>
  );
};

export default React.memo(BubblyText);

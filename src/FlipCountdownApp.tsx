import { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./FlipCountdown.css";

const ResponsiveFlipCountdown = ({ targetDate }: { targetDate: Date }) => {
  const [size, setSize] = useState({
    digitWidth: 40,
    digitHeight: 60,
    digitFontSize: 40,
    separatorSize: 6, // This controls the visual size of the separator
    labelSize: 12,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({
          digitWidth: 24,
          digitHeight: 36,
          digitFontSize: 24,
          separatorSize: 4,
          labelSize: 10,
        });
      } else if (window.innerWidth < 992) {
        setSize({
          digitWidth: 32,
          digitHeight: 48,
          digitFontSize: 32,
          separatorSize: 5,
          labelSize: 11,
        });
      } else {
        setSize({
          digitWidth: 40,
          digitHeight: 60,
          digitFontSize: 40,
          separatorSize: 6,
          labelSize: 12,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="countdown-container">
      <FlipClockCountdown
        to={targetDate}
        digitBlockStyle={{
          width: size.digitWidth,
          height: size.digitHeight,
          fontSize: size.digitFontSize,
        }}
        separatorStyle={{
          size: size.separatorSize, // This is the correct property
          color: "#fff", // Optional: change separator color
        }}
        labelStyle={{
          fontSize: size.labelSize,
        }}
        showLabels={true}
        showSeparators={true}
      />
    </div>
  );
};

export default ResponsiveFlipCountdown;

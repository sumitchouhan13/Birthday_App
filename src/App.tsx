import ReactConfetti from "react-confetti";
import BubblyText from "./BubbleText";
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import PictureComponent from "./PictureComponent";
import FlipCountdown from "./FlipCountdownApp";
import dataJson from "./data/imgaes.json";
import moment from "moment";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  // const [showConfetti, setShowConfetti] = useState(true);
  const now = new Date();
  const currentDate = moment();
  const currentYear = now.getFullYear();
  let targetDate = new Date(currentYear, 6, 12);
  if (now > targetDate) {
    targetDate = new Date(currentYear + 1, 6, 12);
  }

  const getNextJuly12 = () => {
    const thisYear = moment().year();
    let date = moment(`${thisYear}-07-12`);

    if (date.isBefore(moment())) {
      return date.add(1, "year");
    }
    return date;
  };

  // useEffect(() => {
  //   if (!showSplashScreen) {
  //     const timer = setTimeout(() => {
  //       setShowConfetti(false);
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [showSplashScreen]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    () => {
      clearTimeout(timeoutId);
    };
  }, [showSplashScreen]);
  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          {/* {showConfetti && <ReactConfetti />} */}
          <ReactConfetti />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <BubblyText />
            <PictureComponent
              src={`https://drive.google.com/thumbnail?id=${
                dataJson[
                  getNextJuly12().diff(currentDate, "days") % dataJson.length
                ]
              }&sz=w1000`}
              alt="birthday_image"
            />
            <FlipCountdown targetDate={targetDate} />
          </div>
        </>
      )}
    </>
  );
}

export default App;

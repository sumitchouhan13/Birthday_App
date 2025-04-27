import ReactConfetti from "react-confetti";
import BubblyText from "./BubbleText";
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    if (!showSplashScreen) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSplashScreen]);
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
          {showConfetti && <ReactConfetti />}
          <div>
            <BubblyText />
          </div>
        </>
      )}
    </>
  );
}

export default App;

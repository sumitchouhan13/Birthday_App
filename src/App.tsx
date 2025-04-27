import ReactConfetti from "react-confetti";
import BubblyText from "./BubbleText";
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
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
          <ReactConfetti />
          <BubblyText />
        </>
      )}
    </>
  );
}

export default App;

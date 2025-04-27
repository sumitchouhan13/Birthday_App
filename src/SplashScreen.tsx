import "./SplashScreen.css";
import SplashScreenImage from "./assets/birthday_text_splash_screen.png";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <img
        src={SplashScreenImage}
        alt="SplashScreen"
        className="splash-image"
      />
    </div>
  );
};

export default SplashScreen;

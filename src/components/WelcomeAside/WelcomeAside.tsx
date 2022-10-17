import React from "react";

import lendIcon from "../../assets/welcome/Union.svg";
import welcomeImage from "../../assets/welcome/backgroundLogo.png";
import "./WelcomeAside.scss";

const WelcomeAside = () => {
  return (
    <div className="welcomeAside-container">

      <div className="welcomeAside-containerTwo">
        <img
          src={lendIcon} 
          height="30"
          width="30"
          alt=""
        />
        <h1 className="aside-text">lendsqr</h1>
      </div>

      <div className="welcomeImage">
        <img 
          src={welcomeImage}
          alt="Background Logo"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  )
}

export default WelcomeAside;
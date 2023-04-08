import React from "react";
import SplashScreenLogo from "../assets/Splash-lgog.svg";

export default function SplashScreen(){
    return (
        <div className="h-screen flex items-center justify-center">
            <img src={SplashScreenLogo} alt="Logo" className="h-36 md:h-44 lg:h-48 "/>
        </div>
    )
}
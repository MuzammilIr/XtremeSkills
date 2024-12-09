import React from "react";
import "../styles/pages/SplashScreen.css";

const SplashScreen = () => {
    return (
        <div className="splash-screen d-flex justify-content-center align-items-center">
            <div className="text-center">
                <img src="./assets/logo.png" alt="App Logo" className="logo" />
                <h1 className="mt-3">Welcome to Services App</h1>
            </div>
        </div>
    );
};

export default SplashScreen;

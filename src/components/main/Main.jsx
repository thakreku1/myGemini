import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <h3>Welcome to My Gemini</h3>
        <img src={assets.user_icon} alt="" />
        <h1>This is basic React Goggle gemini</h1>

        <img className="main-icons" src={assets.gemini_icon} alt="" />
      </div>
    </div>
  );
};

export default Main;

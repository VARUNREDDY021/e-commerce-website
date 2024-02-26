import React from 'react';
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_icon from "../Assets/hero_image.png"

const Hero=()=>{
    return(
        <>
        <div className="hero">
         <div className="hero-left">
         <h2> NEW ARRIVALS ONLY</h2>
    <div>
        <div className="hero-hand-icon">
            <p>NEW</p>
            <img src={hand_icon}/>
        </div>
        <p>COLLECTIONS</p>
        <p>FOR EVERYONE</p>

    
    </div>
      
      <div className="hero-latest-button">
        <div>LATEST COLLECTION</div>
        <img src={arrow_icon}/>
      </div>

              </div>
        <div className="hero-right">
            <img src={hero_icon}/>
        </div>
        </div>
        </>
    )
}
export default Hero
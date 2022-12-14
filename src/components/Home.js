import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import bambiImg from "../assets/images/bambi-icon.png"

const Home = () => {
    useEffect(()=>{
        AOS.init()
    }, [])
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className="home-sect sect-space">
      {/* <div className="balls"></div> */}
      <div className="hero-sect">
        {/* <div className="overlay"></div> */}
        <div className="first-sect">
          <h1>AWE OLUWABAMBI</h1>
          <h1>FRONTEND DEVELOPER</h1>
          <p className="f-text">
            I build responsive and well-functional websites and web applications.
          </p>
          <div className="btns">
            <button className="home-btn transp-btn">View My CV</button>
            <button className="home-btn beige-btn">Get in touch</button>
          </div>
        </div>
        <div className="second-sect">
          <img src={bambiImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
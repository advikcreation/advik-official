import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import image from "./profile.png";
import React, { useState } from "react";
// import { client } from '../../client';

// import sample from "./advik.mp4";
import "./Login.css";

const Login = () => {
  
//   const handleChange = () => {
//   alert("Hello, I am advik [this function work on next update] ")
//   }
  
  return (
    <div className="background">
      
      <div className="shape"></div>
      <div className="shape"></div>
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <form>
        <h3>Login Here</h3>
        <img src={image} alt="" className="img-png" />

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

<a href='/home'>
        <button 
// onClick={handleChange}
>Log In</button></a>

        <div className="iconContainer">
          <a href="https:instagram.com/officials_advik">
            <div className="icon facebookBackground">
              <FaFacebookF />
            </div>
          </a>
          <a href="https:instagram.com/officials_advik">
            <div className="icon instagramBackground">
              <FaInstagram />
            </div>
          </a>
          <a href="https:instagram.com/officials_advik">
            <div className="icon twitterBackground">
              <FaTwitter />
            </div>
          </a>
        </div>
        <div className="horizontalruler">
          <div className="text">Advik</div>
        </div>
      </form>
    </div>
  );
};
export default Login;

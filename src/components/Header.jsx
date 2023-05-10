import React from "react";
import "../assets/header.scss"
import Logo from "../images/gallery-logo.png";

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a className="logo" href="/">
              <img className="logo__img" src={Logo} alt="" />
            </a>
            <h1 className="title">MyGallery</h1> 
          </div>
        </div>
      </header>
    )
}

export default Header;

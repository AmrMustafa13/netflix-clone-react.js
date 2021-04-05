import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav-black"}`}>
      <img
        className="netflix-logo"
        src="./images/netflix_logo.png"
        alt="netflix-logo"
      />
      <img
        className="netflix-avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="netflix-avatar"
      />
    </nav>
  );
};

export default NavBar;

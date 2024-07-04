import React, { useState, useEffect } from "react";
import logo from "./../images/logo/DelhiFashionEmporium_Logo 2.webp";
import fb from "./../images/social/facebook.png";
import ig from "./../images/social/instagram.png";
import twitter from "./../images/social/twitter.png";

const NewNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [width, setWidth] = useState();
  let w;
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  useEffect(() => {
        w = window.innerWidth;
        setWidth(w);
      }, [window.innerWidth]);
    
  const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
    
          windowHeight > 500
            ? setStickyClass("fixed top-0 left-0 right-0 z-50 bg-white")
            : setStickyClass("relative");
        }
      };

  return (
    <nav className={`nav max-smpx-4 lg:w- max-sm:h-20 justify-between ${width < 992 ? stickyClass : null} items-center flex flex-col lg:mx-36 px-4`}>
  {menuOpen ? <div className="text-white z-[51] font-semibold text-[26px] mt-12">Delhi Fashion Emporium</div> : <div className="brand-title lg:my-5">
    <img src={logo} className="m-[0_auto] lg:h-28 max-sm:h-16" />
  </div>}
      <div className={`navbar lg:bg-white lg:w-full px-8 lg:h-24 ${width < 992 ? null : stickyClass}`}>
        <div
          className={`nav-links items-center  flex flex-1  ${
            menuOpen ? "active" : null
          }`}
        >
          <div className="flex  text-white gap-3 social">
            {<div className="hover:translate-y-1">
              <img src={twitter} />
            </div>}
            <div className="hover:translate-y-1">
              <img src={fb} />
            </div>
            <div className="hover:translate-y-1">
              <img src={ig} />
            </div>
          </div>
          <ul >
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>
          
        </div>
        <div className="search flex  end-icon
        lg:ml-auto">
            <span className="material-symbols-outlined ">error</span>
            <span className="material-symbols-outlined  ml-3">search</span>
        </div>
        <a href="#" className="toggle-button ml-3" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>
    </nav>
  );
};

export default NewNav;

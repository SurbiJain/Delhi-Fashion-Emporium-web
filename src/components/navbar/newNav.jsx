import React, { useState, useEffect } from "react";
import logo from "./../images/logo/DelhiFashionEmporium_Logo 2.webp";
import phone from "./../images/social/call_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";
import location from "./../images/social/location_on_24dp_000000_FILL0_wght400_GRAD0_opsz24.png";

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
          className={`nav-links  ${
            menuOpen ? "active" : null
          }`}
        >
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
           <a href="https://www.google.com/maps/place/Delhi+Fashion+Emporium/@28.5088812,77.2298318,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1a26683f1bd:0x7f1be3da35ac795b!8m2!3d28.5088812!4d77.2324067!16s%2Fg%2F1jkz5mcl9?entry=ttu" className="hover:translate-y-1 w-6 h-6" target="_blank" >
              <img src={location} />
            </a>
            
            <a href="tel:9818301054" target="_blank" className="hover:translate-y-1 w-6 h-6 ml-2">
              <img src={phone} />
            </a>
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

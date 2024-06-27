import React, {useState, useEffect} from "react";
import logo from "./../images/logo/DelhiFashionEmporium_Logo 2.webp";
import fb from "./../images/social/facebook.png";
import ig from "./../images/social/instagram.png";
import twitter from "./../images/social/twitter.png";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  const [width, setWidth] = useState();
  let w;
 

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  useEffect(() => {
    w = window.innerWidth;
    setWidth(w)
  }, [w]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
     
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 right-0 z-50 pt-4 bg-white') : setStickyClass('relative');
    }
    
  };


    
    

  return (
    <nav className={`navbar ${width < 992 ? stickyClass : null}`} >
      <div className={`logo py-3 max-sm:py-4 navbar-brand mx-24 max-sm:mx-auto`}>
        <img src={logo} className="m-[0_auto] lg:h-28 max-sm:h-16" />
      </div>
 
      <div className={`nav flex justify-between items-center px-8  bg-white  ${width < 992 ? null : stickyClass}  rounded-lg`} >
        <div className="flex justify-start gap-3 social">
          <div className="hover:translate-y-1"> <img src={twitter}  /></div>
          <div className="hover:translate-y-1"> <img src={fb} /></div>
          <div className="hover:translate-y-1"> <img src={ig} /></div>
        </div>
        <ul className="flex justify-around options">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
        <div className="search flex justify-end end-icon">
          <div>
            <span class="material-symbols-outlined">error</span>
          </div>
          <div className="ml-3">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>
      </div> 
    </nav>
  )
};


export default Navbar;

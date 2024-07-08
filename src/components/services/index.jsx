import React from "react";
import img1 from "./../images/services/product1.jpeg";
import img2 from "./../images/services/services2.jpeg";
import img3 from "./../images/services/services3.jpeg";
import img4 from "./../images/services/services4.jpeg";
import Button from "../utlity/Button";

const Services = () => {
  let images = [
    { title: "Products", src: img1 },
    { title: "Restaurants", src: img2 },
    { title: "Still Life", src: img3 },
    { title: "Receipes", src: img4 },
  ];
  return (
    <div className="services">
      <div className="container1 flex   lg:min-w-96 lg:p-[140px_15px_140px_15px] lg:mx-[102px] max-sm:mx-4  max-sm:py-4">
        <div className="container2 flex  flex-wrap gap-[25px] max-sm:gap-4 mt-[50px]">
          {images.map((object, i) => {
            return (
              <div
              key={i}
                className={` bg-white border  w-[47%] border-gray-200 rounded-lg shadow max-sm:odd:m-0 max-sm:w-full odd:mt-[-30px] odd:mb-[30px] relative`}
              >
                <img
                  className="rounded-t-lg h-[70%] w-full"
                  src={object.src}
                  alt=""
                  
                />
                <a
                  href="#"
                  className="text-white flex
  justify-center items-center
    absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-70 "
                >
                  View Gallery
                </a>

                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold py-5  text-gray-900 text-center" >
                      {object.title}
                    </h5>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:ml-20  flex-wrap mt-[50px] h-full ">
          <h2 className="heading1">My Services</h2>
          <p className="text-2xl font-medium mb-4 description">
            I would like to give you a unique photography experience, capture
            your products with excellent composition and lighting skills.
          </p>

          <p className="description text-base mb-4">
            Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget
            urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis
            ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis
            mollis, est non commodo luctus, nisi erat ligula mollis metus auctor
            fringilla.
          </p>
          <Button title="More services"/>
        </div>
      </div>
    </div>
  );
};

export default Services;

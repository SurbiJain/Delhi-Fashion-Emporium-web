import React, { useEffect, useState } from "react";
import img1 from "../images/section1/image1.jpeg";
import img2 from "../images/section1/image2.jpeg";
import img3 from "../images/section1/image3.jpeg";
import img4 from "../images/section1/image4.jpeg";
import img5 from "../images/section1/image5.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ImageSlider = () => {
  const [width, setWidth] = useState()
  let images = [img1, img2, img3, img4, img5];
  const getWidth = (e) => {
    const width = e.target.getBoundingClientRect().width;

   setWidth( width
    );
  
}
let height;
useEffect(()=>{
   height = width*0.67 
   
}, [width])
// console.log(width)

// console.log(height)


  return (
    <div   className=" mt-8 max-sm:mx-4"  >
    <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        grabCursor={true}
      className="mySwiper max-sm:rounded-xl"
    >
      
      {images.map((image,i)=>{
        return <SwiperSlide key={i} style={{minHeight: height}}>
  
        <img onLoad={getWidth}  src={image} className="swiper-img "  />

      </SwiperSlide>
      })}
    </Swiper>
    </div>
  );
};

export default ImageSlider;

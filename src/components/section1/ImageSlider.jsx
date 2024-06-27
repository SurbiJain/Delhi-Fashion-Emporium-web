import React from "react";
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
  let images = [img1, img2, img3, img4, img5];

  return (
    <div className=" pt-6  h-[670px] max-sm:mx-4">
    <Swiper
        slidesPerView={'auto'}
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
      
      {images.map((image)=>{
        return <SwiperSlide >
  
        <img src={image} className="swiper-img"  />

      </SwiperSlide>
      })}
    </Swiper>
    </div>
  );
};

export default ImageSlider;

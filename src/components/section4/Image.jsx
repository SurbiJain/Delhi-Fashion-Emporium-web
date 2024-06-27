import React from "react";
import img1 from "./../images/section4/img1.jpg";
import img2 from "./../images/section4/pf2-full.jpg";
import img3 from "./../images/section4/pf3-full.jpg";
import img4 from "./../images/section4/pf4-full.jpg";
import img5 from "./../images/section4/pf5-full.jpg";
import img6 from "./../images/section4/pf6-full.jpg";
import img7 from "./../images/section4/pf7-full.jpg";
import img8 from "./../images/section4/pf8-full.jpg";
import img9 from "./../images/section4/pf9-full.jpg";
import img10 from "./../images/section4/pf10-full.jpg";
import img11 from "./../images/section4/pf11-full.jpg";
import img12 from "./../images/section4/pf12-full.jpg";

const Image = () => {
  let image = [
    { title: "ABC", src: img1 },
    { title: "DEF", src: img2 },
    { title: "GHI", src: img3 },
    { title: "JKL", src: img4 },
    { title: "MNO", src: img5 },
    { title: "PQR", src: img6 },
    { title: "STU", src: img7 },
    { title: "VWX", src: img8 },
    { title: "YZA", src: img9 },
    { title: "BCD", src: img10 },
    { title: "EFG", src: img11 },
    { title: "HIJ", src: img12 },
  ];
  return (
  
  <div class="columns-3 gap-7 column-ga max-sm:columns-1">
    {image.map((img)=>{
     return(
      <figure>
      <img src={img.src} alt="A windmill" className="rounded-lg hover:rounded-lg" />
      <figcaption ><a className="text-white flex
  justify-center items-center
    absolute w-full h-full top-0 left-0 bg-black/0 z-10 transition-opacity duration-300 hover:opacity-70" href="#">{img.title}</a></figcaption>
    </figure>
     ) 
    })}
  
    
</div>
  );
};

export default Image;

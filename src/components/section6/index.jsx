import React from "react";
import img from "./../images/about.jpg";
import Button from "../utlity/Button";
import Section7 from "../section7";

const Section6 = () => {
  return (
    <div className="section6 lg:mx-[102px] lg:p-[140px_15px_140px_15px] max-sm:my-10 max-sm:mx-4 flex justify-between max-sm:flex-col-reverse">
      <div className="content flex flex-col gap-4 max-sm:mt-10">
        <h2 className="text-4xl text-gray-heading1"> About Me </h2>
        <div className="text-xl text-gray-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ipsam minus velit
        </div>
        <div className="text-gray-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id
          ligula.
        </div>
        <div className="text-gray-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id
          ligula.
        </div>
        <Button title="Learn more" />
      </div>
      <div className="lg:w-[590px] masked lg:mt-8 lg:px-9 flex-[0_0_auto]">
        <img src={img} />
      </div>
    </div>
  );
};

export default Section6;

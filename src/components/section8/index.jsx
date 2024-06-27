import React from "react";
import Button from "../utlity/Button"

const Section8 = () => {
  return (
    <div className="section8  flex justify-center items-center">
      <div className=" lg:mx-[102px] lg:p-[140px_15px_140px_15px] max-sm:mx-4 max-sm:p-12 z-2  relative ">
      <div className="form  lg:px-32 max-sm:px-8 max-sm:py-14  lg:py-20 relative bg-white/90 rounded-xl ">
        <h1 className="text-gray-heading1 text-[34px] mb-4 font-semibold">
          Request Photography Pricing
        </h1>
        <h6 className="text-gray-description mb-12 text-[22px] font-medium leading-8 ">
          For more information please get in touch using the form below:
        </h6>
        <form className="m-10">
          <div className="flex max-sm:flex-col gap-5 mb-4 ">
            <input className="p-2 rounded-lg flex-1"  type="text" placeholder="Name" required />
            <input  className="p-2 rounded-lg" type="text" placeholder="Email" required />
          </div>
          <input  className="p-2 rounded-lg h-32 w-full mb-4" type="text" placeholder="message" required />
          <Button title="Send message" type="submit"/>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Section8;

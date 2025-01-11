// eslint-disable-next-line no-unused-vars
import React from "react";

const card = ({ icon, heading, text }) => {
  return (
    <div className="flex flex-col justify-center p-10 max-h-fit bg-white rounded-lg border-[1px] border-gray-300 text-center ">
      <div className="bg-brandWhite p-4 rounded-full w-fit mx-auto">
        <img src={icon} alt="Image" className="w-32 mx-auto" />
      </div>
      <h4 className="my-6 text-lg font-bold">{heading}</h4>
      <button className="w-fit mx-auto mt-auto border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
        {text}
      </button>
    </div>
  );
};

export default card;

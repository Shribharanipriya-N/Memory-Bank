import React from "react";

const Image = (props) => {
  const title = props.title;
  const img = props.img;

  return (
    <div className="relative h-[350px] w-[430px] border-gray-500 shadow-lg mt-2 mb-2 rounded-xl ">
      <div
        className="absolute inset-0 bg-cover bg-center  rounded-xl"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-30 w-full px-4 py-2 rounded-b-xl">
        <h3 className="text-xl font-sans font-medium text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Image;

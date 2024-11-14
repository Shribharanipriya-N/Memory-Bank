import React from "react";
import img1 from "../images/background.jpg";
import img2 from "../images/bg.jpeg";
import Image from "./Image";

const AllImage = () => {
  const data = [
    {
      title: "1st Image",
      img: img1,
    },
    {
      title: "2nd Image",
      img:img2,
    }
  ];

  const title = "Classic Image";
  return (
    <div className=" flex-grow ">
      <div className="flex flex-row  flex-wrap  justify-around mt-10 ">
        <Image img={img1} title={title} />
        <div className=" flex flex-col h-[350px] w-[400px] border-gray-500 border-2">
          <div className=" flex flex-grow ">
            <img src={img2} className="flex-grow "></img>
          </div>
          <div className=" h-[40px] flex items-center pl-2">
            <h3 className="text-lg font-sans font-medium text-gray-800">
              Classic Image
            </h3>
          </div>
        </div>
        <div className=" flex flex-col h-[350px] w-[400px]">
          <div className="flex-grow bg-red-200"></div>
          <div className="bg-slate-400 h-[40px] flex items-center pl-2">
            <h3 className="text-lg font-sans font-medium text-gray-700">
              Title
            </h3>
          </div>
        </div>
        <div className=" flex flex-col h-[350px] w-[400px]">
          <div className="flex-grow bg-red-200"></div>
          <div className="bg-slate-400 h-[40px] flex items-center pl-2">
            <h3 className="text-lg font-sans font-medium text-gray-700">
              Title
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllImage;

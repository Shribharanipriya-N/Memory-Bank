import React from "react";
import backgroundImage from "../images/bg4.jpg";
import image from"../images/img.png";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-3/4 w-full pt-10 ">
        <div className="flex flex-col w-1/2 justify-center items-center ml-10">
          <h1 className="font-extrabold text-8xl font-sans   text-gray-700 drop-shadow-[0_5px_5px_rgba(255,255,255,1)]">
            Memory
          </h1>
          <h1 className="font-extrabold text-8xl font-sans  p-5 pl-20 ml-10 text-gray-700 drop-shadow-[0_5px_5px_rgba(255,255,255,1)]">
            Bank...!
          </h1>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center ">
            <img src={image} alt="img" className="h-[500px] w-[500px]"></img>
        
        </div>
      </div>
      <div className="flex justify-center">
      <button className="text-gray-800 w-[210px] h-[70px] border-2 border-gray-500 rounded-lg font-sans text-xl font-normal bg-slate-100 hover:bg-gray-200">
  Let's Save Memories
</button>

      </div>
    </div>
  );
};

export default Home;

import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[75px] flex items-center border-y-2 border-gray-300 shadow">
      <div className=" w-1/3 h-full "></div>
      <div className="w-1/3 h-full flex items-center justify-center mr-10 text-3xl font-semibold font-sans text-gray-700">
        Memory Bank
      </div>
      <div className="w-1/3 h-full flex items-center justify-end mr-10 pr-10">
        <button className="text-gray-700 font-semibold text-lg px-4 py-2 rounded hover:bg-gray-300 hover:border hover:rounded-lg hover:border-gray-400">
          Add Photo
        </button>
      </div>
    </div>
  );
};

export default NavBar;
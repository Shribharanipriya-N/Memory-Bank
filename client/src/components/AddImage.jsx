import React from "react";
import img from "../images/img2.png";
const AddImage = () => {
  return (
    <div className="flex w-screen flex-grow">
      <div className="w-1/2 flex justify-center items-center ml-10 pl-10">
        <img src={img} alt="image" className="w-[70%]"></img>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <form className="flex flex-col gap-5 mr-10 pr-10">
          <label
            htmlFor="title"
            className="text-gray-700 font-semibold text-2xl"
          >
            Title
          </label>
          <input
            placeholder="Enter Title of Photo"
            className="w-[300px] border border-gray-500 h-[40px] p-2 rounded-lg hover:border-black"
          ></input>
          <label
            htmlFor="description"
            className="text-gray-700 font-semibold text-2xl"
          >
            Description
          </label>
          <textarea
            placeholder="Enter description of photo"
            className="w-[300px] border border-gray-500 h-[150px] p-2 rounded-lg hover:border-black"
          ></textarea>
          <label
            htmlFor="image"
            className="text-gray-700 font-semibold text-2xl"
          >
            Choose an image
          </label>
          <input type="file"></input>
          <div>
            <button className="font-semibold text-xl px-8 py-2 text-white rounded-md bg-gray-700 hover:border hover:rounded hover:border-gray-400 hover:bg-gray-600">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImage;

import React, { useState } from "react";
import img from "../images/img2.png";
import { storage } from "../firebase";
import { v4 as uuid } from "uuid";


import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [file, setfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      return alert("Please select an image to upload.");
    }

    setLoading(true);

    try {
      const imageRef = storageRef(storage, `images/${uuid()}`);
      const snapshot = await uploadBytes(imageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);

      if (!title || !description) {
        return alert("Fill in all details.");
      }

      await axios.post(`${import.meta.env.VITE_SERVER_URL}/images`, {
        title,
        description,
        url: downloadUrl,
      });

      setLoading(false);
      navigate("/images");
    } catch (error) {
      console.error("Error during upload:", error.message);
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setfile(selectedFile);
  };

  return (
    <div className="flex w-screen flex-grow">
      <div className="w-1/2 flex justify-center items-center ml-10 pl-10">
        <img src={img} alt="image" className="w-[70%]" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <form className="flex flex-col gap-5 mr-10 pr-10" onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-gray-700 font-semibold text-2xl">
            Title
          </label>
          <input
            placeholder="Enter Title of Photo"
            className="w-[300px] border border-gray-500 h-[40px] p-2 rounded-lg hover:border-black"
            onChange={(e) => settitle(e.target.value)}
          />
          <label
            htmlFor="description"
            className="text-gray-700 font-semibold text-2xl"
          >
            Description
          </label>
          <textarea
            placeholder="Enter description of photo"
            className="w-[300px] border border-gray-500 h-[150px] p-2 rounded-lg hover:border-black"
            onChange={(e) => setdescription(e.target.value)}
          />
          <label
            htmlFor="image"
            className="text-gray-700 font-semibold text-2xl"
          >
            Choose an image
          </label>
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFileChange}
          />
          <div>
            <button
              type="submit"
              className="font-semibold text-xl px-8 py-2 text-white rounded-md bg-gray-700 hover:border hover:rounded hover:border-gray-400 hover:bg-gray-600"
            >
              {loading ? (
                <span className="animate-spin">Uploading...</span>
              ) : (
                "Upload"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddImage;

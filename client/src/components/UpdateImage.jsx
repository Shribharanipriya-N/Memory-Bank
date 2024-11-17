import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateImage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/images/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImg(response.data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return alert("Please fill all details");
    }
    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/images/${id}`, { title, description });
      navigate("/images");
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Failed to update the image. Please try again.");
    }
  };

  return (
    <div className="flex w-screen flex-grow">
      <div className="w-1/2 flex justify-center items-center ml-10 pl-10">
        {img && <img src={img} alt="Selected" className="rounded-xl w-[90%]" />}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <form className="flex flex-col gap-5 mr-10" onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-gray-700 font-semibold text-2xl">
            Title
          </label>
          <input
            placeholder="Enter Title of Photo"
            className="w-[400px] border border-gray-500 h-[40px] p-2 rounded-lg hover:border-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description" className="text-gray-700 font-semibold text-2xl">
            Description
          </label>
          <textarea
            placeholder="Enter description of photo"
            className="w-[400px] border border-gray-500 h-[180px] p-2 rounded-lg hover:border-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className="font-semibold text-xl px-8 py-2 text-white rounded-md bg-gray-700 hover:border hover:rounded hover:border-gray-400 hover:bg-gray-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateImage;

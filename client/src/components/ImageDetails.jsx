import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { saveAs } from 'file-saver';

const ImageDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/images/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = () => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/images/${id}`);
      navigate("/images");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = (path) => {
    if (!path) {
      console.error("Image path is invalid.");
      return;
    }
    saveAs(path, 'image.jpg');
  };

  if (!data) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="flex w-full flex-grow flex-wrap">
      <div className="flex w-full md:w-1/2  items-center justify-center pl-10">
        <img
          src={data.url}
          alt={data.title}
          className="rounded-xl h-[450px] w-[700px]"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center flex-col gap-5 flex-wrap">
        <span className="text-center text-7xl text-[#553c78] font-semibold p-10 font-sans">
          {data.title}
        </span>
        <h1 className="text-4xl text-gray-700 font-semibold ml-5 pl-5">
          Description
        </h1>
        <span className="flex flex-wrap leading-loose max-h-[200px] font-medium ml-5 pl-5 pr-10 text-gray-700">
          {data.description}
        </span>
        <div className="flex justify-center mt-5 gap-5">
          <button
            className="w-[200px] font-semibold text-xl px-8 py-2 text-white rounded-md bg-gray-700 hover:border hover:rounded hover:border-gray-400 hover:bg-gray-600"
            onClick={() => handleDownload(data.url)}
          >
            Download
          </button>
          <MdDelete size={35} onClick={handleDelete} />
          <FaEdit size={35} onClick={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";

const AllImage = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/images`
        );
        setdata(response.data.data);
      } catch (e) {}
    };
    fetchData();
  }, []);

  // if (data.length === 0) {
  //   return <div>loading</div>;
  // }
  return (
    <div className=" flex-grow ">
      <div className="flex flex-row  flex-wrap  justify-around m-10 gap-10 ">
        {data.map((item) => (
          <Link to={`/images/${item.id}`} key={item.id}>
            <Image
              key={item.id}
              title={item.title}
              img={item.url}
              id={item.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllImage;

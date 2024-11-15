import React from "react";
import img1 from "../images/background.jpg";
import img2 from "../images/bg.jpeg";
import img3 from "../images/bg1.jpg"
import img4 from "../images/bg2.jpg"
import img5 from "../images/bg3.jpg"
import img6 from "../images/bg4.jpg"
import Image from "./Image";

const AllImage = () => {
  const data = [
    {
      id:1,
      title: "1st Image",
      img: img1,
    },
    {
      id:2,
      title: "2nd Image",
      img:img2,
    },{
      id:3,
      title:"3rd Image",
      img: img3,
    },
    {
      id:4,
      title:"4th Image",
      img: img4,
    },
    {
      id:5,
      title:"5th Image",
      img: img5,
    },
    {
      id:6,
      title:"6 th Image",
      img: img6,
    }
  ];

  return (
    <div className=" flex-grow ">
      <div className="flex flex-row  flex-wrap  justify-around m-10 gap-10 ">
      {data.map((item) => (
          <Image key={item.id} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default AllImage;

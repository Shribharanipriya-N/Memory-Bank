import React from 'react'
import img1 from "../images/bg.jpeg"

const ImageDetails = (props) => {
  const id=props.id;
  const title = "6th image";
  const img= img1;
  const description="haedkw,gfwajleiydfskhzbmakuraweyiuiS:LDKZ>m,awsnZ<BFXc";
  
  return (
    <div className='flex flex-grow'>
      <div className='flex w-1/2  items-center justify-center'>
        <img src={img} alt={title} className='flex-grow p-20 rounded-xl'/>
      </div>
      <div className='w-1/2 bg-red-500 flex justify-center flex-col items-center'>
      <h1>Title: {title}
      </h1>
      <span>Description: {description}
      </span>
      </div>
    </div>
  )
}

export default ImageDetails

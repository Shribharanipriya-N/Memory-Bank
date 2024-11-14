import React from 'react'

const Image = (props) => {
  const title=props.title;
  const img=props.img;
  return (
     
       <div className=' flex flex-col h-[350px] w-[400px] border-gray-500 border-2'>
        <div className=' flex flex-grow '>
          <img src={img} className='flex-grow '></img>
        </div>
        <div className=' h-[40px] flex items-center pl-2'>
          <h3 className='text-lg font-sans font-medium text-gray-800'>{title}</h3>
        </div>
      </div>
  )
}

export default Image

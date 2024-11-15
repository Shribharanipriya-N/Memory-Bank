import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AllImage from './components/AllImage'
import ImageDetails from './components/ImageDetails'
import AddImage from './components/AddImage'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      {/* <Home/> */}
      <div className='sticky top-0 z-50'>
      <NavBar/>
      </div>
      <div className='z-10 flex flex-grow '>
      {/* <AllImage/> */}
      <ImageDetails/>
      {/* <AddImage/> */}
      </div>
    </div>
  )
}

export default App


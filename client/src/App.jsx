import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import AllImage from './components/AllImage'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col '>
      {/* <Home/> */}
      <NavBar/>
      <AllImage/>
    </div>
  )
}

export default App


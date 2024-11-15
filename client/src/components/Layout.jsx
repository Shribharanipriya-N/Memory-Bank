import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='sticky top-0 z-50'>
       <NavBar/>
       </div>
      <div className='z-10 flex flex-grow '>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout

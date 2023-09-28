import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../page/Footer'
import NavBar from './NavBar'

const Rootcomponents = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Rootcomponents
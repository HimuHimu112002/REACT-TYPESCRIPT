import React from 'react'
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements,} from "react-router-dom";
import Rootcomponents from './src/components/Rootcomponents'
import Home from './src/page/Home'
import About from './src/page/About';
import Contact from './src/page/Contact';

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootcomponents/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} /> 
  )
}
export default Index
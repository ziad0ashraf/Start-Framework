import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Notfound from './Components/Notfound'

  let router=createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true ,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>},
    ] }
  ])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import { createHashRouter, RouterProvider } from 'react-router-dom'
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

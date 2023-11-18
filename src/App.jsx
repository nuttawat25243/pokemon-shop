import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import Item from './components/Item.jsx'
import './App.css'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
  

function App() {
    const Layout = () => {
      return (
        <div className='font-poppins'>
        <Nav />
        <Outlet/>
        <Footer  />
        </div>
      )
    }
    const router = createBrowserRouter([
      {
        path:"/",
        element:  <Layout />,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:"/shop",
            element:  <Shop />
          },
          {
            path:"/shop/:id",
            element:  <Shop />
          },
          {
            path:"/cart",
            element:  <Cart />
          },
      ],
    }
    ])
    
  return (
    <>
               <RouterProvider  router={router}/>
    </>
  )
}

export default App

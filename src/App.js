import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import Heart from './routes/heart/Heart';
import Wishes from './routes/wishes/Wishes'
import './App.css'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/heart",
      element: <Heart></Heart>,
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
      path: "/wishes",
      element: <Wishes></Wishes>
    }
  ]
);

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

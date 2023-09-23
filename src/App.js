import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import Heart from './routes/heart/Heart';
import './App.css'
import Delivery from './components/Delivery_point/Delivery'

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
      path: "/delivery",
      element: <Delivery></Delivery>,

    },
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

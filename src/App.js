import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
import Heart from './routes/heart/Heart';
import Wishes from './routes/wishes/Wishes'
import './App.css'
import Delivery from './components/Delivery_point/Delivery'
import HomeProducts from './components/homeProducts/HomeProducts';
import Wishes from './routes/wishes/Wishes';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/heart",
      element: <Wishes></Wishes>,
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
<<<<<<< HEAD
      path: "/wishes",
      element: <Wishes></Wishes>
    }
=======
      path: "/delivery",
      element: <Delivery></Delivery>,
    },
    {
      path: "/single-page/:1",
      element: <HomeProducts></HomeProducts>,
    },
>>>>>>> 8ce4d3de51da9f15b901241f763920dec3c1105e
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

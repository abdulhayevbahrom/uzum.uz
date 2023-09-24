import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/home/Home';
import Cart from './routes/cart/Cart';
// import Heart from './routes/heart/Heart';
import './App.css'
import Delivery from './components/Delivery_point/Delivery'
import HomeProducts from './components/homeProducts/HomeProducts';
<<<<<<< HEAD
import Wishes from './routes/wishes/Wishes'
=======
import Wishes from './routes/wishes/Wishes';
import SortedRoutes from './routes/sortedRoutes/SortedRoutes';
>>>>>>> origin/msoleh01

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
      path: "/sorted",
      element: <SortedRoutes></SortedRoutes>
    },
    {
      path: "/cart",
      element: <Cart></Cart>,
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/msoleh
      path: "/delivery",
      element: <Delivery></Delivery>,
    },
    {
      path: "/single-page/:1",
      element: <HomeProducts></HomeProducts>,
    },
<<<<<<< HEAD
=======
      path: "/wishes",
      element: <Wishes></Wishes>
    }
>>>>>>> origin/branch
=======

>>>>>>> origin/msoleh
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

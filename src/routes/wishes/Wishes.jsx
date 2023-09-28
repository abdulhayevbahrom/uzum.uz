import React from 'react'
import './Wishes.css'
import Header from '../../components/header/Header'
import AddYourFavorite from "../../components/addYourFavorite/AddYourFavorite"
import PopularProducts, { popularProduct } from '../../components/popularProducts/PopularProducts'
// import {PopularProducts} from '../../components/popularProducts/PopularProducts'
import Sorted from '../../components/sorted/Sorted'

function Wishes() {
  return (
    <div className='wishes'>
      <Header />
      {
       !popularProduct.length 
          ?
          <Sorted/> 
          :
          <PopularProducts/>
        
      }
    </div>
  )
}

export default Wishes
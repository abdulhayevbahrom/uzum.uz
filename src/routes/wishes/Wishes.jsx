import React from 'react'
import './Wishes.css'
import Header from '../../components/header/Header'
import AddYourFavorite from "../../components/addYourFavorite/AddYourFavorite"
import PopularProducts from '../../components/popularProducts/PopularProducts'


function Wishes() {
  return (
    <div className='wishes'>
        <Header/>
        <AddYourFavorite/>
        <PopularProducts/>
    </div>
  )
}

export default Wishes
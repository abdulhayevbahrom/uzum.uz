import React from 'react'
import './Wishes.css'
import Header from '../../components/header/Header'
import AddYourFavorite from "../../components/addYourFavorite/AddYourFavorite"
import PopularProducts from '../../components/popularProducts/PopularProducts'
import Footer from '../../components/footer/Footer'


function Wishes() {
  return (
    <div className='wishes'>
      <Header />
      <AddYourFavorite />
      <PopularProducts />
      <Footer />
    </div>
  )
}

export default Wishes
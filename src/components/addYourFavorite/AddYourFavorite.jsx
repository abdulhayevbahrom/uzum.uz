import React from 'react'
import './AddYourFavorite.css'

function AddYourFavorite() {
  return (
    <div className='add_your_favorite'>
        <div className="img_border">
          <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
        </div>
        <h2>Sizga yoqqanini qoʻshing</h2>
        <span>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</span>
        <button>Akkauntga kirish</button>
    </div>
  )
}

export default AddYourFavorite
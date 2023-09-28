import React from 'react'
import './AddProducts.css'

function AddProducts() {
  return (
    <div className='add_products'>
      <div className="cat_image">
        <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="/" />
      </div>
      <h2>Savatda hozircha mahsulot yoʻq</h2>
      <p>Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping</p>
      <button>Bosh sahifa</button>
    </div>
  )
}

export default AddProducts

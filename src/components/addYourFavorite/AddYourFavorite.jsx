import React, { useEffect, useState } from 'react'
import './AddYourFavorite.css'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'

function AddYourFavorite() {

  const [addYourFovarite, setAddYourFovarite] = useState(false)
  

  return (
    <div className='add_your_favorite'>
      <div className="img_border">
        <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
      </div>
      <h2>Sizga yoqqanini qoʻshing</h2>
      <span>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</span>
      <button onClick={() => setAddYourFovarite(!addYourFovarite)}>Akkauntga kirish</button>
      {addYourFovarite && (
        <div className="add_acount">
          <div className="acoun_cart" >
            <button onClick={() => setAddYourFovarite(!addYourFovarite)} className='add_acount_none'>
              <FiX className='add_acount_none_x' />
            </button>
            <h2>Telefon raqamini kiriting</h2>
            <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
            <input type="text" placeholder='+998 00 000 00 00' />
            <input type="button" value="Kodni olish" className='btn'/>
            <span>Avtotizatsiyadan o'tish orqali siz <Link target='blank' to={'/privacy-policy-uz.html'}>shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</Link></span>
          </div>
        </div>
      )}
    </div>
  )
}


export default AddYourFavorite
import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'
import './AddYourFavorite.css'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const textAnimate = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * .2}
  })
}


function AddYourFavorite() {
  document.title = "Uzum - mahsulotlari kunning ertasiga yetkazib beriladigan ilk Oʻzbekiston savdo maydoni"
  const [addYourFovarite, setAddYourFovarite] = useState(false)

  return (
    <motion.div initial='hidden' whileInView='visible' className='add_your_favorite'>
      <motion.div custom={1} variants={textAnimate} className="img_border">
        <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
      </motion.div>
      <motion.h2 custom={2} variants={textAnimate} >Sizga yoqqanini qoʻshing</motion.h2>
      <motion.span custom={3} variants={textAnimate}>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</motion.span>
      <motion.button custom={4} variants={textAnimate} onClick={() => setAddYourFovarite(!addYourFovarite, document.body.style.overflow = "hidden")}>
        Akkauntga kirish
      </motion.button>
      {addYourFovarite && (
        <div className="add_acount">
          <div className="acoun_cart" >
            <button onClick={() => setAddYourFovarite(!addYourFovarite, document.body.style.overflowY = "auto")} className='add_acount_none'>
              <FiX className='add_acount_none_x' />
            </button>
            <h2>Telefon raqamini kiriting</h2>
            <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
            <input type="text" placeholder='+998 00 000 00 00' />
            <input type="button" value="Kodni olish" className='btn' />
            <span>Avtotizatsiyadan o'tish orqali siz <Link target='blank' to={'/privacy-policy-uz.html'}>shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz</Link></span>
          </div>
        </div>
      )}
    </motion.div>
  )
}


export default memo(AddYourFavorite)
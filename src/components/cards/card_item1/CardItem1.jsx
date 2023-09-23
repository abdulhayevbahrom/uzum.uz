import React from 'react'
import './CardItem1.css'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { AiOutlineHeart, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'


function CardItem1({ data, componentName }) {
  return (
    <div className='CardItem1'>
      <div className="cardtitle">
        <h1>{componentName} <AiOutlineRight /> </h1>
      </div>
      <div className="cards">
        {data?.slice(0, 10)?.map((item, index) => (
          <div key={index} className="cardItem">
            <AiOutlineHeart className='heart' />
            <Link to={`/single-page/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
            <p>{item.title}</p>
            <b>5.0 (baxo 36)</b>
            <p className='sariq'>{item.price} $</p>
            <s>7000 so'm </s>
            <b>5000 so'm </b>
            < TbShoppingBagPlus className='shopicon' />
          </div>
        ))}
      </div>


    </div>
  )
}

export default CardItem1

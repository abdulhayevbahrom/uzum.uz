import React from 'react'
import './CardItem1.css'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { AiFillHeart, AiOutlineHeart, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Add_To_Heart } from '../../../redux/addToHeart'

function CardItem1({ data, componentName }) {
  const dispatch = useDispatch()
  const heartData = useSelector(s => s.addToHeart).map(i => i.id)



  return (
    <div className='CardItem1'>
      <div className="cardtitle">
        <h1>{componentName} <AiOutlineRight /> </h1>
      </div>
      <div className="cards">
        {data?.slice(0, 10)?.map((item, index) => (
          <div key={index} className="cardItem">

            {
              heartData.some(i => i === item.id) ?
                <AiFillHeart className='heart' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
                :
                <AiOutlineHeart className='heart' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
            }

            <Link className='imagessss' to={`/single-page/${item.id}`}>
              <div className="imageeee">
                <img src={item.image} alt="" />

              </div>
            </Link>
            <p>{item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}</p>
            <b>5.0 (baxo 36)</b>
            <p className='sariq'>{Math.ceil(item.price / 12)} so'm oyiga</p>
            <div className="productPrice">
              <div className='price'>
                <s>{Math.ceil(item.price + (item.price % 5))} so'm </s>
                <b>{item.price} so'm </b></div>
              < TbShoppingBagPlus className='shopicon' />
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default CardItem1

import React from 'react'
import './CardItem1.css'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { AiFillHeart, AiOutlineHeart, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Add_To_Heart } from '../../../redux/addToHeart'
import {ADD_TO_CART} from '../../../redux/addToCart'
import { toast } from "react-toastify";

function CardItem1({ data, componentName }) {
  const dispatch = useDispatch()
  const heartData = useSelector(s => s.addToHeart).map(i => i.id)
  const cartData = useSelector(s => s.addToCart).map(i => i.id)
  


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
            <p>{item.title}</p>
            <b>5.0 (baxo 36)</b>
            <p className='sariq'>{item.price} $</p>
            <div className="productPrice">
            <div className='price'>  
            <s>7000 so'm </s>
              <b>5000 so'm </b></div>
              {
              cartData.some(i => i === item.id) ?
                <>
                  <TbShoppingBagPlus className='shopicon' onClick={() => dispatch(ADD_TO_CART({ pro: item }))} />
                  {toast.success("You have successfully registered", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1500,
                    hideProgressBar: true,
                  })}
                </>
                :
                <TbShoppingBagPlus className='shopicon' onClick={() => dispatch(ADD_TO_CART({ pro: item }))} />
            }
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default CardItem1

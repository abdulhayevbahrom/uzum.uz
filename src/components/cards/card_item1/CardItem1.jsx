import React, { useState, useEffect, memo } from 'react'
import './CardItem1.css'
import {TbShoppingBagPlus} from 'react-icons/tb'
import {AiOutlineHeart ,AiOutlineRight} from 'react-icons/ai'
import axios from "axios"


function CardItem1() {
    let productAPI = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState([]);
    useEffect(() => {
        axios
          .get(productAPI)
          .then((res) => setproduct(res.data) )
          .catch((err) => console.log(err))
      }, []);

    // // const product = [
    // //     {
    // //         productname: "Tish pastasi Colgate MAX White 100 ml + Tualet sovuni Palmolive Aloe&Olive 90 g",
    // //         price:"35000",
    // //         muddat:"3000"

    // //     }
    // ] 
  return (
    <div className='CardItem1'>
        <div className="cardtitle">
            <h1>Tug'ilgan kuni <AiOutlineRight /> </h1>
        </div>
      <div className="cards">
      {product.map((item, index) => (
              <div key={index} className="cardItem">
                <AiOutlineHeart className='heart' />
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <b>5.0 (baxo 36)</b>
              <p className='sariq'>{item.price } $</p>
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

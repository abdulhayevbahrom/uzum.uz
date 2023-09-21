import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
    let cartData = useSelector((s) => s.addToCart)
    return (
        <div className='cart'>
            {
                cartData.map((pro, index) => {
                    return (
                        <div key={index} className='main_item'>
                            <img src={pro.image} alt={pro.title} title={pro.title} />
                            <p>{pro.title.slice(0, 35)}</p>
                            <b>{pro.price} <s>{pro.price + pro.price % 10}</s> </b>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart

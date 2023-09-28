import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import PopularProducts from '../../components/popularProducts/PopularProducts';
import Footer from '../../components/footer/Footer';
import AddProducts from '../../components/addProducts/AddProducts';
import CartProducts from '../../components/cartProducts/CartProducts';

function Cart() {
    let cartData = useSelector((s) => s.addToCart)
    return (
        <div className='cart'>
            <div>
                <Header/>
                <AddProducts/>
                <CartProducts/>
                <PopularProducts/>
                <Footer/>
            </div>
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

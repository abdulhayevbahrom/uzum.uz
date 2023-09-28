import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import AddProducts from '../../components/addProducts/AddProducts'
import CartData from '../../components/cartData/CartData';

function Cart() {
    let cartData = useSelector((s) => s.addToCart)


    document.title = "Savat - Uzum"
    return (
        <div className='cart'>
            <div>
                <Header />
                {
                    !cartData.length ?
                        <CartData />
                        :
                        <AddProducts />
                }
                <Footer />
            </div>
        </div>
    )
}

export default Cart

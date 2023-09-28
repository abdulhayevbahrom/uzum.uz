import React from 'react'
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import AddProducts from '../../components/addProducts/AddProducts'
import CartData from '../../components/cartData/CartData';
=======
import Header from '../../components/header/Header';
import PopularProducts from '../../components/popularProducts/PopularProducts';
import Footer from '../../components/footer/Footer';
import AddProducts from '../../components/addProducts/AddProducts';
import CartProducts from '../../components/cartProducts/CartProducts';
>>>>>>> origin/diyora

function Cart() {
    let cartData = useSelector((s) => s.addToCart)


    document.title = "Savat - Uzum"
    return (
        <div className='cart'>
            <div>
<<<<<<< HEAD
                <Header />
                {
                    !cartData.length ?
                        <CartData />
                        :
                        <AddProducts />
                }
                <Footer />
            </div>
=======
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
>>>>>>> origin/diyora
        </div>
    )
}

export default Cart

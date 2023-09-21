import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import { ADD_TO_CART } from '../../redux/addToCart'
import { useDispatch } from 'react-redux'

function Products() {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const API = "https://fakestoreapi.com/products"

    useEffect(() => {
        axios.get(API)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(data);

    function addCart(pro) {
        dispatch(ADD_TO_CART({ pro }))
    }

    return (
        <div className='products'>
            <h1>products</h1>
            <main>
                {
                    data?.map((pro, index) => {
                        return (
                            <div key={index} className='main_item'>
                                <img src={pro.image} alt={pro.title} title={pro.title} />
                                <p>{pro.title.slice(0, 35)}</p>
                                <b>{pro.price} <s>{pro.price + pro.price % 10}</s> </b>
                                <button onClick={() => addCart(pro)}> add to Cart </button>
                            </div>
                        )
                    }
                    )
                }
            </main>
        </div>
    )
}

export default Products

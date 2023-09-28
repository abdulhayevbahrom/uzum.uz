import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import './CartProducts.css'


function CartProducts({ data }) {
  let prices = 85000
  const [count, setcount] = useState(1)
  function minus() {
    setcount(count - 1)
  }
  function plus() {
    setcount(count + 1)
  }

  let price = prices * count
  return (
    <div className="home_cart_products">
      <div className='cart_products'>
        <h2>Savatingiz, <span>{data?.length} mahsulot</span></h2>
        <div className="cart_product_item">
          <div>
            <input type="checkbox" />
            <h4>Hammasini yechish</h4>
          </div>
          <div>
            <p>Yetkazib berishning eng yaqin sanasi: </p>
            <span>M09 28 (Erta)</span>
          </div>
        </div>
        {
          data?.map((item, index) =>
            <div key={index} className="cart_product_items">
              <div className='cart_product_items_img'>
                <input type="checkbox" />
                <img src={item.images[0]} alt="/" />
              </div>
              <div className='cart_products_items_sale'>
                <h3>{item.title}</h3>
                <p>Sotuvchi: <span>Дети</span></p>
                <p>Rang: <span>{item.color}</span></p>
              </div>
              <div className="cart_products_cart_products_items_count">
                <div className="cart_products_cart_products_items_count_1">
                  <button onClick={minus}><AiOutlineMinus className='AiOutlineMinus' /></button>
                  <h3>{item.quantity}</h3>
                  <button onClick={plus}><AiOutlinePlus className='AiOutlineMinus' /></button>
                </div>
              </div>
              <div className="cart_products_cart_products_items_trash">
                <a href="/"><FaTrash></FaTrash>
                  <span>Yo'q qilish</span>
                </a>
                <p>{item.quantity * item.price} so'm</p>
                <s>{item.price + (Math.ceil(item.price % 10))}</s>
              </div>
            </div>
          )
        }
      </div>
      <div className='order'>
        <div className="place_an_order">
          <div className="order_img">
            <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.2425 7.22388C19.6618 7.49073 19.7854 8.04701 19.5186 8.46636L11.7593 18.4832C11.605 18.7256 11.3443 18.8798 11.0576 18.8982C10.7708 18.9165 10.4925 18.7969 10.3086 18.5762L5.3086 12.5762C4.99039 12.1943 5.04198 11.6268 5.42383 11.3086C5.80568 10.9904 6.37319 11.042 6.6914 11.4238L10.9024 16.477L18 7.49998C18.2669 7.08064 18.8231 6.95702 19.2425 7.22388Z' fill='%2316CA4E'/%3e %3c/svg%3e" alt="/" />
          </div>
          <div className="order_text">
            <b>Buyurtmangizni rasmiy topshirish punktiga bepul yetkazib beramiz</b>
            <p>Eshikkacha yetkazib berishgacha yana 405 000 so'm</p>
          </div>
        </div>
        <div className="order_product">
          <h3>Buyurtmangiz</h3>
          <div className="order_product_page">
            <span>Mahsulotlar (1):</span>
            <p>155 000 so'm</p>
          </div>
          <div className="data_order"><span>Yetkazib berish M09 28 (Bugun)</span></div>
          <div className="order_price">
            <span>Jami:</span>
            <b>85 000 so'm</b>
          </div>
          <p>Tejovingiz: 70 000 so'm</p>
          <button>Rasmiylashtirishga o'tish</button>
        </div>
      </div>
    </div>
  )
}

export default CartProducts

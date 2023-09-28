import React from 'react'
import './Sorted.css'
import { PiHeartThin } from 'react-icons/pi'
import {BsBagPlus} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import data from '../../static/bannerDataElektronik'


function Sorted() {
    return (
        <div className='sorted'>
            <div className="sorted_my_wishes_card">
                <div className="my_wishes_card_text">
                    <span>Istaklarim</span>
                </div>
                <div className="my_wishes_card_select">
                    <div className="select_card">
                        <span>Saralash</span>
                        <select className='select' class="form-select" aria-label="Default select example">
                            <option selected>Ommabop</option>
                            <option value="1">Arzonroq</option>
                            <option value="2">Qimmatroq</option>
                            <option value="3">Reytingi Yuqori</option>
                            <option value="4">Ko'p buyurttirilgan</option>
                            <option value="5">yaqinda qo'shilgan</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="sorted_my_wishes_container">
                {/* {
                    popularProduct.map((item, index) => (
                        <div className="scrool_bar" key={index}>
                            <div className="cart">
                                <div className="top_cart">
                                    <Link to={`/single-page/${item.id}`}><img src={item.img} alt={item.data} /></Link>
                                    <div className="icon_heart">
                                        <BsHeartFill/>
                                    </div>
                                </div>
                                <div className="bottom_cart_data">
                                    <span>{item.data.slice(0, 29) + " ..."} </span>
                                    <div className="card_price">
                                        <div className="left_price">
                                            <s>{item.price + " so'm"}</s>
                                            <p>{item.price + " so'm"}</p>
                                        </div>
                                        <div className="right_icon_shop">
                                            <BsBagPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    )
}

export default Sorted
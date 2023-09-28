import React, { useState } from 'react'
import './HomeProducts.css'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from "react-icons/sl"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { NavLink } from 'react-bootstrap'
import Header from '../header/Header'
import { useParams } from 'react-router-dom'
// import Tarkib from './tarkib/Tarkib';
// import Olchamm from './olchamm/Olchamm';
// import Korsatma from './korsatma/Korsatma';
// import Tavsif from './tavsif/Tavsif';
// import Header from '../header/Header'    
import data from '../../static/bannerDataElektronik'

function HomeProducts() {
    let { id } = useParams()
    const [imgIndex, setImgIndex] = useState(0)

    let singleData = data.find(i => i.id.toString() === id)
    console.log(singleData)

    let prices = 29000
    const [count, setcount] = useState(1)
    function minus() {
        setcount(count - 1)
    }
    function plus() {
        setcount(count + 1)
    }

    let price = prices * count


    return (
        <div>
            <Header />
            <div className='homeproducts'>
                <div className="homeproducts_boxs">
                    <div className="homeproducts_boxs_left">
                        <div className="homeproducts_boxs_left_carousel">
                            <div className="homeproducts_boxs_left_carousel_left">
                                {
                                    singleData.images?.map((img, index) =>
                                        <div onClick={() => setImgIndex(index)} key={index} className="homeproducts_boxs_left_carousel_left_img">
                                            <img src={img} alt={singleData.title} title={singleData.title} />
                                        </div>

                                    )
                                }

                            </div>
                            <div className="homeproducts_boxs_left_carousel_right">
                                <div className="homeproducts_boxs_left_carousel_right_imgs">
                                    <img src={singleData.images[imgIndex]} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="homeproducts_boxs_right">
                        <div className="homeproducts_boxs_right_header">
                            <div className="homeproducts_boxs_right_header_text">
                                <p><AiFillStar /> 4.9( 38 baho )  </p>
                                <p>600 ta buyurtma</p>
                            </div>
                            <h4><AiOutlineHeart /> <span>Istaklarga</span></h4>
                        </div>
                        <h2>Futbolka yozuvli erkaklar uchun, unisex</h2>
                        <h3><span>29 000 so'm / birlik </span> <s>89 000 so'm</s></h3>
                        <p className='homeproducts_boxs_right_4 column_media'><span>Sotuvchi: </span> <span><a href="/">FASHION STORE</a></span></p>
                        <p className='column_media'><span>Yetkazib berish: </span> <span>1 kun, bepul</span></p>
                        <hr style={{ margin: "20px 0" }} />
                        <p>Rang:</p>
                        <div className="homeproducts_boxs_right_header_text_products_color">
                            <div className="homeproducts_boxs_right_header_text_products_color_item">

                            </div>
                            <div style={{ background: "yellow" }} className="homeproducts_boxs_right_header_text_products_color_item">

                            </div>
                            <div style={{ background: "blue" }} className="homeproducts_boxs_right_header_text_products_color_item">

                            </div>

                        </div>
                        <p style={{ margin: "20px 0  0 0 " }}>Kiyim o'chami:</p>
                        <div className="homeproducts_boxs_right_header_text_products_olcham">
                            <h3>XS</h3>
                            <h3>S</h3>
                            <h3>M</h3>
                            <h3>L</h3>
                            <h3>XL</h3>
                            <h3>XXL</h3>
                            <h3>XXXL</h3>
                        </div>
                        <p>Miqdori:</p>
                        <div className="homeproducts_boxs_right_header_text_products_miqdori">
                            <div className="homeproducts_boxs_right_header_text_products_miqdori_1">
                                <button onClick={minus}><AiOutlineMinus className='AiOutlineMinus' /></button>
                                <h3>{count}</h3>
                                <button onClick={plus}><AiOutlinePlus className='AiOutlineMinus' /></button>
                            </div>
                            <p>Sotuvda 2183 dona bor</p>
                        </div>
                        <p className='display_none_p'>Narx:</p>
                        <div className='homeproducts_boxs_right_header_text_products_prices'>
                            <h2>{price}</h2>
                            <s>89 000</s>
                            <i>Tug’ilgan kun</i>
                        </div>
                        <div className="homeproducts_boxs_right_header_text_products_select">
                            <p><span>Oyiga 3 480 so'mdan </span>  muddatli to'lov</p>
                        </div>
                        <div className="homeproducts_boxs_right_header_text_products_buttons">
                            <button>Savatga qaytish</button>
                            <button>Tugmani bosishda harit qilish</button>
                        </div>
                        <div className="homeproducts_boxs_right_header_text_products_user_indx">
                            <p><SlBasket />  Bu haftada <span>134</span> kishi sotib oldi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sharx_page">
                <div className="sharx_page_header1">
                    <div className="sharx_page_header1_items">
                        <NavLink to={"/tavsifi"}>Mahsulot tavsifi</NavLink>
                        <NavLink to={"/korsatma"}>Ko'rsatma</NavLink>
                        <NavLink to={"/olchamlar"}>O'lchamlar</NavLink>
                        <NavLink to={"/tarkib"}>Tarkib</NavLink>
                        <NavLink to={"/sharhlar"}>Sharhlar(1)</NavLink>
                    </div>
                </div>
                <div className="sharx_page_banner_pagess">
                    {/* <Tavsif/> */}
                    {/* <Korsatma/> */}
                    {/* <Olchamm/> */}
                    {/* <Tarkib/> */}
                </div>
            </div>
        </div>
    )
}

export default HomeProducts
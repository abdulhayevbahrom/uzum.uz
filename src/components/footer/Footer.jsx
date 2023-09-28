import React, { useState } from "react";
import "./Footer.css"
import { Link } from 'react-router-dom'
import src from "../../assets/png-transparent-apple-logo-iphone-computer-apple-logo-company-heart-logo-removebg-preview.png"
import img from "../../assets/images-removebg-preview.png"
import logos from "../../assets/606_instagram-removebg-preview.png"
import logos_2 from "../../assets/Без_названия-removebg-preview.png"
import logos_3 from "../../assets/Без_названия__1_-removebg-preview.png"
import logos_4 from "../../assets/Без_названия__2_-removebg-preview.png"
// import ScrollToTop from "react-scroll-to-top";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { footerData } from "../../static/footerData";


function Footer() {
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    return (
        <div className="footer">
            <div className="acardion_container">
                <button onClick={() => setClick1(!click1)} className="accordion_header_btn">
                    <div className="click_header">
                        <h3>Biz haqimizda</h3>
                        {click1 ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {
                        click1 && (
                            <div className="hidden_cart">
                                <Link>{footerData[0].title}</Link>
                                <Link>{footerData[0].lists}</Link>
                            </div>
                        )
                    }
                </button>
                <button onClick={() => setClick2(!click2)} className="accordion_header_btn">
                    <div className="click_header">
                        <h3>Foydalanuvchilarga</h3>
                        {click2 ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {
                        click2 && (
                            <div className="hidden_cart">
                                <Link>{footerData[1].title}</Link>
                                <Link>{footerData[1].lists}</Link>
                            </div>
                        )
                    }
                </button>
                <button onClick={() => setClick3(!click3)} className="accordion_header_btn">
                    <div className="click_header">
                        <h3>Tadbirkorlarga</h3>
                        {click3 ? <BsChevronUp /> : <BsChevronDown />}
                    </div>
                    {
                        click3 && (
                            <div className="hidden_cart">
                                <Link>{footerData[2].title}</Link>
                                <Link>{footerData[2].lists}</Link>
                            </div>
                        )
                    }
                </button>

            </div>
            {/* <ScrollToTop smooth top={20} /> */}
            {/* <ScrollToTop smooth top={20} /> */}
            <div className="footer_container">
                <div className="footer_col">
                    <h4>Biz haqimizda</h4>

                    <Link to={"/"}>Topshirish punktlari</Link>
                    <Link to={"/"}>Vakansiyalar</Link>
                </div>
                <div className="footer_col">
                    <h4>Foydalanuvchilarga</h4>
                    <Link to={"/"}>Biz bilan bogʻlanish</Link>
                    <Link to={"/"}>Savol-Javob</Link>
                </div>
                <div className="footer_col">
                    <h4>Tadbirkorlarga</h4>
                    <Link to={"/"}>Uzumda soting</Link>
                    <Link to={"/"}>Sotuvchi kabinetiga kirish</Link>
                </div>
                <div className="footer_coll">
                    <h4>Ilovani yuklab olish</h4>
                    <div className="container_item">
                        <div className="app_store">
                            <img className="img" src={src} alt="" />
                            <Link to={"/"}>AppStore</Link>
                        </div>
                        <div className="google_play">
                            <img className="img" src={img} alt="" />
                            <Link to={"/"}>Google Play</Link>
                        </div>
                    </div>
                    <h4>Uzum ijtimoiy tarmoqlarda</h4>
                    <div className="social">
                        <div className="top">
                            <img src={logos} alt="" />
                            <img src={logos_2} alt="" />
                        </div>
                        <div className="bottom">
                            <img src={logos_3} alt="" />
                            <img src={logos_4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
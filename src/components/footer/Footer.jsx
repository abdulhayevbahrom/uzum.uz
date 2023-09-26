import React from "react";
import "./Footer.css"
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import src from "../../assets/png-transparent-apple-logo-iphone-computer-apple-logo-company-heart-logo-removebg-preview.png"
import img from "../../assets/images-removebg-preview.png"
import logos from "../../assets/606_instagram-removebg-preview.png"
import logos_2 from "../../assets/Без_названия-removebg-preview.png"
import logos_3 from "../../assets/Без_названия__1_-removebg-preview.png"
import logos_4 from "../../assets/Без_названия__2_-removebg-preview.png"
import { footerData } from "../../static/footerData";


function Footer() {
    return (
        <div className="footer">
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
                <div className="footer_col">
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
                        <img src={logos} alt="" />
                        <img src={logos_2} alt="" />
                        <img src={logos_3} alt="" />
                        <img src={logos_4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
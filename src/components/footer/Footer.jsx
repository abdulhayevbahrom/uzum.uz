import React from "react";
import "./Footer.css"
import {Link} from 'react-router-dom'

function Footer(){
    return(
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
            </div>
            </div>
        </div>
    )
}

export default Footer
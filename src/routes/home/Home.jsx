import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import CardItem1 from '../../components/cards/card_item1/CardItem1'
import Footer from '../../components/footer/Footer'
import MYswiper from '../../components/swiper/Swiper'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from '../../static/bannerDataElektronik'

function Home() {
    let electronic = data.filter(i => i.type === "Elektronika")
    let kiyim = data.filter(i => i.type === "Kiyim")
    return (
        <div className="home">
            <ToastContainer />
            <Header />
            <MYswiper />
            <CardItem1 componentName={"Tugulgan kun"} data={electronic} />
            <CardItem1 componentName={"Elektronika"} data={kiyim} />
            <Footer />
        </div>
    );
}

export default Home

import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import HomeProducts from '../../components/homeProducts/HomeProducts'
import CardItem1 from '../../components/cards/card_item1/CardItem1'
import Footer from '../../components/footer/Footer'
import MYswiper from '../../components/swiper/Swiper'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
    let productAPI = "https://fakestoreapi.com/products";
    const [product, setproduct] = useState([])
    useEffect(() => {
        axios
            .get(productAPI)
            .then((res) => setproduct(res.data))
            .catch((err) => console.log(err))
    }, []);

    // let elektronikaData = product.filter(i => i.type === "elektornika")

    return (
      <div className="home">
        <ToastContainer />

        <Header />
        <HomeProducts />
        <MYswiper />
        <CardItem1 componentName={"Tugulgan kun"} data={product} />
        <CardItem1 componentName={"Elektronika"} data={product} />
        <Footer />
      </div>
    );
}

export default Home

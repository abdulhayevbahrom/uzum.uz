import React from 'react'
import './Sorted.css'
import { PiHeartThin } from 'react-icons/pi'
import {BsBagPlus} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const popularProduct = [
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/cjutr5kjvf2hdh3fato0/t_product_540_high.jpg#1695437646607",
        icons: <PiHeartThin />,
        data: "Futbolka yozuvli erkaklar uchun, unisex",
        price: "29 000",
        id: '1'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/ce3fe32vtie1lhbefh1g/t_product_540_high.jpg#1695449497816",
        icons: <PiHeartThin />,
        data: "Masofadan boshqariladigan o'yinchoq samalyot",
        price: "57 000",
        id: '2'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/ck014q4jvf2qegt3btd0/t_product_540_high.jpg#1695455774221",
        icons: <PiHeartThin />,
        data: "Idish yuvish suyuqligi Fairy Lotion, aloe vera aromati va E vitamini bilan",
        price: "15 000",
        id: '3'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/cammvre3p3gj5u389pc0/t_product_540_high.jpg#1695456908675",
        icons: <PiHeartThin />,
        data: "Choynak Kukmara zanglamaydigan po'latdan, hushtak bilan, 3 litr",
        price: "124 000",
        id: '4'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/cdqld48v1htd23ai43eg/t_product_540_high.jpg#1695457182232",
        icons: <PiHeartThin />,
        data: "Futbolka Selfie print bilan",
        price: "79 000",
        id: '5'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/cdibqpf0tgqvlm59b1v0/t_product_540_high.jpg#1695457773345",
        icons: <PiHeartThin />,
        data: "Ofis qog'oz Svetotopy ECO, A4f, 80g/m2, 500 varaq",
        price: "38 000",
        id: '6'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/ccgataf0tgqvlm57e3tg/t_product_540_high.jpg#1695457802514",
        icons: <PiHeartThin />,
        data: "Quti aksessuarlar va zargarlik buyumlari uchun",
        price: "51 000",
        id: '7'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/ccolojf0tgqvlm57jrqg/t_product_540_high.jpg#1695457856352",
        icons: <PiHeartThin />,
        data: "Simsiz quloqchinlar TWS i12, Bluetooth 5.0",
        price: "64 000",
        id: '8'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/cc9l266ha888i5ell7qg/t_product_540_high.jpg#1695457915104",
        icons: <PiHeartThin />,
        data: "Oshxona, hammom va uyni yuvish uchun tutqichli uy cho'tkasi",
        price: "19 000",
        id: '9'
    },
    {
        title: "Ommabop mahsulotlar",
        img: "https://images.uzum.uz/ce7l7p0l08kcldtoe70g/original.jpg",
        icons: <PiHeartThin />,
        data: "Trimmer Professional soch olish mashinkasi VGR V-107",
        price: "289 000",
        id: '10'
    },
]


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
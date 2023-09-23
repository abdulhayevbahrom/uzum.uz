import React from 'react'
import './PopularProducts.css'
import { PiHeartThin } from 'react-icons/pi'
import { BsBagPlus } from 'react-icons/bs'

const popularProduct = [
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cjutr5kjvf2hdh3fato0/t_product_540_high.jpg#1695437646607",
    icons: <PiHeartThin />,
    data: "Futbolka yozuvli erkaklar uchun, unisex",
    price: "29 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ce3fe32vtie1lhbefh1g/t_product_540_high.jpg#1695449497816",
    icons: <PiHeartThin />,
    data: "Masofadan boshqariladigan o'yinchoq samalyot",
    price: "57 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ck014q4jvf2qegt3btd0/t_product_540_high.jpg#1695455774221",
    icons: <PiHeartThin />,
    data: "Idish yuvish suyuqligi Fairy Lotion, aloe vera aromati va E vitamini bilan",
    price: "15 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cammvre3p3gj5u389pc0/t_product_540_high.jpg#1695456908675",
    icons: <PiHeartThin />,
    data: "Choynak Kukmara zanglamaydigan po'latdan, hushtak bilan, 3 litr",
    price: "124 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cdqld48v1htd23ai43eg/t_product_540_high.jpg#1695457182232",
    icons: <PiHeartThin />,
    data: "Futbolka Selfie print bilan",
    price: "79 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cdibqpf0tgqvlm59b1v0/t_product_540_high.jpg#1695457773345",
    icons: <PiHeartThin />,
    data: "Ofis qog'oz Svetotopy ECO, A4f, 80g/m2, 500 varaq",
    price: "38 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ccgataf0tgqvlm57e3tg/t_product_540_high.jpg#1695457802514",
    icons: <PiHeartThin />,
    data: "Quti aksessuarlar va zargarlik buyumlari uchun",
    price: "51 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ccolojf0tgqvlm57jrqg/t_product_540_high.jpg#1695457856352",
    icons: <PiHeartThin />,
    data: "Simsiz quloqchinlar TWS i12, Bluetooth 5.0",
    price: "64 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cc9l266ha888i5ell7qg/t_product_540_high.jpg#1695457915104",
    icons: <PiHeartThin />,
    data: "Oshxona, hammom va uyni yuvish uchun tutqichli uy cho'tkasi",
    price: "19 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ce7l7p0l08kcldtoe70g/original.jpg",
    icons: <PiHeartThin />,
    data: "Trimmer Professional soch olish mashinkasi VGR V-107",
    price: "289 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cd8em8r5a95unf133ft0/original.jpg",
    icons: <PiHeartThin />,
    data: "Erkaklar uchun trimmer ustara 7 tasi 1 da, 580",
    price: "180 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cci037v0tgqvlm57f5r0/t_product_540_high.jpg#1695458060851",
    icons: <PiHeartThin />,
    data: "Yuz niqobi Biqaqua akne qarshi, tozalovchi kislorodli pufakchali",
    price: "35 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cf9ngp8l08k0o9qihk70/original.jpg",
    icons: <PiHeartThin />,
    data: "Simsiz trimmer soch olish uchun VGR V-055",
    price: "111 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cgvooe7g49devoaef870/t_product_540_high.jpg#1695458170740",
    icons: <PiHeartThin />,
    data: "Simsiz o'yin uchun quloqchinlar K-55, mikrofoni va shovqinini bekor qiluvchi tizimi",
    price: "151 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/ci5bs65enntd8rfbhibg/t_product_540_high.jpg#1695458213295",
    icons: <PiHeartThin />,
    data: "Kosmetik ko'zgu LED yoritgichi bilan makiyaj uchun, yig'iladigan konstruksiya",
    price: "120 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cjmnlokvutv1g2rj0ecg/t_product_540_high.jpg#1695458268830",
    icons: <PiHeartThin />,
    data: "Ayollar uchun futbolka, erkin tikuvli, uniseks",
    price: "74 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cj8bkusvutv1p29keu40/t_product_540_high.jpg#1695458313547",
    icons: <PiHeartThin />,
    data: "Nike titan po'latdan yasalgan osma zanjirlar, bitta narx uchun 2 ta zanjir",
    price: "60 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cgk3e7r57mg9720ddvu0/t_product_540_high.jpg#1695458351242",
    icons: <PiHeartThin />,
    data: "Televizor TCL 50' 4K Led HDR 10+ SMART Google TV P635",
    price: "4 312 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cd4f3qrb3ho5lmuq6n00/t_product_540_high.jpg#1695458423960",
    icons: <PiHeartThin />,
    data: "Oyoq oldidagi silikon tagliklar shikastlanish qarshi",
    price: "27 000"
  },
  {
    title: "Ommabop mahsulotlar",
    img: "https://images.uzum.uz/cjk9u13k9fqacmkvf31g/t_product_540_high.jpg#1695458478821",
    icons: <PiHeartThin />,
    data: "Kiyimlarni saqlash uchun organayzer",
    price: "53 000"
  },
]


function PopularProducts() {
  return (
    <div className='popular_products'>
      <h2>Ommabop mahsulotlar</h2>
      <div className="scroll">
        {
          popularProduct.map((item, index) => (
            <div className="scrool_bar" key={index}>
              <div className="cart">
                <div className="top_cart">
                  <img src={item.img} alt={item.data} />
                  <div className="icon_heart">
                    {item.icons}
                  </div>
                </div>
                <div className="bottom_cart_data">
                  <span>{item.data.slice(0 , 29) + " ..."} </span>
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
        }
      </div>
    </div>
  )
}

export default PopularProducts


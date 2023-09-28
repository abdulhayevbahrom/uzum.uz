import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import rasm1 from './images/image_2023-09-23_14-48-27.jpg'
import rasm2 from './images/image_2023-09-23_14-49-32.jpg'
import rasm3 from './images/image_2023-09-23_14-49-51.jpg'
import rasm4 from './images/image_2023-09-23_14-50-03.jpg'
import rasm5 from './images/image_2023-09-23_14-50-18.jpg'
import './Swiper.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

let carouselData = [rasm1, rasm2, rasm3, rasm4, rasm5]

const MyCarousel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000} >
            {
                carouselData.map((img, index) =>
                    <div className='slide' key={index}>
                        <img src={img} alt="Image1" />
                    </div>
                )
            }


        </Carousel>
    );
};

export default MyCarousel;

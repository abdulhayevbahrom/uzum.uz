import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import rasm1 from './images/image_2023-09-23_14-48-27.png'
import rasm2 from './images/image_2023-09-23_14-49-32.png'
import rasm3 from './images/image_2023-09-23_14-49-51.png'
import rasm4 from './images/image_2023-09-23_14-50-03.png'
import rasm5 from './images/image_2023-09-23_14-50-18.png'
import './Swiper.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    return (
        <Carousel>
            <div className='slide'>
                <img src={rasm1} alt="Image1" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm2} alt="Image2" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm3} alt="Image3" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm4} alt="Image1" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm5} alt="Image2" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm3} alt="Image3" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm1} alt="Image1" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm2} alt="Image2" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm3} alt="Image3" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm1} alt="Image1" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm2} alt="Image2" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm3} alt="Image3" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm4} alt="Image1" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            <div className='slide'>
                <img src={rasm5} alt="Image2" />
                {/* <p className="legend">ish jarayonidan rasmlar</p> */}
            </div>
            
        </Carousel>
    );
};

export default MyCarousel;

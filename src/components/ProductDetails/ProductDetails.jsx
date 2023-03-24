import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {Swiper, SwiperSlide } from "swiper/react";
import './productDetails.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductDetails =()=>{
    const location = useLocation();
    const {cardData} = location.state
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    
    return(
        <div className='prdt_details'>
        <div className='prdt_swiper'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {cardData && cardData.images && cardData.images.map((image,index)=>(
                    <SwiperSlide>
                        <img src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
               onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {cardData && cardData.images && cardData.images.map((image,index)=>(
                    <SwiperSlide className='small_slide'>
                     <img src={image} className='small_slide_image' />
                    </SwiperSlide>
                ))}
                    
                </Swiper>
        </div>
        <div className='prdt_info'>
            <h1 className='prdt-title'>{cardData.title}</h1>
            <p className='prdt-type'>{cardData.type}</p>
            <p className='prdt-Price'>MRP: <strong>${cardData.price}</strong></p>
            <p className='prdt-desc'>{cardData.description}</p>
            <div className="buy-btn btn">Add to Cart</div>
            <div className="wishlist-btn btn">Add to Fav</div>
        </div>
        </div>
    )
}
export default ProductDetails
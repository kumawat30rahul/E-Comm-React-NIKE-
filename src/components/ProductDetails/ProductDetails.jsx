import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {Swiper, SwiperSlide } from "swiper/react";
import './productDetails.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import CommonSlider from '../Home/Slider/CommonSlider';

const ProductDetails =()=>{
    const location = useLocation();
    const {cardData} = location.state
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [sizeSelect,setSizeSelect] = useState(false);

    const shoesSize= [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11]
    
    return(
        <>
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
                <div className='selectSize'>
                <h3 className='size_title'>Select Size</h3>
                <div className='sizes'>
                    {shoesSize.map((size)=>(
                        <button type="text" name='shoeSize' onClick={()=>setSizeSelect(!sizeSelect)} className={`shoe-size ${sizeSelect ? 'active' : ''}`}>{`UK/IN ${size}`}</button>
                    ))}
                </div>
                </div>
                <button className="buy-btn btn">Add to Cart</button>
                <button className="wishlist-btn btn">Add to Fav</button>
                <p className='prdt-desc'>{cardData.description}</p>
            </div>
        </div>
        <div className='recommendations'>
            <CommonSlider 
                title='Recommendations'
                jsonName='AllProducts'
                slides={[3.2,3.2,2.8,2,1]}
                />
        </div>
        </>
    )
}
export default ProductDetails
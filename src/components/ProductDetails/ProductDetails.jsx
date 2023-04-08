import React,{useState,useEffect} from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {Swiper, SwiperSlide } from "swiper/react";
import './productDetails.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import CommonSlider from '../Home/Slider/CommonSlider';
import { firebaseConfig } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const cartRef = database.ref('Cart');
const cartRef2 = database.ref('Fav');




const ProductDetails =()=>{
    const location = useLocation();
    const {cardData} = location.state

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [sizeSelect,setSizeSelect] = useState(null);
    const [logedIn,setLogedIn] = useState(false);
    const [sizes,setSizes] = useState([]);

    const localLogedIn = localStorage.getItem('logedin_data')
    const sessionLogedIn = sessionStorage.getItem('logedin_data')

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(()=>{
        if(localLogedIn || sessionLogedIn){
            setLogedIn(true);
        }
    },[])

    useEffect(()=>{
        if(cardData.subCategory.includes('Shoes')){
            setSizes([6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11])
        }else{
            setSizes(['XS','S','L','M','XL','XXL','XXXL'])
        }
    },[])
    
    const sizeSelection =(size)=>{
        if(sizeSelect === size){
            setSizeSelect(null)
        }else{
            setSizeSelect(size)
        }
    }


    const navigate = useNavigate()
    // let x = 1;
    const addingTocart=(product)=>{
        if(logedIn){
            if(sizeSelect !== null){
                let newProduct = {
                    ...product,
                    quantity: 1,
                    size: sizeSelect,
                }
                alert('Added Successfully')
                cartRef.child(product.id).set(newProduct)
            }else{
                alert('Select Proper Size')
            }
        }else{
            alert('Please Login before Adding to Cart')
            navigate('/login')
        }
    }
    const addingToFav=(product)=>{
        if(logedIn){
            if(sizeSelect !== null){
                let newProduct = {
                    ...product,
                    size: sizeSelect,
                    quantity: 1,
                }
                alert('Added Successfully')
                cartRef2.child(product.id).set(newProduct)
            }else{
                alert('Select Proper Size')
            }
        }else{
            alert('Please Login before Adding to Cart')
            navigate('/login')
        }
    }
    return(
        <>
        <ToastContainer/>

        <div className='prdt_details'>
            <div className='prdt_swiper'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {cardData && cardData.images && cardData.images.map((image,index)=>(
                        <SwiperSlide key={index}>
                            <img src={image} alt='' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                //    onSwiper={setThumbsSwiper}
                   loop={true}
                   spaceBetween={10}
                   slidesPerView={5}
                   freeMode={true}
                   watchSlidesProgress={true}
                   modules={[FreeMode, Navigation, Thumbs]}
                   className="mySwiper"
                >
                    {cardData && cardData.images && cardData.images.map((image,index)=>(
                        <SwiperSlide className='small_slide' key={index}>
                        <img src={image} className='small_slide_image' alt='' />
                        </SwiperSlide>
                    ))}
                        
                    </Swiper>
            </div>
            <div className='prdt_info'>
                <h1 className='prdt-title'>{cardData.title}</h1>
                <p className='prdt-type'>{cardData.type}</p>
                <p className='prdt-Price'>MRP: <strong>${Number(cardData.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></p>
                <div className='selectSize'>
                <h3 className='size_title'>Select Size</h3>
                <div className='sizes'>
                    {sizes.map((size)=>(
                        <button type="text" name='shoeSize' onClick={()=>sizeSelection(size)} className={`shoe-size ${sizeSelect === size ? 'active' : ''}`}>{`${size}`}</button>
                    ))}
                </div>
                </div>
                <button className="buy-btn btn" onClick={()=>addingTocart(cardData)}>Add to Cart</button>
                <button className="wishlist-btn btn" onClick={()=>addingToFav(cardData)}>Add to Fav</button>
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
import React ,{useState,useEffect} from 'react'
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from '../../firebase'
import Slider from "react-slick";
import './Commonslider.css'
import CommonCard from './CommonCard';
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function CommonSlider({title,jsonName,slides}:any) {
  const [data,setData] = useState<any[]>([])

   useEffect(() => {
         const db = getDatabase();
         const dbRef = ref(db, jsonName);
         onValue(dbRef, (snapshot) => {
           let newData = snapshot.val();
           setData(newData);
         });
       }, []);
       useEffect(() => {
         console.log(data);
       }, [data]);
       
       const app = initializeApp(firebaseConfig);
      //slider settings---->>>>
      var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: slides[0],
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slides[1],
              slidesToScroll: 1,
              infinite: true,
        initialSlide: 1,

            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slides[2],
              slidesToScroll: 1,
              infinite: true,
        initialSlide: 1,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: slides[3],
              slidesToScroll: 1,
              infinite: true,
        initialSlide: 1,

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: slides[4],
              slidesToScroll: 1,
        initialSlide: 1,

            }
          }
        ]
      };

  return (
    <div className='slider_wrapper'>
      <div className="slider_info">
        <p className="slider_title">{title}</p>
        <p className='shop_button'>SHOP</p>
      </div>
      <Slider {...settings} className='trending_slider'>
      {data && data.map( product =>(
        <CommonCard 
            title={product.title}
            images={product.images}
            mainCategory={product.mainCategory}
            price={product.price}
            jsonName='TrendingShoes'
          />
      ))}

      </Slider>
      </div>
  )
}

export default CommonSlider








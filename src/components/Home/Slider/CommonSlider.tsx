import React ,{useState,useEffect} from 'react'
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from '../../firebase'
import Slider from "react-slick";
import './Commonslider.css'
import CommonCard from './CommonCard';
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Link, useNavigate} from 'react-router-dom'



function CommonSlider({title,jsonName,slides}:any) {
  const [prdtDetail,setPrdtDetail] = useState<any>();
  const navigate = useNavigate();
  
  
  
  const [data,setData] = useState<any[]>([])
   useEffect(() => {
         const db = getDatabase();
         const dbRef = ref(db, jsonName);
         onValue(dbRef, (snapshot) => {
           let newData = snapshot.val();
           setData(newData);
         });
       }, []);
   const app = initializeApp(firebaseConfig);

  //  }
      //slider settings---->>>>
      var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: slides[0],
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NavigateNextIcon />,
        prevArrow: <NavigateBeforeIcon />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slides[1],
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,

            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slides[2],
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: slides[3],
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,

            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: slides[4],
              slidesToScroll: 1,
              initialSlide: 0,

            }
          }
        ]
      };

      const productCardhandler=(cardData:any)=>{
        setPrdtDetail(cardData);
        navigate(`/productDetail/${cardData.id}`,{state:{cardData}})
      }
   return (
    <div className='slider_wrapper'>
      <div className="slider_info">
        <p className="slider_title">Best of {title}</p>
        <Link to={`/shop/${title}`} className="cat_links">
         <p className='shop_button'>SHOP</p>
        </Link>
      </div>
      <Slider {...settings} className='trending_slider'>
      {data && data.length > 0 && data.map( product =>(
        <div onClick={()=> productCardhandler(product)}>
        <CommonCard 
            title={product.title}
            images={product.images}
            mainCategory={product.mainCategory}
            price={product.price}
            jsonName='TrendingShoes'
          />
        </div>
      ))}
      </Slider>
      </div>
  )
}

export default CommonSlider








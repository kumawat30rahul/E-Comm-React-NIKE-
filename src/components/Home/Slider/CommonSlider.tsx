import React,{useState,useEffect} from 'react'
// import { getDatabase, ref, onValue } from 'firebase/database';
// import { initializeApp } from "firebase/app";
// import {firebaseConfig} from '../../firebase'
import Slider from "react-slick";
import './Commonslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CommonSlider() {
    const [data,setData] = useState([])
    //----->>>>getting the data from real time database from firebase
    // useEffect(() => {
    //     const db = getDatabase();
    //     const dbRef = ref(db, 'AllProducts');
    //     onValue(dbRef, (snapshot) => {
    //       const newData = snapshot.val();
    //       setData(newData);
    //     });
    //   }, []);
    //   useEffect(() => {
    //     console.log(data);
    //   }, [data]);
      
    //   const app = initializeApp(firebaseConfig);
    
    // useEffect(()=>{
    //   fetch('https://firebasestorage.googleapis.com/v0/b/ecommerce-react-92460.appspot.com/o/shoesTrend.json?alt=media&token=a27fa7fa-5a2b-4b32-bc5a-09eb9e3c1c79')
    //   .then(res=>res.json())
    //   .then(data=>setData(data))
    // },[])

    useEffect(() => {
          console.log(data);
        }, [data]);

      //slider settings---->>>>

      var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

if(data.length === 0){
  return <div >loading.....</div>
}

  return (
    <div className='trending_slider'>
      <Slider {...settings}>
        {data && data.map( product =>(
          <div className='card'>
            <div className='card_image'>
              <img src={product['images'][0]} alt='' className="imagesss"/>
            </div>
            <div className='card_content'>
              <p className='card_name'>{product['name']}</p>
              <p className='card_price'>{product['price']}</p>
              <p className='card_category'>{product['mainCategory']}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CommonSlider








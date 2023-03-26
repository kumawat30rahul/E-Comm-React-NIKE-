import React,{useState,useEffect}  from 'react'
import './ShoppingProduct.css'
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from '../firebase/index'
import { useNavigate } from 'react-router-dom';

function ShoppingProduct({category}:any) {
  const [data,setData] = useState<any[]>([])
  const [filterData,setFilterData] = useState<any[]>([])
  useEffect(() => {
          const db = getDatabase();
          const dbRef = ref(db, 'AllProducts');
          onValue(dbRef, (snapshot) => {
            let newData = snapshot.val();
            setData(newData);
            if(category !== 'AllProducts'){
              newData = newData.filter((product:any) => product.mainCategory.includes(category))
              
              setFilterData(newData)
            }else{
              setFilterData(newData)
            }
          });
        }, [filterData,data]);
        
    const app = initializeApp(firebaseConfig);
  


  const navigate = useNavigate();

  const navigationHandler=(cardData:any)=>{
    navigate(`/productDetail/${cardData.id}`,{state: {cardData}})
  }
  return (
    <div className='card_wrapper'>
      {data && filterData.map((product)=>(
        <div className='card' onClick={()=>navigationHandler(product)}>
          <div className='card_shop_image'>
            <img src={product.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{product.title}</h3>
            <p className='card-shop_type'>{product.type}</p>
            <h3 className='card-shop_price'>MRP: ${product.price}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShoppingProduct
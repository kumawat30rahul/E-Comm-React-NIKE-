import React from 'react'
import './ShoppingProduct.css'


const object = {
  "id": "12",
  "title": "Jordan Flight Heritage 85",
  "type": "Men's Graphic Long-Sleeve Crew-Neck T-Shirt",
  "price": "2,995",
  "rating": "4.5",
  "images": ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf95a520-060c-47bb-b613-0efbb1001cd5/jordan-flight-heritage-85-graphic-long-sleeve-crew-neck-t-shirt-Kx7QPb.png",
   "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/76f17f7b-7c10-4aa0-bf9d-4b2d2b722682/jordan-flight-heritage-85-graphic-long-sleeve-crew-neck-t-shirt-Kx7QPb.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1f3168d-93d4-49c9-a60c-9b310ec49786/jordan-flight-heritage-85-graphic-long-sleeve-crew-neck-t-shirt-Kx7QPb.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3405fe45-1408-4a8b-8ad9-0a48e8eda37b/jordan-flight-heritage-85-graphic-long-sleeve-crew-neck-t-shirt-Kx7QPb.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd08b524-e048-4e53-a4f1-3e82cf9672c2/jordan-flight-heritage-85-graphic-long-sleeve-crew-neck-t-shirt-Kx7QPb.png"],
  "description": "There's no better year to celebrate #23. Do it in a classic long-sleeve tee that reps 23 of Jordan's most iconic logos, from the very beginning to right now.",
  "mainCategory": "Mens",
  "subCategory": "Mens Clothing T-shirt"
}

function ShoppingProduct() {
  return (
    <div className='card_wrapper'>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
        <div className='card'>
          <div className='card_shop_image'>
            <img src={object.images[0]} alt='' className='shop_image'/>
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{object.title}</h3>
            <p className='card-shop_type'>{object.type}</p>
            <h3 className='card-shop_price'>MRP: ${object.price}</h3>
          </div>
        </div>
    </div>
  )
}

export default ShoppingProduct
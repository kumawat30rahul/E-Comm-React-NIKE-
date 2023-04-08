import React from 'react'
import './CommonCard.css'

const CommonCard = ({title,price,mainCategory,images}:any) => {
   
    return (
        <div  >
            <div className='card'>
              <div className='card_image'>
                <img src={images[0]} alt='' className="imagesss"/>
              </div>
              <div className='card_content'>
                <div className='card_content_name_div'>
                  <p className='card_name'>{title}</p>
                  <p className='card_price'>${price}</p>
                </div>
                <p className='card_category'>{mainCategory}</p>
              </div>
            </div>
        </div>
    )
}

export default CommonCard
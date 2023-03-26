import React from 'react';
import Filter from './Filter/Filter';
import ShoppingProduct from './ShoppingProduct';
import './Shop.css'
import { useParams } from 'react-router-dom';



const Shop = () => {
    const {category} = useParams();
    return (
        <div className='shop'>
            <div className='filters_shop'>
                <Filter />
            </div>
            <div className='products_shop'>
                <h1 className='shop_title'>{category}</h1>
                <ShoppingProduct category={category}/>
            </div>
        </div>
    )
}

export default Shop
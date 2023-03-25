import React from 'react';
import Filter from './Filter/Filter';
import ShoppingProduct from './ShoppingProduct';
import './Shop.css'




const Shop = () => {
    return (
        <div className='shop'>
            <div className='filters_shop'>
                <Filter />
            </div>
            <div className='products_shop'>
                <h1 className='shop_title'>Mens</h1>
                <ShoppingProduct />
            </div>
        </div>
    )
}

export default Shop
import React from 'react'
import './Cart.css'


const Cart =() => {
    return (
        <div className='cart_checkout'>
            <div className='cart'>
                <h1 className="cart_title">Bag</h1>
                <div className="cart_items">
                    <div className='cart_card'>
                        <div className="cart_card_image">
                            <img src='https://media.moddb.com/images/members/5/4550/4549205/duck.jpg' alt='' className='cart_image'></img>
                        </div>
                        <div className='cart_card_info'>
                            <div className='cart_main_info'>
                                <h3 className='cart_card_title'>Nike balster turf studds</h3>
                                <p className='cart_price'>MRP: <strong>$ 12453</strong></p>
                            </div>
                            <p className='cart_type'>Turf shoes</p>
                            <div className='size_quantity'>
                                <p className='cart_size'>Turf shoes</p>
                                <label htmlFor='cart_quantity' className='label'>Quantity</label>
                                <input type="number" className='cart_quantity' />
                            </div>
                            <div className="delete">
                                <button className="delete_btn btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='summary'>
                <h1 className="summary_title">Summary</h1>
                <div className="subtotal">
                 <p className="subtotal_title">Subtotal</p>
                 <p className="subtotal_Price">$512</p>
                </div>
                <div className="delivery">
                    <p className="delivery_title">Estimated Delivery Price</p>
                    <p className="delivery_Price">$662</p>
                </div>
                <div className="total">
                    <p className="total_title">Total</p>
                    <p className="total_Price">$15132</p>
                </div>
                <button className='checkOut_btn btn'>CHECKOUT</button>
            </div>
        </div>
    )
}
export default Cart
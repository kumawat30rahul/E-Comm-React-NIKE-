import React, { useEffect, useState } from 'react'
import './Cart.css'
import './Fav.css'
import { firebaseConfig } from '../firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const cartRef = database.ref('Cart');

const Fav =() => {




    return (
        <div className='cart_checkout'>
            <div className='cart'>
                <h1 className="cart_title">Your Favorites</h1>
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
                            <div className="delete">
                                <button className="delete_btn btn">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fav
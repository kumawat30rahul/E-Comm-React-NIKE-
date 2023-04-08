import React, { useEffect, useState } from 'react'
import './Cart.css'
import './Fav.css'
import { firebaseConfig } from '../firebase';
import { getDatabase, ref, onValue, remove, get } from 'firebase/database';
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const cartRef = database.ref('Cart');

const app = initializeApp(firebaseConfig);

const Fav =() => {
    const [data,setData] = useState<any[]>([])

    useEffect(() => {
        const db = getDatabase();
        const dbRef = ref(db, 'Fav');
        onValue(dbRef, (snapshot) => {
          let newData = snapshot.val();
          console.log(newData);
          
          setData(newData ? Object.values(newData) : []);
        });
      }, []);

      const deletingProduct = (e:any) => {
        const {id} = e.target
        const database = getDatabase();
        const cartRef = ref(database, `Fav/${id}`);
        remove(cartRef)
    }

    const addingTocart=(product:any)=>{
                let newProduct = {
                    ...product,
                }
                cartRef.child(product.id).set(newProduct)
                alert("Added Succesfully");
    }

    return (
        <div className='cart_checkout'>
            <div className='cart'>
                <h1 className="cart_title">Your Favorites</h1>
                <div className="cart_items">
                    {data && data.length > 0 && data.map((product:any)=>(
                        <div className='cart_card'>
                            <div className="cart_card_image">
                                <img src={product.images[0]} alt='' className='cart_image'></img>
                            </div>
                            <div className='cart_card_info'>
                                <div className='cart_main_info'>
                                    <h3 className='cart_card_title'>{product.title}</h3>
                                    <p className='cart_price'>MRP: <strong>$ {Number(product.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></p>
                                </div>
                                <p className='cart_type'>{product.type}</p>
                                <div className="delete">
                                    <button className="delete_btn btn" id={product.id} onClick={deletingProduct}><DeleteIcon /></button>
                                    <button className="aaddtocart_btn delete_btn btn" onClick={()=>addingTocart(product)}><AddShoppingCartIcon /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Fav
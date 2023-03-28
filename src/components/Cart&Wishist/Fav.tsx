import React, { useEffect, useState } from 'react'
import './Cart.css'
import './Fav.css'
import { firebaseConfig } from '../firebase';
import { getDatabase, ref, onValue, remove, get } from 'firebase/database';
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

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

      const deletingProduct=  (e:any)=>{
        const {id} = e.target
        
        const database = getDatabase();
        const cartRef = ref(database, `Fav/${id}`);
        // const childRef = ref(cartRef, id);
        remove(cartRef)
            .then(() => {
                console.log("Child node deleted successfully.");
            })
            .catch((error) => {
                console.error("Error deleting child node:", error);
            });
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
                                    <button className="delete_btn btn" onClick={deletingProduct}>Delete</button>
                                    <button className="aaddtocart_btn delete_btn btn" onClick={addingTocart}>Add To Cart</button>
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
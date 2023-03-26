import React,{useState,useEffect} from 'react'
import './Cart.css'
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from '../firebase/index'



function Cart(){
    const [data,setData] = useState<any[]>([])
    const [totalMoney,setTotalMoney] = useState<any>()
    const [quantity,setQuantity] = useState<any>(1)
    // const []

    useEffect(() => {
          const db = getDatabase();
          const dbRef = ref(db, 'Cart');
          onValue(dbRef, (snapshot) => {
            let newData = snapshot.val();
            setData(newData ? Object.values(newData) : []);
          });
        }, []);
    const app = initializeApp(firebaseConfig);

        const totalValue = ()=>{
            if(data.length > 0){
                const money = data.reduce((sum,item)=> {
                    return sum +Number(item.price)},0 )
                
                setTotalMoney(money)
            }
        }
        useEffect(()=>{
            totalValue();
            console.log(totalMoney, typeof totalMoney);
        },[data])

        const quantityHandler =(e:any) => {
            const {id} = e.target
            console.log(id);
            // if(data.length> 0){
                
            //     data.forEach((product)=>{
            //         console.log(product.id);
            //         if(id === product.id){
            //             setQuantity(parseInt(e.target.value));
            //         }
            //     })
            // }
        }
       
    return (
        <div className='cart_checkout'>
                     <div className='cart'>
                     <h1 className="cart_title">Bag</h1>
                     <div className="cart_items">
                 {data.length > 0 ? data.map((product)=>(
                         <div className='cart_card'>
                             <div className="cart_card_image">
                                 <img src={product.images[0]} alt='' className='cart_image'></img>
                             </div>
                             <div className='cart_card_info'>
                                 <div className='cart_main_info'>
                                     <h3 className='cart_card_title'>{product.title}</h3>
                                     <p className='cart_price'>MRP: <strong>$ {product.price * quantity}</strong></p>
                                 </div>
                                 <p className='cart_type'>Turf shoes</p>
                                 <div className='size_quantity'>
                                     <p className='cart_size'>Size:</p>
                                     <label htmlFor='cart_quantity'  className='label'>Quantity</label>
                                     <input type="number"  className='cart_quantity' min="1" id={product.id} value={quantity} onChange={quantityHandler}/>
                                 </div>
                                 <div className="delete">
                                     <button className="delete_btn btn">Delete</button>
                                 </div>
                             </div>
                         </div>
            )): <div>Empty ARray</div>}
                     </div>
                 </div>
            <div className='summary'>
                <h1 className="summary_title">Summary</h1>
                <div className="subtotal">
                 <p className="subtotal_title">Subtotal</p>
                 <p className="subtotal_Price">$ {totalMoney}</p>
                </div>
                <div className="delivery">
                    <p className="delivery_title">Estimated Delivery Price</p>
                    <p className="delivery_Price">$662</p>
                </div>
                <div className="total">
                    <p className="total_title">Total</p>
                    <p className="total_Price">$1524</p>
                </div>
                <button className='checkOut_btn btn'>CHECKOUT</button>
            </div>
        </div>
    )
}
export default Cart
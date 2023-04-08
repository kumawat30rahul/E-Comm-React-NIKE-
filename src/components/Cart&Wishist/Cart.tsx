import React,{useState,useEffect} from 'react'
import './Cart.css'
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from '../firebase/index'


const app = initializeApp(firebaseConfig);

function Cart(){
    const [data,setData] = useState<any[]>([])
    const [totalMoney,setTotalMoney] = useState<any>()
    const [total,setTotal] = useState<any>()

    useEffect(() => {
          const db = getDatabase();
          const dbRef = ref(db, 'Cart');
          onValue(dbRef, (snapshot) => {
            let newData = snapshot.val();
            console.log(newData);
            
            setData(newData ? Object.values(newData) : []);
          });
        }, []);

        const subtotalValue = ()=>{
            if(data.length > 0){
                const money = data.reduce((sum,item)=> {
                    return sum +(Number(item.price)*Number(item.quantity))},0 )
                
                    setTotalMoney(money)
                }else{
                    setTotalMoney(0)
                    
            }
        }
        const updateQuantity=(e:any)=>{
            const {id,value} = e.target;
            const newData = data.map((product)=>{
                if(id === product.id){
                    return {
                        ...product,
                        price: product.price ,
                        quantity: value,
                    }
                }else{
                    return {
                        ...product,
                        // quantity: 1,
                    }
                }
            })
            console.log(newData);
            
            setData(newData);
        }
        const totalHandler =()=>{
            if(totalMoney){
                const money = Number(totalMoney) + 100;
                console.log("moeny",money);
                console.log("totalMoney",totalMoney);
                
                setTotal(money);
            }else{
                setTotal(0)
            }
        }

        const deletingProduct=  (e:any)=>{
            const {id} = e.target
            
            const database = getDatabase();
            const cartRef = ref(database, `Cart/${id}`);
            // const childRef = ref(cartRef, id);
            remove(cartRef)
                .then(() => {
                    console.log("Child node deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting child node:", error);
                });
        }
        useEffect(()=>{
            subtotalValue();
        },[data])
        useEffect(()=>{
            totalHandler();
        },[totalMoney])


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
                                     <p className='cart_price'>MRP: 
                                        <strong>$ 
                                        {(Number(product.price) * Number(product.quantity)).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </strong>
                                    </p>
                                 </div>
                                 <p className='cart_type'>Turf shoes</p>
                                 <div className='size_quantity'>
                                     <p className='cart_size'>Size: {product.size}</p>
                                     <label htmlFor='cart_quantity'  className='label'>Quantity</label>
                                     <input type="number"  className='cart_quantity' value={product.quantity} min="1" id={product.id} onChange={updateQuantity}/>
                                 </div>
                                 <div className="delete">
                                     <button className="delete_btn btn" id={product.id} onClick={deletingProduct}>Delete</button>
                                 </div>
                             </div>
                         </div>
            )): <><div>Your BAG is Empty</div>
                <img src="https://www.esgreen.com/images/page_img/empty-shopping-cart-002_2x.png" alt="" className='cart_image_empty' /></>
            }
                     </div>
                 </div>
            <div className='summary'>
                <h1 className="summary_title">Summary</h1>
                <div className="subtotal">
                 <p className="subtotal_title">Subtotal</p>
                 <p className="subtotal_Price">$ {(Number(totalMoney)).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
                <div className="delivery">
                    <p className="delivery_title">Estimated Delivery Price</p>
                    <p className="delivery_Price">$100</p>
                </div>
                <div className="total">
                    <p className="total_title">Total</p>
                    <p className="total_Price">$ {(Number(total)).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                </div>
                <button className='checkOut_btn btn'>CHECKOUT</button>
            </div>
        </div>
    )
}
export default Cart
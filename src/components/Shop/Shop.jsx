import React,{createContext,useState} from 'react';
import Filter from './Filter/Filter';
import ShoppingProduct from './ShoppingProduct';
import './Shop.css'
import { useParams } from 'react-router-dom';

   
export const FilterProvider = createContext();
let mySet = new Set([]);

const Shop = () => {
const [filterArrays,setFilterArrays] = useState([]);
    
    const {category} = useParams();
    return (
        <FilterProvider.Provider value={{filterArrays,setFilterArrays,mySet,category}}>
            <div className='shop'>
                <div className='filters_shop'>
                    <Filter />
                </div>
                <div className='products_shop'>
                    <h1 className='shop_title'>{category}</h1>
                    <ShoppingProduct category={category}/>
                </div>
            </div>
        </FilterProvider.Provider>
    )
}

export default Shop
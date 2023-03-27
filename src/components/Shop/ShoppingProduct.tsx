import React, { useState, useEffect, useContext } from 'react'
import './ShoppingProduct.css'
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase/index'
import { useNavigate } from 'react-router-dom';
import { FilterProvider } from './Shop'


function ShoppingProduct({ category }: any) {
  const [data, setData] = useState<any[]>([])
  const [filterData, setFilterData] = useState<any[]>([])

  const { filterArrays, setFilterArrays } = useContext(FilterProvider)


  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'AllProducts');
    onValue(dbRef, (snapshot) => {
      let newData = snapshot.val();
      setData(newData);
      if (category !== 'AllProducts') {
        newData = newData.filter((product: any) => product.mainCategory.includes(category))

        setFilterData(newData)
      } else {
        setFilterData(newData)
      }
    });
  }, [category]);

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    console.log(filterArrays);

  }, [filterArrays])


  const filterFunction = () => {

    let filteredProduts = data
    if (filterArrays.length === 0) {
      setFilterData(data);
    } else {
      const sizeFilters = filterArrays.filter((filter: any) => filter.length <= 3 && !filter.includes('-'));
      console.log("sizeFilters", sizeFilters)

      if (sizeFilters && sizeFilters.length > 0) {
        filteredProduts = filteredProduts.filter((filter: any) => {
          return sizeFilters.some((size: any) => {
            return filter.sizes.includes(size)
          })
        })
      }

      const priceFilters = filterArrays.filter((filter: any) => filter.length > 3 && filter.includes('$'))
      console.log("priceFilters", priceFilters)

      if (priceFilters && priceFilters.length > 0) {
        filteredProduts = filteredProduts.filter(product => {
          return priceFilters.some((range: any) => {
            const [minPrice, maxPrice] = range.split("-").map((price: any) => parseFloat(price.replace("$", "")));
            console.log(minPrice, maxPrice);

            return Number(product.price) >= minPrice && Number(product.price) <= maxPrice
          })
        })
      }

      const ratingFilter = filterArrays.filter((filter: any) => filter.length === 3 && filter.includes('-'))
      console.log("ratingFilter", ratingFilter)
      if (ratingFilter && ratingFilter.length > 0) {
        filteredProduts = filteredProduts.filter(product => {
          return ratingFilter.some((range: any) => {
            const [minRate, maxRate] = range.split("-")
            return parseFloat(product.rating) >= Number(minRate) && Number(product.rating) <= parseFloat(maxRate)
          })
        })
      }
      setFilterData(filteredProduts)
      console.log("filteredproducts", filteredProduts);


    }
  }

  useEffect(() => {
    filterFunction();
  }, [filterArrays])
  const navigate = useNavigate();

  const navigationHandler = (cardData: any) => {
    navigate(`/productDetail/${cardData.id}`, { state: { cardData } })
  }
  return (
    <div className='card_wrapper'>
      {filterData && filterData.map((product) => (
        <div className='card' onClick={() => navigationHandler(product)}>
          <div className='card_shop_image'>
            <img src={product.images[0]} alt='' className='shop_image' />
          </div>
          <div className='card_shop_info'>
            <h3 className='card-shop_title'>{product.title}</h3>
            <p className='card-shop_type'>{product.type}</p>
            <h3 className='card-shop_price'>MRP: ${Number(product.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShoppingProduct
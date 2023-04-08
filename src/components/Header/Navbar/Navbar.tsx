import React, {useEffect, useRef, useState} from 'react'
import Contents from './Contents';
import './Navbar.css';
import LOGO from './LOGO.png';
import Icons from './Icons'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase'

const app = initializeApp(firebaseConfig);


function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchBar, openSearchBar] = useState(false);
  const [data,setData] = useState([])
  const [searchQuery,setSearchQuery] = useState('')
  const [typing,setTyping] = useState(true)
  const [filterData,setFilterData] = useState([])

  const sidebarHandler = () => {
    setOpenSidebar(!openSidebar)
  }
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.querySelector('.open_sidebar');
      const searchbar = document.querySelector('.search_div');
      if (openSidebar && sidebar && !sidebar.contains(event.target as Node)) {
        setOpenSidebar(false);
      }
      if (searchBar && searchbar && !searchbar.contains(event.target as Node)) {
        openSearchBar(false);
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [openSidebar,searchBar]);
  const searchBarHandler = () => {
    openSearchBar(true)
  }

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, 'AllProducts');
    onValue(dbRef, (snapshot) => {
      let newData = snapshot.val();
      setData(newData);
    });
  
  }, []);



  const searching = (e:any) => {
    setSearchQuery(e.target.value)
    setTyping(false);
    const searchedData = data.filter((product:any)=> product.title.toLowerCase().includes(e.target.value.toLowerCase()));
    if(e.target.value === ''){
      setTyping(true);
      setFilterData([]);
    }else{
      setFilterData(searchedData);

    }
  }
  const navigate = useNavigate();

  const navigationHandler = (cardData: any) => {
    navigate(`/productDetail/${cardData.id}`, { state: { cardData } })
  }
  return (
    <div className='main_navbar'>
      {/* <div className='second_navbar'> */}
        <div className='main_sidebar'>
          <div className='menu_btn' onClick={sidebarHandler}>
              <MenuIcon />
          </div>
            <div className={`open_sidebar ${openSidebar ? 'active' : ''}`}>
              <div className='close_btn' onClick={sidebarHandler}>
                <CloseIcon />
              </div>
              <div className="sidebar_contents">
                <Contents />
              </div>
            </div>
          {openSidebar && 
            <div className='sidebar_open_underlay'></div>
          }
        </div>
        <div className='fav_icon'>
            <FavoriteTwoToneIcon />
        </div>
        <div className='div_logo'>
          <img src={LOGO} alt='logo' className='logo'/>
        </div>
        <div className='content'>
          <Contents />
        </div>
        <div className='icons'>
          <div className='search_main' onClick={searchBarHandler}>
            <input className='search_input' type='text' placeholder='Search Here' onChange={searching} />
            <div className='div_icon'>
              <SearchTwoToneIcon className='icon'/>
            </div>
            {
              searchBar &&
                <div className="search_div">
                  <input className='search_input new_input' type='text' placeholder='Search Here' onChange={searching} />
                  <h1>Your Search Results</h1>
                  {typing && <p>Please search your product</p>}
                  <div className="search_results">
                    {filterData && filterData.length>0 && filterData.map((product:any)=>(
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
                </div>
            }
          </div>
          <Icons />
        </div>
      {/* </div> */}
    </div>
  )
}

export default Navbar

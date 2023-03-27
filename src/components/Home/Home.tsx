import React from 'react'
import './Home.css'
import CommonSlider from './Slider/CommonSlider'

const Home = () => {

  return (
    <div className='home_main'>
      <div className="home_image">
        <img src='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1253,c_limit/ba743504-5a47-493e-a34b-e4a0b1981ec7/nike-just-do-it.jpg' alt='image' className='home_image' />
      </div>
      <div className='home_image_description'>
        <p>First Look</p>
        <h3>NIKE AIR MAX PULSE</h3>
        <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <p className='p2'>—designed to push you past your limits and help you go to the max.</p>
        <div className='btns'>
          <button className="notify btn">Notify Me</button>
          <button className="buy btn">Shop Air Max</button>
        </div>
      </div>
      <div className='home_trend_slider'>
        <CommonSlider 
          slides={[3.2,3.2,2.8,2,1]}
          title="Best of Shoes"
          jsonName='TrendingShoes'
          />
      </div>
      <div className="home_image second_home_image">
        <h1>Featured</h1>
        <img src='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1268,c_limit/b5a680e2-c60c-47be-8766-900cd11cc8f4/nike-just-do-it.jpg' alt='image' className='home_image' />
      </div>
      <div className='home_image_description'>
        <h3>STEP INTO WHAT FEELS GOOD</h3>
        <p>Cause everyone should that feeling of runnig in perfect pair.</p>
        <button className="notify btn">Shop Running Shoes</button>
      </div>
      <div className='slider_categories'>
        <div className='mens_slider'>
          <CommonSlider 
            slides={[1.6,1.6,1.4,1.1,1.1]}
            title="Best of Mens"
            jsonName='TrendingMens'
            />
        </div>
        <div className='womens_slider'>
          <CommonSlider 
            slides={[1.6,1.6,1.4,1.1,1.1]}
            title="Best of Womens"
            jsonName='TrendingWomens'
            />
        </div>
        </div>
        <div className="shopping_categories">
          <h1>The Essentials</h1>
          <div className="mens_cat">
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png" alt="" className='image_cat'/>
            <button className='cat_shop_btn'>Mens</button>
          </div>
          <div className="womens_cat">
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png" alt="" className='image_cat'/>
            <button className='cat_shop_btn'>Womens</button>
          </div>
          <div className="kids_cat">
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png" alt="" className='image_cat'/>
            <button className='cat_shop_btn'>Kids</button>
          </div>
      </div>
    </div>
  )
}

export default Home
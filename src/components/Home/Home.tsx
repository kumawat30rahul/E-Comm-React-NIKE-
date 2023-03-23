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
        <button className="notify btn">Notify Me</button>
        <button className="buy btn">Shop Air Max</button>
      </div>
      <div className='home_trend_slider'>
        <CommonSlider 
          slides={[3.2,3.2,2.8,2,1]}
          title="Best of Shoes"
          jsonName='TrendingShoes'
          />
      </div>
      <div className='slider_categories'>
        <div className='mens_slider'>
          <CommonSlider 
            slides={[1.1,1.1,1.1,1.1,1.1]}
            title="Best of Mens"
            jsonName='TrendingMens'
            />
        </div>
        <div className='womens_slider'>
          <CommonSlider 
            slides={[1.1,1.1,1.1,1.1,1.1]}
            title="Best of Womens"
            jsonName='TrendingMens'
            />
        </div>
      </div>
    </div>
  )
}

export default Home
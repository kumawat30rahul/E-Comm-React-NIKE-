import React,{useEffect} from 'react'
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
        <p>—designed to push you past your limits and help you go to the max.</p>
        <button className="notify btn">Notify Me</button>
        <button className="buy btn">Shop Air Max</button>
      </div>
      <div className='home_trend_slider'>
        <CommonSlider />
      </div>
    </div>
  )
}

export default Home
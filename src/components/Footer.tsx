import React from 'react';
import '../Css/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import NewsLetterSingUp from './NewsLetterSingUp';

function Footer(){
    return(
        <div className='footer_main'>
            <div className='footer_top'>
            <div className='container'>
                <h1 className='title'><em>ABOUT</em></h1>
                <p>Contact Us</p>
                <p>Our Goal</p>
                <p>Wholesale</p>
                <p>Our Stories</p>
            </div>
            <div className='container'>
                <h1 className='title'><em>SUPPORT</em></h1>
                <p>Payments</p>
                <p>Return and Exchange</p>
                <p>Shipping</p>
                <p>Cancellation</p>
                <p>Order Tracker</p>
                <p>FAQ</p>
            </div>
            <div className='container'>
                <h1 className='title'><em>POLICY</em></h1>
                <p>Privacy Policy</p>
                <p>Return and Exchange Policy</p>
                <p>Terms and condition</p>
                <p>Security</p>
                <p>Order Tracker</p>
            </div>
            <div className='container'>
                <h1 className='title'><em>SPORTS</em></h1>
                <p>Cricket</p>
                <p>Football</p>
                <p>Basketball</p>
                <p>Badminton</p>
                <p>Tennis</p>
                <p>Athletics</p>
                <p>Swimming</p>
                <p>Motorsports</p>
            </div>
            <div className='container_socials'>
                <h1 className='title'><em>SOCIALS</em></h1>
                <div className='icons_main'>
                    <InstagramIcon className='icons' />
                    <YouTubeIcon className='icons' />
                    <FacebookIcon className='icons' />
                    <PinterestIcon className='icons' />
                    <TwitterIcon className='icons' />
                    <TelegramIcon className='icons' />
                </div>
                <div className='sing_up_form' >
                    <NewsLetterSingUp />
                </div>
            </div>
            </div>
            <div className='footer_bottom'>
                <div className='copyright'>
                    <p>© 2022 Sports Store Copyright</p>
                </div>
                <div className='visa'>

                </div>

            </div>
            
        </div>
    )
}

export default Footer;
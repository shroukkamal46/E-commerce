import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Navigation, pagination} from "swiper";
import 'swiper/css/navigation';
// import '../jsx/swiper';
import { SliderContent} from "./SliderContent";
import './SliderStyle.css'
import BtnSlider from "./swiper"
import img14 from "../Images/21hBQZv6jML._AC_SY580_.jpg"
import img15 from "../Images/31ZoojC7vpS._AC_SY580_.jpg";
import img30 from "../Images/preview_men_hoodie_front-1.png";
import LatestProducts from '../LatestProducts';
import Recent from "./Recent";


export default function Homepage() {
    return <>
        <div className='container bg-white ma-55'>
            <h1></h1>
            <div className="post-pox">
                <div className='bg-left'></div>
                <div className='bg-right'></div>
<div className='post-heading' >
<div className='heading-box'>
 
    <div className='pagination-slide'>
        <p className='swiper-pagination'></p>
        <div className='bs-icons'> 
        <IoIosArrowBack className="Arrow" />
        < IoIosArrowForward className="Arrow"/>
        </div>
    </div>
</div>
</div>
<div className="post-contain">
  <SwiperSlide>
  <SliderContent/>
  </SwiperSlide>
  
</div>
            </div>

        </div>
        <div className="card-container w-30 d-flex ma-10 m-3 h-90 ">
            <div className="card d-flex cart-1">
                
                <h1>Luxurious Te-shirt</h1>
                <p className="card-text">See the beauty of exotic world with the luxurious te-shirt</p>
                <p>Discover Now</p>
                <p className='line4'></p>
                <img className='card-img-left w-50 img-fluid-1' src={img15} alt="Card image" ></img>
            </div>


            <div className="card-container w-30 ma-10 m-3 h-90">
                <div className="card d-flex">
                <h1>Luxurious Te-shirt</h1>
                    <p className="card-text">Feels the balancing function and beauty in our wooden watches</p>
                    <p>Discover Now</p>
                    <p className='line3'></p>
                    <img className='card-img-down w-50 img-fluid-2' src={img30} alt="Card image" ></img>
                </div>
            </div>
       <LatestProducts/>
       
     

       
           
        </div>




    </>

}
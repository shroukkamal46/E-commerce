import React from "react";
import { useSwiper } from "swiper/react";
export default function BtnSlider(){
let swiper = useSwiper()
    return <>
    <div className="section-header">
        <div className="section-header__body align-items-center">
            <h2 className="section-header__title">
            
            </h2>
            <div className="section-header__arrows">
               
               <div className="arrow section-header__arrow section-header__arrow--prev arrow--prev" onClick={()=>swiper.slidePrev()}>
<button className="arrow__button" type="button">
    <svg viewBox="0 0 7 11" width={7} height={11}>
    <path 
         d="M6 0.22287672,94.082764 c 0,0 17.63282128,-34.831303 110.42670328,-36.348656 63.66595,-1.041057 101.55017,-59.333835 101.55017,-59.333835 L 211.66521,298.51041 H 0.75741577 Z"/>
    </svg>
</button>
               </div>
<div className="arrow section-header__arrow section-header__arrow--next arrow--next" onClick={()=>swiper.slideNext()}>

<button className="arrow__button" type="button">
    <svg viewBox="0 0 7 11" width={7} height={11}>
        <path
    
  
      ></path>
    </svg>
</button>

</div>
            </div>
        </div>
        
    </div>

    </>
}
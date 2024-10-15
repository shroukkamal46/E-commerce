import React from "react";
import img17 from "../Images/71dM9SwHZYL._AC_UL480_FMwebp_QL65_.webp";

import Testimonials from "./Testimonials"
import Categories from "../Categories";
export default function recentNews(){
    return<> <div className="contanier-fluid col-md-6">
          <div className="row">
            <div className="col-md-6 p-4">
            <h2>Recent News</h2>
            <p className="line5"></p>
          <p>Matoa Where To 
            <br></br>
          Travel? Yogyakarta</p>
          <button className="btn-5">Discover</button>
            
         
            </div>
            <div className="col-md-6">
            <img className="img-fluid " src={img17}></img> 
            </div>
          </div>
         
          </div>
         <Categories/>
         <Testimonials/>
   
    </>
}
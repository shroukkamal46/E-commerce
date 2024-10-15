import React from "react";
import "./Navbar.css";
import img11 from '../Images/image 5.png';
import img14 from "../Images/search.png";
import img15 from "../Images/user.png"
import img30 from "../Images/cart.png"
import { IoBagOutline } from "react-icons/io5";
export default function Navbar(){
    return<> 
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
  <img src={img11}></img>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav1"  id="nav"> 
  
        <a className="nav-link active " aria-current="page">electronics</a>
        <a className="nav-link " to="">Jewelery</a>
        <a className="nav-link F\" to=""> Men</a>
        <a className="nav-link" to="">Women's clothing</a>


         
    
     
       
        
     
     
      <h1 className="text1"> Log In</h1>
      
      <img src={img14}></img>
     
      <img src={img15}></img>
      <IoBagOutline className="nav-icon"/>
      </div>
           </div>
   </div>
</nav>



    </>
}
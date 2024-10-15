import React from "react";
import img1 from '../Images/image 25.png';
import img2 from '../Images/image 26.png';
import img3 from '../Images/image 27.png';
import img4 from '../Images/image 28.png';
import img5 from '../Images/image 29.png';
import img6 from '../Images/image 32.png';
import img7 from '../Images/image 33.png';
import img8 from '../Images/image 34.png';
import img9 from '../Images/image 35.png';
import img10 from '../Images/image 36.png';
import img11 from '../Images/image 5.png';
import img12 from '../Images/Line 17.png';
import img36 from "../Images/Facebook.png";
import img35 from "../Images/Instagram.png";
import img37 from "../Images/Twitter.png";
import img38 from "../Images/Youtube.png"
 export default function Footer(){
    return <> 
      
      <div className="container-1">
  <div className="row flex justify-content-around">
    <div className="photo-1 ">
    <img src={img1}  className="px-5 col"></img>
     <img src={img2}  className="px-5 col"></img>
     <img src={img3} className="px-5 col"></img>
     <img src={img4} className="px-5 col"></img>
     <img src={img5} className="px-5 col"></img>
    
    <div className="row">
        <div className="photo-2 col">
    <img src={img6} className="px-5 col"></img>
    <img src={img7}  className="px-5 col"></img>
    <img src={img8} className="px-5 col"></img>
    <img src={img9} className="px-5 col"></img>
    <img src={img10} className="px-5 col"></img>
    </div>
    </div>

    </div>
  


  </div>
</div>

<div className="main-footer ">
    <div className="container2">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <img src={img11}></img>
                <p className="text-white ma-5">Address</p>
                <p>Store & Office
                  <br></br>
                Jl. Setrasari Kulon III, No. 10-12, 
                <br></br>
                Sukarasa, Sukasari,Bandung,
                <br></br>
                 Jawa Barat, Indonesia 40152
                <br></br>
                </p>
               <h2>Office Hour</h2>
               <p>Monday - Sunday
                <br></br>
                10.00 - 18.00</p>

            </div>
            <div className="col-md-3 col-sm-6">
                <h1 className="text-white ">Get in touch</h1>
                <img src={img12}></img>
              <div className="d-flex p-6">
              <div>
                <h5>Phone</h5>
               <h5>Service
                <br></br>
                 Center</h5>
               <p>Customer
                <br></br> 
                Service</p>
                </div >
                <div className="px-5">
                    <p>022-20277564</p>
                    <p>0811-233-8899</p>
                    <p>0811-235-9988</p>
                 
                </div>
               
              </div>
              <img src={img36} className="px-3 col "></img>
                    <img src={img35} className="px-3 col "></img>
                    <img src={img37} className="px-3 col "></img>
                    <img src={img38}  className="px-3 col"></img>
            </div>
            <div className="col-md-3 col-sm-6 ">
            <h1  className="text-white">Useful Link</h1>
                <img src={img12}></img>
                <p>Warranty & Complaints
                  <br></br>
                   Order & Shipping
                   <br></br>
                 Tracking Order
                 <br></br>
About Us
<br></br>
Repair
<br></br>
Terms
<br></br>
FAQ</p>
         
            </div>
            <div className="col-md-3 col-sm-6">
               <h1  className="text-white">Campaign</h1>
               <img src={img12}></img>
                <p>Mengenal Arti Cukup
                  <br></br>
Tell Your Difference
<br></br>
Waykambas
<br></br>
Rebrand
<br></br>
Gallery
<br></br>
Singo
<br></br>
Rakai</p>
               
            </div>
        </div>
    </div>   
    </div>
    </>

}
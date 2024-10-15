import React from "react";
import img19 from "../Images/right.png";
import img20 from "../Images/left.png";
import img21 from "../Images/61j11zYzopL._AC_SL1500_.jpg"
export default function Test() {
  return <> <div className="contanier-fluid col-md-6 p-5 ma-5">
    <div className="row">
      <div className="col-md-6">
        <h2></h2>

        <img src={img21} className="w-100"></img>
        <img src={img20}></img>
        <img src={img19}></img>


      </div>
      <div className="col-md-6">
        <h1>Testimonials</h1>
        <p className="line5"></p>
        <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
        <p>Gita Savitri</p>
        <h6>Content Creator/Influencer</h6>
      </div>
    </div>

  </div>



  </>
}
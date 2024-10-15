import img13 from "../Images/21hBQZv6jML._AC_SY580_.jpg";
import img31 from "../Images/Page 1.png"
import { CiShoppingCart } from "react-icons/ci";
export function SliderContent(){
    return <> <div className="post-card">
        <div className="row">
            <div className="col-md-6">
            <img src={img13} alt="" className="w-50"></img>
            
          
                <div className="text"></div>
            </div>
            <div className="body col-md-6">
            <h6 className="title">WAY KAMBAS
            MINI EBONY</h6>
            <p className="line-10"></p>
            <p>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
           <p>Discover</p>
           <p className="line-10"></p>
          <CiShoppingCart /> <button className="btn-4" >Add to cart</button>  <img src={img31} className="img31"></img>
            </div>
        </div>
   
        </div>
    
    
    
    
    
    </>
}
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Counter from "./counter";
export default function Cart() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // جلب بيانات المنتج باستخدام `productId`
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product.");
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // عرض رسالة في حالة وجود خطأ
  if (error) {
    return <div>{error}</div>;
  }

  // عرض رسالة تحميل في حال لم يتم جلب المنتج بعد
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <p>{product.title}</p>
      <img className='productDetails-img' src={product.image} alt={product.title} />
      <p>Price: {product.price} EGP</p>
      <button className="add-to-Cart" onclick={()=>addToCart(product,Counter)}>Add to Cart</button>
      <img></img>
      <Counter />
      <div className="contanier">
  <div className="row">
    <div className="col-md-2 text-1">
<h3>Detail</h3>
<p>Material</p>
<p className="text-10">MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
  <p>Case</p>
  <p>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>
<p>Movement</p>
<p>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</p>
   <p>Dial</p>
   <p>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</p>
   <p>Hand</p>
   <p>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>
    <p>Important to Note</p>
    <p>Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</p>
    </div>
    <div className="col-md-2">
      <h3>Warranty</h3>
    </div>
    <div className="col-2">
<h3>Custom Engrave</h3>
    </div>
    <div className="col-md-2">
      <h3>How to Adjust</h3>

    </div>
    <div className="col-md-2">
<h3>How to Care</h3>
    </div>
    <div className="col-md-2">
      <h3>Gallery</h3>
    </div>
  {/* <hr></hr> */}
  </div>
</div>
    </div>



  );

}


import { useEffect, useState } from "react";
import axios from "axios";
import img18 from "../Components/Images/love (1).png";
import Recent from "./Pages/Recent";

import { Link, useNavigate } from "react-router-dom";

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function getProductsData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب بيانات المنتجات:", error);
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  const dataFilter = [1, 3, 14, 7];

  const handleAddToCartClick = (productId) => {
    navigate(`/cart/${productId}`); // انتقل إلى صفحة /cart باستخدام useNavigate
  };
  return (
    <div className="container bg-white p-4">
      <div className="row">
        <h1>Latest Products</h1>
        <p className="line10"></p>
        {products
          .filter((product) => dataFilter.includes(product.id))
          .map((product) => (
            <div key={product.id} className="col-md-3 card">
              <Link to={`/details/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-100 image" />
                <p>{product.name}</p>
                <h4>{product.title.split(" ").splice(0, 2).join(" ")}</h4>
                <p>20% Off</p>
                <p>{product.price} EGP</p>
                <img src={img18} className="product-image" alt="icon" />
              </Link>
              <button
                className="add-to-Cart"
                onClick={() => handleAddToCartClick(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
     <Recent/>
     
    </div>
   
  );
}

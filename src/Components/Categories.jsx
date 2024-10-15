import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]); // تهيئة الحالة كمصفوفة فارغة
  const [products, setProducts] = useState([]); // لتخزين المنتجات
  async function getCategoryAndProductData() {
    try {
      // جلب الفئات
      const categoryResponse = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(categoryResponse.data);
      
      // جلب المنتجات
      const productResponse = await axios.get("https://fakestoreapi.com/products?limit=5");
      setProducts(productResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getCategoryAndProductData();
  }, []);

  // تقسيم الفئات إلى 3 أجزاء
  const part1 = categories.slice(1, Math.ceil(categories.length / 3));
  const part2 = categories.slice(Math.ceil(categories.length / 3), Math.ceil(2 * categories.length / 3));
  const part3 = categories.slice(Math.ceil(2 * categories.length / 3));


  return (
    <div className=" ">
      <ul className="d-flex category-2">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      
      <div className="col-md-3">
  
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} className="w-100" />
            <p>{product.title}</p>
      
            <p>{product.price} EGP</p>
          </div>
        ))}

      </div>
         
    </div>
  );
}

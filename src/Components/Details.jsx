
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const product = location.state?.product; // استخدام ?. لتجنب الخطأ إذا لم يكن هناك product

  if (!product) {
    return;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price} EGP</p>
    </div>
  );
}
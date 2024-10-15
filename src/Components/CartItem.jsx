import React, { useState } from "react";

function CartItem({ product, onUpdateQuantity, onRemove }) {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    onUpdateQuantity(product.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="details">
        <p>{product.name}</p>
        <p>Rp {product.price}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <p>Total: Rp {product.price * quantity}</p>
      </div>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
}

export default CartItem;

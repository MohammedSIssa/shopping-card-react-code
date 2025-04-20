import { useState } from "react";

import "./styles/cart-item.css";

function CartItem({ data, setCart }) {
  const [count, setCount] = useState(1);
  const { title, price, image } = data;

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-name">
          <h2>{title.split(" ").splice(0, 4).join(" ")}</h2>
        </div>
        <div className="product-price">${price}</div>
      </div>
      <div className="cart-item-count">
        <button
          onClick={() => {
            setCount((count) => (count > 1 ? count - 1 : 1));
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="delete"
        onClick={() => setCart((prev) => prev.filter((item) => item !== data))}
      >
        x
      </button>
    </div>
  );
}

export default CartItem;

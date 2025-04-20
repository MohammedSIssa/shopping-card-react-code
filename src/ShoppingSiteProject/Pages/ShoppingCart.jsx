import CartItem from "../components/CartItem";
import "../components/styles/cart.css";

function ShoppingCart({ items, setCart }) {
  if (items.length === 0) return <p>Empty Cart.</p>;
  return (
    <div className="cart">
      {items.map((item) => (
        <CartItem key={item.title} data={item} setCart={setCart} />
      ))}
    </div>
  );
}
// TODO: [x] Make a CartItem component that will have a state for count.

export default ShoppingCart;

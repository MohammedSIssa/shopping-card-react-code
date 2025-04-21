import "./styles/product.css";
import { Star } from "lucide-react";

function Product({ data, onAddToCart, cart }) {
  const productName = data.title;
  const productImg = data.image;
  const productRating = data.rating.rate;
  const productRatingsCount = data.rating.count;
  const productCategory = data.category;
  const productDesc = data.description;
  const productPrice = data.price;
  return (
    <div className="product">
      <div className="product-img">
        <img src={productImg} alt={productName} />
      </div>
      <div className="product-name" title={productName}>
        <h2>{productName.split(" ").splice(0, 3).join(" ")}</h2>
      </div>
      <div className="product-rating">
        <Star size={20} fill="gold" strokeWidth={0} />{" "}
        {productRating} ({productRatingsCount})
      </div>
      <div className="product-category">{productCategory}</div>
      <div className="product-desc" title={productDesc}>
        {productDesc.split(" ").splice(0, 15).join(" ")}
        {"..."}
      </div>
      <div className="product-price">
        <h1>${productPrice}</h1>
      </div>
      <button className="add-to-cart" onClick={() => {if(!cart.includes(data)) {onAddToCart(data)}}}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;

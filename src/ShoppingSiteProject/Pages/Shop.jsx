import { useEffect, useState } from "react";
import fetchData from "../components/Services/api";
import Product from "../components/Product";

import "../components/styles/shop.css";

function Shop({ onAddToCart, data, setData, cart }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!data) {
      try {
        fetchData("https://fakestoreapi.com/products").then((data) =>
          setData(data)
        );
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [data, setData]);

  if (isLoading && !data) return <div>Loading..</div>;
  if (error) return <div>An Error was encoutered</div>;

  return (
    <div className="shopping-page">
      {data &&
        data.map((dataItem) => (
          <Product
            key={dataItem.id}
            data={dataItem}
            onAddToCart={onAddToCart}
            id={dataItem.id}
            cart={cart}
          />
        ))}
    </div>
  );
}

// TODO: [x] Instead of rendering a div here, render a Product Component, that will have the event handler for clicking
// and adding to the ShoppingCart list

export default Shop;

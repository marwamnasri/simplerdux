// Product.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default Product;

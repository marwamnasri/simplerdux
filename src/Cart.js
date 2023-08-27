// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./store";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => dispatch(removeFromCart(product))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

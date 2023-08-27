import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';

function CartComponent() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleIncreaseQuantity = (itemId) => {
    // Logic to increase quantity of an item in the cart
  };

  const handleDecreaseQuantity = (itemId) => {
    // Logic to decrease quantity of an item in the cart
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} (Qty: {item.quantity})
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ id: 1, name: 'Product 1', price: 10, quantity: 1 })}>
        Add Product 1
      </button>
      <button onClick={() => handleAddItem({ id: 2, name: 'Product 2', price: 20, quantity: 1 })}>
        Add Product 2
      </button>
    </div>
  );
}

export default CartComponent;


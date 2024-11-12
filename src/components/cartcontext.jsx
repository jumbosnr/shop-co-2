import React, { useState } from 'react';

function Cart() {
  // Initialize cart with an example item (could be empty to start with)
  const [cart, setCart] = useState([]);

  // Sample items that could be added to the cart
  const sampleItems = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ];

  // Function to add an item to the cart or increase quantity if it already exists
  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Increase quantity if item is already in the cart
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add item to cart with quantity 1 if it's not in the cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to increase item quantity in the cart
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease item quantity in the cart
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes zero
    );
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {/* Display available items to add to cart */}
      <div className="sample-items">
        <h3>Products:</h3>
        {sampleItems.map((item) => (
          <button key={item.id} onClick={() => addItemToCart(item)}>
            Add {item.name} - ${item.price}
          </button>
        ))}
      </div>

      {/* Display items in the cart */}
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Display total items in the cart */}
      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>
      </div>
    </div>
  );
}

export default Cart;

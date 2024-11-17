import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Calculate total price
  const calculateTotal = (items) => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  // Quantity change handler
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: Math.max(newQuantity, 1) } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  // Item removal handler
  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  // Recalculate total on mount and on `cartItems` change
  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems]);

  return (
    <section className="shopping-cart px-12 py-14">
      <div className="container mx-auto max-w-6xl">
        <a href="/" className="text-gray-500">
          Home <span><i className="bi bi-chevron-right"></i></span>
        </a>
        <h2 className="font-bold text-4xl text-black py-4 mb-4">YOUR CART</h2>
        <div className="grid grid-cols-[60%_40%] gap-5">
          <div className="left rounded-lg border py-6">
            {cartItems.map((item) => (
              <div key={item.id} className="item px-5 py-6 border-b-2 grid grid-cols-2 justify-items-end">
                <div className="product-details flex gap-2">
                  <img src={item.image} alt={item.name} className="w-28 h-28 object-contain object-center" />
                  <div className="details">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <ul className="text-sm">
                      <li>Size: <span className="text-gray-500">{item.size}</span></li>
                      <li>Color: <span className="text-gray-500">{item.color}</span></li>
                    </ul>
                    <h4 className="text-xl font-bold">${item.price}</h4>
                  </div>
                </div>
                <div className="product-functions h-full flex flex-col justify-between items-end max-w-max justify-self-cst">
                  <button onClick={() => handleRemoveItem(item.id)} className="text-lg text-red-500">
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                  <div className="qt bg-gray-200 text-lg px-5 py-2 flex items-center gap-1 rounded-3xl">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="subtract">
                      <i className="bi bi-dash"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="add">
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary rounded-lg border px-10">
            <h3 className="font-bold text-xl py-4 text-black">Order Summary</h3>
            <div className="sub-total flex justify-between text-xl mb-10 text-gray-500 py-2">
              <p>Subtotal</p>
              <span className="font-bold text-black">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate('/payment-page')}
              className="text-white rounded-full bg-black py-4 px-12 w-full"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;

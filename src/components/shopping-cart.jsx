import React, { useState } from 'react';


function ShoppingCart() {
  const [items, setItems] = useState([
    // Replace with actual item data
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      quantity: 1,
      image: 'path/to/image.jpg',
      size: 'Large',
      color: 'White',
    },
    // Add more items here
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [total, setTotal] = useState(0);

  // Calculate total and update state
  const calculateTotal = () => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  // Handle quantity changes
  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
    calculateTotal();
  };

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    calculateTotal();
  };

  // Handle promo code application
  const handlePromoCodeApply = () => {
    // Implement your promo code logic here
    // For example, you might apply a discount to the total
    calculateTotal();
  };

  return (
    <section className="shopping-cart px-12 py-14">

      <div className="nav mx-auto max-w-6xl px-12">
        <div className="container mx-auto">
          <div className="cart-items flex gap-5 text-xs">
            <a href="#" className="text-gray-500">
              Home <span> <i className="bi bi-chevron-right"></i></span>
            </a>
            <a href="#">Cart</a>
          </div>
          <h2 className="font-bold text-4xl text-black py-4 mb-4">YOUR CART</h2>
        </div>
      </div>


      <div className="container grid grid-cols-[60%_40%] gap-5 mx-auto max-w-6xl">

        <div className="left rounded-lg border py-6">
          
          <div className="item item-1 px-5 py-6 border-b-2 grid grid-cols-2 justify-items-end  max-auto-cst  ">
            <div className="product-details flex  border-2 gzp-2">
              <div className="img border-2 ">
                <img src="#" alt="Gradient Graphic T-shirt" className="w-28 h-28 bg-gray-200" />
              </div>
              <div className="details flex flex-col justify-between ">
                <div className="top-cst">
                  <h4 className="item-name text-xl font-semibold">Gradient Graphic T-shirt</h4>
                  <ul className="item-spec text-sm">
                    <li>
                      Size: <span className="text-gray-500">Large</span>
                    </li>
                    <li>
                      Color: <span className="text-gray-500">White</span>
                    </li>
                  </ul>
                </div>
                <div className="bottom-cst text-xl font-bold">
                  <h4>$145</h4>
                </div>
              </div>
            </div>

            <div className="product-functions h-full flex flex-col justify-between items-end max-w-max justify-self-cst border-2 " >
                <a href="#" className="delete text-lg">
                  <i className="bi bi-trash3-fill text-red-500"></i>
                </a>
              <div className="qt bg-gray-200 text-lg px-5 py-4 flex items-center gap-1 rounded-3xl">
                <a href="#" className="subtract">
                  <i className="bi bi-dash"></i>
                </a>
                <span className="figure">1</span>
                <a href="#" className="add">
                  <i className="bi bi-plus-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="item item-2 px-5 py-6 border-b-2 grid grid-cols-2 justify-items-end max-auto-cst">
            <div className="product-details flex gap-2">
              <div className="img">
                <img src="#" alt="Checkered Shirt" className="w-28 h-28 bg-gray-200" />
              </div>
              <div className="details flex flex-col justify-between">
                <div className="top-cst">
                  <h4 className="item-name text-xl font-semibold">Checkered Shirt</h4>
                  <ul className="item-spec text-sm">
                    <li>
                      Size: <span className="text-gray-500">Medium</span>
                    </li>
                    <li>
                      Color: <span className="text-gray-500">Red</span>
                    </li>
                  </ul>
                </div>
                <div className="bottom-cst text-xl font-bold">
                  <h4>$180</h4>
                </div>
              </div>
            </div>
            <div className="product-functions h-full flex flex-col justify-between items-end max-w-max justify-self-cst">
              <a href="#" className="delete text-lg">
                <i className="bi bi-trash3-fill text-red-600"></i>
              </a>
              <div className="qt bg-gray-200 text-lg px-5 py-2 flex items-center gap-1 rounded-3xl">
                <a href="#" className="subtract">
                  <i className="bi bi-dash"></i>
                </a>
                <span className="figure">1</span>
                <a href="#" className="add">
                  <i className="bi bi-plus-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="item item-3 px-5 py-6 border-b-2 grid grid-cols-2 justify-items-end max-auto-cst border-none">
            <div className="product-details flex gap-2">
              <div className="img">
                <img src="#" alt="Skinny Fit Jeans" className="w-28 h-28 bg-gray-200" />
              </div>
              <div className="details flex flex-col justify-between">
                <div className="top-cst">
                  <h4 className="item-name text-xl font-semibold">Skinny Fit Jeans</h4>
                  <ul className="item-spec text-sm">
                    <li>
                      Size: <span className="text-gray-500">Large</span>
                    </li>
                    <li>
                      Color: <span className="text-gray-500">Blue</span>
                    </li>
                  </ul>
                </div>
                <div className="bottom-cst text-xl font-bold">
                  <h4>$240</h4>
                </div>
              </div>
            </div>
            <div className="product-functions h-full flex flex-col justify-between items-end max-w-max ">
              <a href="#" className="delete text-lg">
                <i className="bi bi-trash3-fill text-red-600"></i>
              </a>
              <div className="qt bg-gray-200 text-lg px-5 py-4 flex items-center gap-1 rounded-3xl">
                <a href="#" className="subtract">
                  <i className="bi bi-dash"></i>
                </a>
                <span className="figure">1</span>
                <a href="#" className="add">
                  <i className="bi bi-plus-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
 

        <div className="order-summary rounded-lg border w-50 px-10 h-[calc(100%-90px)]">
          <h3 className="font-bold text-xl py-4 text-black">Order Summary</h3>
          {/* ... order summary */}

          <div className="col-cst-1 mb-4">

            <div className="sub-total flex flex-row justify-between gap-20">
              <p className="text-xl text-gray-500 py-2">Subtotal</p>
              <span className="block font-bold text-black py-2">$565</span>
            </div>

            <div className="discount flex flex-row justify-between gap-20">
              <p className="text-xl text-gray-500 py-2">Discount (-20%)</p>
              <span className="block font-bold text-red-500 py-2">-$113</span>
            </div>

            <div className="delivery-fee flex flex-row justify-between  gap-20">
              <p className="text-xl text-gray-500 py-2 mb-4">Delivery Fee</p>
              <span className="block font-bold text-black py-2 mb-4">$15</span>
            </div>

            <div className="total flex flex-row justify-between">
              <p className="text-xl text-gray-500 py-4">Total</p>
              <span className="block font-bold text-black text-xl py-4">$467</span>
            </div>

          </div>

          <form action="" method="post" className="promo-code-form flex flex-row justify-between items-center mb-6">
            <div className="input px-8 flex items-center gap-2 text-base  bg-gray-200 rounded-full border-none">
              <span>
                <i className="bi bi-tag-fill text-xl text-gray-500"></i>
              </span>
              <input
                className="bg-transparent py-4 focus:border-none focus:outline-none outline-none"
                type="text"
                placeholder="Add promocode"
              />
            </div>

            <button type="submit" value="submit" className="px-10 py-4 text-white rounded-full bg-black">
              Apply
            </button>
            {/* ... promo code input and apply button */}

          </form>

          <form action="pages/checkout.jsx" method="post" className="w-full">
            <button
              type="submit"
              name="Checkout_btn"
              value="2"
              className="text-white rounded-full bg-black py-4 px-12 flex items-center place-content-center gap-1 w-full"
            >
              <span>Go to Checkout</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
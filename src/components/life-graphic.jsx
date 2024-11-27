import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Assuming a CartContext exists

function LifeGraphic() {
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(''); // Default size
  const { addToCart } = useContext(CartContext); // Access the addToCart function

  // Extract URL parameters
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const title = queryParams.get('title');
  const image = queryParams.get('image');
  const price = parseFloat(queryParams.get('price'));

  // Redirect to homepage if any parameter is missing
  useEffect(() => {
    if (!id || !title || !image || !price) {
      navigate('/');
    }
  }, [id, title, image, price, navigate]);

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const productDetails = {
      id,
      title,
      image,
      price,
      size: selectedSize,
      quantity,
    };
    // console.log('Adding to cart:', productDetails); // Check if this is printed
    addToCart(productDetails);
    navigate('/shopping-cart'); // Redirect to the cart page after adding to cart
  };

  return (
    <section className="life-graphic">
      <div className="container max-w-6xl w-max mx-auto grid grid-cols-2 gap-5 py-14 px-12">
        <div className="left grid grid-cols-[max-content_auto] mt-4 gap-4">
          <div className="col-1 grid grid-rows-3 ">
            <a href="#" className="">
              <img src={image} alt="" className="w-20 h-30 mb-4 border-2 "/>
            </a>
            <a href="#" className="">
              <img src={image} alt="" className="w-20 h-30 mb-4 border-2 "/>
            </a>
            <a href="#" className="">
              <img src={image} alt="" className="w-20 h-30 mb-4 border-2"/>
            </a>
          </div>
          <div className="col-2 w-90 object-cover object-center">
            <img src={image} alt="Product" className="border-2 border-gray-200 px-2 py-2 " />
          </div>
        </div>

        <div className="right">
          <h2 className="font-bold text-4xl text-black py-2">{title}</h2>
          <div className="icons py-4">
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
          </div>
          <div className="d-price flex flex-row gap-2 py-4">
            <h5 className="text-xl font-bold text-black">${(price * 0.9).toFixed(2)}</h5>
            <span className="text-xl font-bold text-gray-500"><del>$300</del></span>
            <span className="per bg-[#FF33331A] text-xs text-red-500 font-light rounded-full pt-1 pr-2 pb-1 pl-2 text-center">-%10</span>
          </div>
          <p className="text-lg font-normal text-gray-500 py-2">
            This product is perfect for any occasion. 
          </p>
          <hr />
          <div className="size py-4">
            <p className="py-2 text-gray-600">Choose Size</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleSizeSelection('Small')} 
                className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 text-center 
                ${selectedSize === 'Small' ? 'bg-red-700 text-white' : '' }`}
              >
                Small
              </button>

              <button 
                onClick={() => handleSizeSelection('Medium')} 
                className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                ${selectedSize === 'Medium' ? 'bg-red-700 text-white' : '' }`}
              >
                Medium
              </button>

              <button 
                onClick={() => handleSizeSelection('Large')} 
                className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                ${selectedSize === 'Large' ? 'bg-red-700 text-white' : '' }`}
                >
                  Large
              </button>

              <button 
                onClick={() => handleSizeSelection('X-Large')} 
                className={`size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center 
                ${selectedSize === 'X-Large' ? 'bg-red-700 text-white' : ''}`}
                >
                  X-Large
              </button>
            </div>
          </div>
          <hr />
          <div className="add-btn grid grid-cols-[max-content_auto] gap-4 py-4 mb-6">
            <div className="qt bg-gray-200 text-base flex items-center rounded-full w-max">
              <button onClick={() => handleQuantityChange(quantity - 1)} className="subtract">
                <i className="bi bi-dash w-9 grid place-content-center"></i>
              </button>
              <span className="figure w-9 grid place-content-center">{quantity}</span>
              <button onClick={() => handleQuantityChange(quantity + 1)} className="add">
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <button onClick={handleAddToCart} className="grid place-content-center bg-black rounded-full text-base text-white font-light py-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeGraphic;

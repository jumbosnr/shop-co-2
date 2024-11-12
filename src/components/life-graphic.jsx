import React, { useState } from 'react';

function LifeGraphic() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <section className="life-graphic">
      <div className="container max-w-6xl w-max mx-auto grid grid-cols-2 gap-5 py-14 px-12">
        <div className="left grid grid-cols-[max-content_auto] mt-4 gap-4">
          <div className="col-1">
            <a href="" className="w-36 h-36 bg-gray-200 mb-4">
              <img src="#" alt="" />
            </a>
            <a href="" className="w-36 h-36 bg-gray-200 mb-4">
              <img src="#" alt="" />
            </a>
            <a href="" className="w-36 h-36 bg-gray-200 mb-4">
              <img src="#" alt="" />
            </a>
          </div>
          <div className="col-2 bg-gray-200">
            <img src="#" alt="" className="" />
          </div>
        </div>

        <div className="right">
          <h2 className="font-bold text-4xl text-black py-2">ONE LIFE GRAPHIC T-SHIRT</h2>
          <div className="icons py-4">
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
          </div>
          <div className="d-price flex flex-row gap-2 py-4">
            <h5 className="text-xl font-bold text-black">$260</h5>
            <span className="text-xl font-bold text-gray-500">$300</span>
            <span className="per bg-[#FF33331A] text-xs text-red-500 font-light rounded-full pt-1 pr-2 pb-1 pl-2 text-center">-%40</span>
          </div>
          <p className="text-base font-normal text-gray-500 py-2">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div className="select-colours py-4">
            <p className="py-2 text-gray-600">Select colors</p>
            <div className="icons flex items-center gap-2">
              <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-slate-500"><i className="bi bi-check-lg text-white text-2xl"></i></a>
              <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-gray-500"><i className="bi bi-circle-fill text-[#314F4A] text-2xl invisible"></i></a>
              <a href="#" className="w-9 h-9 grid place-content-center rounded-full bg-gray-500"><i className="bi bi-circle-fill text-[#31344F] text-2xl invisible"></i></a>
            </div>
          </div>
          <hr />
          <div className="size py-4">
            <p className="py-2 text-gray-600">Choose Size</p>
            <div className="flex gap-2">
              <a className="size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 text-center">Small</a>
              <a className="size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center">Medium</a>
              <a className="size bg-black text-base text-white font-light rounded-full px-4 py-2 text-center">Large</a>
              <a className="size bg-gray-200 text-[#00000099] font-light rounded-full px-4 py-2 border text-center">X-Large</a>
            </div>
          </div>
          <hr />
          <div className="add-btn grid grid-cols-[max-content_auto] gap-4 py-4 mb-6">
            <div className="qt bg-gray-200 text-base flex items-center rounded-full w-max">
              <a href="#" className="subtract" onClick={() => handleQuantityChange(quantity - 1)}>
                <i className="bi bi-dash w-9 grid place-content-center"></i>
              </a>
              <span className="figure w-9 grid place-content-center">{quantity}</span>
              <a href="#" className="add" onClick={() => handleQuantityChange(quantity + 1)}>
                <i className="bi bi-plus-lg"></i>
              </a>
            </div>
            <button href="#" className="grid place-content-center bg-black rounded-full text-base text-white font-light py-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeGraphic;
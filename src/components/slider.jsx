// PriceSlider.jsx
import React, { useState } from "react";

const Slider = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedPrice, setSelectedPrice] = useState(50);

  const handleSliderChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <div className="price border-b-2 py-6">
        <h4 className="text-2xl font-semibold text-black py-2">Price</h4>
        <div className="slider-box px-2">
            <input
            type="range"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          onChange={handleSliderChange}
          className="slider h-2 w-full bg-gray-200 rounded-md appearance-none"
          style={{
            background: `linear-gradient(to right, black 0%, black ${
              ((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100
            }%, gray ${
              ((selectedPrice - minPrice) / (maxPrice - minPrice)) * 100
            }%, gray 100%)`,
            }}
            />
        </div>
        <div className="indicators flex items-center      justify-between mb-4 px-2">
        <h4 className="text-black text-lg font-semibold">${minPrice}</h4>
        <h4 className="text-black text-lg font-semibold">${selectedPrice}</h4>
        </div>
    </div>
  );
};

export default Slider;

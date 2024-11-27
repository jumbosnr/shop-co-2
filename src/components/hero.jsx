import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="hero">
      <div className="container mx-auto max-w-6xl py-12 px-12 grid grid-cols-2 gap-10">
        <div className="left">
          <div className="text pb-12">
            <h1 className="text-5xl leading-20 font-extrabold text-black mb-4 w-4/5">
              FIND CLOTHES THAT MATCHES YOUR 
            </h1>
            <p className="text-lg  text-gray-500 leading-6 mb-6">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <Link
              className="bg-black hover:bg-gray-700 text-white text-xl leading-2 rounded-full pt-2 pr-10 pb-3 pl-10 mb-6 font-extralight inline-block"
              to="/store"
            >
              Shop Now
            </Link>
          </div>

          <div className="fig flex gap-2">
            <div className="fig-item fig-item-1 flex flex-col">
              <span className="text-black text-3xl font-bold">200+</span>
              <span className="later text-gray-600 text-xl font-normal">
                International Brands
              </span>
            </div>

            <div className="fig-item flex flex-col">
              <span className="text-black text-3xl font-bold ml-4">2,000+</span>
              <span className="later text-gray-600 text-xl font-normal px-4">
                High quality Pacakge
              </span>
            </div>

            <div className="fig-item fig-item-3 flex flex-col">
              <span className="text-black text-3xl font-bold">30,000+</span>
              <span className="later text-gray-600 text-xl font-normal">
                Happy Customers
              </span>
            </div>
          </div>
        </div>

        <div className="right">
        <video src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`} type="video/mp4" autoPlay muted loop></video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
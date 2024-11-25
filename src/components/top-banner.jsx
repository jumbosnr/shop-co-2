import React from 'react';
import versace from "../assets/Images/logo/versace.png";
import zara from "../assets/Images/logo/zara.png";
import gucci from "../assets/Images/logo/gucci.png";
import prada from "../assets/Images/logo/prada.png";
import calvin from "../assets/Images/logo/calvin.png";

function TopBanner() {
  return (
    <section className="top-banner bg-black">
      <div className="container mx-auto max-w-6xl py-10 px-12">
        <div className="banner text-white flex justify-evenly">
          <img
            src= { versace }
            alt="Versace logo"
            className="versace font-normal text-4xl h-6"
          />
          <img
            src={ zara }
            alt="Zara logo"
            className="zara font-normal text-4xl h-6"
          />
          <img
            src={ gucci }
            alt="Gucci logo"
            className="gucci font-normal text-4xl h-6"
          />
          <img
            src={ prada }
            alt="Prada logo"
            className="prada font-normal text-4xl "
          />
          <img
            src={ calvin }
            alt="Calvin Klein logo"
            className="klein font-normal border-3 text-4xl h-6"
          />
        </div>
      </div>
    </section>
  );
}

export default TopBanner;

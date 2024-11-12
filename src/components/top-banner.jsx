import React from 'react';

function TopBanner() {
  return (
    <section className="top-banner bg-black">
      <div className="container mx-auto max-w-6xl py-10 px-12">
        <div className="banner text-white flex justify-evenly">
          <img
            src="/assets/images/logo/versce.svg"
            alt="Versace logo"
            className="versace font-normal text-4xl h-6"
          />
          <img
            src="/assets/images/logo/zara-logo.png"
            alt="Zara logo"
            className="zara font-normal text-4xl h-6"
          />
          <img
            src="/assets/images/logo/gucci-logo.png"
            alt="Gucci logo"
            className="gucci font-normal text-4xl h-6"
          />
          <img
            src="/assets/images/logo/prada-logo.png"
            alt="Prada logo"
            className="prada font-normal text-4xl h-6"
          />
          <img
            src="/assets/images/logo/calvin.png"
            alt="Calvin Klein logo"
            className="klein font-normal text-4xl h-6"
          />
        </div>
      </div>
    </section>
  );
}

export default TopBanner;
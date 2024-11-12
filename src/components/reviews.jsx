import React, { useState } from 'react';

function Reviews() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="reviews">
      <div className="container max-w-6xl mx-auto px-12 grid grid-cols-2 gap-20">
        <div className="left flex items-center">
          <h4 className="text-xl font-semibold">ALL REVIEWS <span>(450)</span></h4>
        </div>
        <div className="right flex items-center gap-2 py-23 justify-end mb-4">
          <div className="icon" onClick={toggleDropdown}>
            <i className="bi bi-funnel-fill rounded-full bg-gray-200 text-lg py-2 px-4"></i>
          </div>
          <div className={`review flex items-center gap-2 ${dropdownOpen ? 'visible' : 'hidden'}`}>
            <a href="#" className="size bg-gray-200 text-base font-semibold rounded-full px-4 py-2 border text-center">Latest</a>
            <a href="#" className="size bg-black text-base text-white font-light rounded-full px-4 py-2 text-center">Write a Review</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
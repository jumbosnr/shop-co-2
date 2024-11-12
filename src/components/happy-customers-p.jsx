import React, { useState } from 'react';

function HappyCustomers() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="hpy-cus gap-5 mb-8">
      <div className="container max-w-6xl mx-auto px-12">
        <div className="wrapper grid grid-cols-2 gap-5 mb-5">
          <div className="cus-1 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>ava H. <span><i className="bi bi-check-circle-fill text-green-700"></i></span></h5>
            <p>
              "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. 
              The intricate details and thoughtful layout of the design make this shirt 
              a conversation starter."
            </p>
          </div>

          <div className="cus-2 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>Olivie P. <i className="bi bi-check-circle-fill text-green-700"></i></h5>
            <p>
              "As a UI/UX enthusiast, I value simplicity and functionality. 
              This t-shirt not only represents those principles but also 
              feels great to wear. It's evident that the designer poured 
              their creativity into making this t-shirt stand out."
            </p>
          </div>

          <div className="cus-3 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>alex M. <span><i className="bi bi-check-circle-fill text-green-700"></i></span></h5>
            <p>
              "The t-shirt exceeded my expectations! 
              The colors are vibrant and the print quality is top-notch. 
              Being a UI/UX designer myself, I'm quite picky about aesthetics, 
              and this t-shirt definitely gets a thumbs up from me."
            </p>
          </div>

          <div className="cus-4 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>Lima K. <span><i className="bi bi-check-circle-fill text-green-700"></i></span></h5>
            <p>
              "This t-shirt is a fusion of comfort and creativity. 
              The fabric is soft, and the design speaks volumes about 
              the designer's skill. It's like wearing a piece of art 
              that reflects my passion for both design and fashion."
            </p>
          </div>

          <div className="cus-5 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>Ethan R. <span><i className="bi bi-check-circle-fill text-green-700"></i></span></h5>
            <p>
              "This t-shirt is a fusion of comfort and creativity. 
              The fabric is soft, and the design speaks volumes 
              about the designer's skill. It's like wearing a 
              piece of art that reflects my passion for both 
              design and fashion."
            </p>
          </div>

          <div className="cus-6 rounded-lg p-5 border border-slate-200">
            <div className="icons">
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
              <span><i className="bi bi-star-fill star text-yellow-400"></i></span>
            </div>
            <h5>Samanta D. <span><i className="bi bi-check-circle-fill text-green-700"></i></span></h5>
            <p>
              "I absolutely love this t-shirt! The design is 
              unique and the fabric feels so comfortable. 
              As a fellow designer, I appreciate the attention 
              to detail. It's become my favorite go-to shirt."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyCustomers;
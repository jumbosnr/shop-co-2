import React from 'react';

function HappyCustomers() {
  return (
    <section id="happy-customers" className="happy-cus py-14">
      <div className="container mx-auto px-12  max-w-6xl">
        <h2 className="font-bold text-4xl flex justify-center text-black mb-6">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* Grid Layout for customer reviews */}
        <div className="cus grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="col cus rounded-lg p-5 border border-slate-200">
            <div className="icons mb-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <i className="bi bi-star-fill star text-yellow-400" aria-label="5 out of 5 stars"></i>
                  </span>
                ))}
            </div>
            <h5 className="text-lg mb-1">
              Sarah M. <span className="text-green-700">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            </h5>
            <p className="text-base">
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
          </div>

          <div className="col cus rounded-lg p-5 border border-slate-200">
            <div className="icons mb-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <i className="bi bi-star-fill star text-yellow-400" aria-label="5 out of 5 stars"></i>
                  </span>
                ))}
            </div>
            <h5 className="text-lg mb-1">
              John D. <span className="text-green-700">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            </h5>
            <p className="text-base">
              "Excellent service and top-notch products! The fast shipping and quality items have made me a loyal customer."
            </p>
          </div>

          <div className="col cus rounded-lg p-5 border border-slate-200">
            <div className="icons mb-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <i className="bi bi-star-fill star text-yellow-400" aria-label="5 out of 5 stars"></i>
                  </span>
                ))}
            </div>
            <h5 className="text-lg mb-1">
              Lisa K. <span className="text-green-700">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            </h5>
            <p className="text-base">
              "Absolutely love the clothing I received! Stylish, comfortable, and affordable—Shop.co is my go-to store!"
            </p>
          </div>
          <div className="col cus rounded-lg p-5 border border-slate-200">
            <div className="icons mb-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span key={index}>
                    <i className="bi bi-star-fill star text-yellow-400" aria-label="5 out of 5 stars"></i>
                  </span>
                ))}
            </div>
            <h5 className="text-lg mb-1">
              Queen L. <span className="text-green-700">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            </h5>
            <p className="text-base">
              "Absolutely love the clothing I received! Stylish, comfortable, and affordable—Shop.co is my go-to store!"
            </p>
          </div>

          {/* Add more customer reviews here */}
        </div>
      </div>
    </section>
  );
}

export default HappyCustomers;

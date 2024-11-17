import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PaymentPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming form validation and payment processing are successful
    setShowConfirmation(true);
  };

  const handleContinueShopping = () => {
    navigate('/store'); // Redirect to store page
  };

  const handleGoHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <section className="check-out py-10">
      <div className="container px-12 mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-black grid place-content-center py-2">
          Billing
        </h2>
        <p className="text-base text-gray-500 grid place-content-center mb-5">
          Fill out the appropriate information below
        </p>

        {!showConfirmation ? (
          <form className="billing-details grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <div className="left rounded-lg border-2 px-5">
              <h2 className="text-2xl font-semibold py-4 border-b-2 mb-7">
                <i className="bi bi-1-circle"></i> Billing Address
              </h2>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">Full Name</label>
                <input
                  type="text"
                  className="border-2 px-3 py-3 w-full"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">ADDRESS 1</label>
                <input
                  type="text"
                  className="border-2 px-3 py-3 w-full"
                  placeholder="Enter your address"
                />
              </div>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">STATE</label>
                <select className="border-2 px-3 py-3 w-full">
                  <option value="">Select a state</option>
                  <option value="State1">State1</option>
                  <option value="State2">State2</option>
                </select>
              </div>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">ZIP CODE</label>
                <input
                  type="text"
                  className="border-2 px-3 py-3 w-full"
                  placeholder="Enter your ZIP code"
                />
              </div>
            </div>

            <div className="right rounded-lg border-2 px-5">
              <h2 className="text-2xl font-semibold py-4 border-b-2 mb-7">
                <i className="bi bi-2-circle"></i> Card Details
              </h2>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">CARD NUMBER</label>
                <input
                  type="text"
                  className="border-2 px-3 py-3 w-full"
                  placeholder="Enter card number"
                />
              </div>

              <div className="input-box mb-7">
                <label className="text-base font-semibold block mb-2">CVV</label>
                <input
                  type="text"
                  className="border-2 px-3 py-3 w-full"
                  placeholder="Enter CVV"
                />
              </div>

              <div className="input-box mb-7 flex space-x-4">
                <div>
                  <label className="text-base font-semibold block mb-2">EXPIRATION MONTH</label>
                  <input
                    type="text"
                    className="border-2 px-3 py-3 w-full"
                    placeholder="MM"
                  />
                </div>
                <div>
                  <label className="text-base font-semibold block mb-2">EXPIRATION YEAR</label>
                  <input
                    type="text"
                    className="border-2 px-3 py-3 w-full"
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>

            <div className="input-box mb-7 py-2 text-center">
              <button
                type="submit"
                className="bg-black text-white py-3 px-7 rounded-full"
              >
                Complete Payment
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-black border  rounded">
            <h3 className="text-xl font-bold text-white">
              Thank you for your purchase!
            </h3>
            <p className="text-white mt-2">
              Your items have been successfully purchased and will be delivered
              to you within <span className="text-red-600 font-bold">48 hours.</span> If you have any issues, please contact
              customer care.
            </p>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleContinueShopping}
                className="px-6 py-2 bg-black text-white rounded hover:bg-white hover:text-black"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleGoHome}
                className="px-6 py-2 bg-black text-white rounded hover:bg-white hover:text-black"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PaymentPage;

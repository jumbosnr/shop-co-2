import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationMessage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming form validation and payment are successful
    setShowConfirmation(true);
  };

  const handleContinueShopping = () => {
    navigate.push('/store'); // Redirects to store page
  };

  const handleGoHome = () => {
    navigate.push('/'); // Redirects to home page
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-6">Payment Form</h2>
        
        {/* Add your form fields here */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
          <input type="text" id="expiryDate" name="expiryDate" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="ccv" className="block text-gray-700">CCV</label>
          <input type="text" id="ccv" name="ccv" className="w-full p-2 border border-gray-300 rounded mt-2" required />
        </div>

        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded mt-4 hover:bg-green-600">
          Complete Purchase
        </button>
      </form>

      {showConfirmation && (
        <div className="mt-8 p-6 bg-green-100 border border-green-400 rounded">
          <h3 className="text-xl font-bold text-green-800">Thank you for your purchase!</h3>
          <p className="text-gray-700 mt-2">Your items have been successfully purchased and will be delivered to you within 48 hours. If you have any issues, please contact customer care.</p>

          <div className="mt-6 flex justify-between">
            <button
              onClick={handleContinueShopping}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleGoHome}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmationMessage;

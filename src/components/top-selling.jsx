import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Utility function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// NewArrivals component to display the fetched products
function TopSelling() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?sort=dasc')
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = shuffleArray(data); // Shuffle the fetched data
        setData(shuffledData); // Set the shuffled data to the state
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  const limitedProducts = data?.slice(0, 10) || []; // Take the first 10 shuffled products

  return (
    <section className="new-arrivals py-14">
      <div className="container mx-auto max-w-6xl px-12">
        <h2 className="font-bold text-4xl flex justify-center text-black mb-6">
          TOP SELLING
        </h2>

        {/* Carousel Layout */}
        <div className="relative">
          <div
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar overflow-hidden"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
            }}
          >
            {limitedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product-details?id=${product.id}&title=${encodeURIComponent(
                  product.title
                )}&image=${encodeURIComponent(product.image)}&price=${product.price}`}
                className="bg-white p-4 transform transition-transform hover:scale-105 duration-300 ease-in-out rounded-lg shadow-md hover:shadow-lg flex-none w-[80%] sm:w-[45%] lg:w-[23%]"
              >
                <div className="top">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 rounded-xl object-contain object-center"
                  />
                </div>
                <p className="text-lg font-semibold mt-4 mb-2">{product.title}</p>
                <div className="icon">
                  {Array(Math.round(product.rating.rate))
                    .fill(0)
                    .map((_, index) => (
                      <span key={index}>
                        <i className="bi bi-star-fill star text-yellow-400" aria-hidden="true"></i>
                      </span>
                    ))}
                </div>
                <div className="d-price mt-2">
                  <h5 className="text-xl font-bold text-black">${product.price}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link 
          to="/store" 
          className="px-10 py-2 text-black rounded-full bg-white border-2 border-gray-200 text-center hidden"
        >
          View All
        </Link>
      </div>
    </section>
  );
}

export default TopSelling;

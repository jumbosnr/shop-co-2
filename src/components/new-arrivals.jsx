import React, { useEffect, useState } from 'react';

// Products component to fetch and log the data
function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div>
      <h2>Fetched Products (Check console for details)</h2>
    </div>
  );
}

// NewArrivals component to display the fetched products
function NewArrivals() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?sort=dasc')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  const limitedProducts = data?.slice(0, 4) || [];

  return (
    <section className="new-arrivals py-14">
      <div className="container mx-auto max-w-6xl px-12">
        <h2 className="font-bold text-4xl flex justify-center text-black mb-6">
          NEW ARRIVAL
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {limitedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
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
                      <i
                        className="bi bi-star-fill star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                    </span>
                  ))}
              </div>
              <div className="d-price mt-2">
                <h5 className="text-xl font-bold text-black">${product.price}</h5>
              </div>
            </div>
          ))}
        </div>

        <a href="/" className="px-10 py-2 text-black rounded-full bg-white border-2 border-gray-200 text-center  hidden">
        View All
        </a>
      </div>
    </section>
  );
}

// Export both components
export { Products, NewArrivals };


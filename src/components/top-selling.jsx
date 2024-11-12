import React from 'react';
import { useQuery } from '@tanstack/react-query';

function Products() {
  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="top-selling py-14">
      <div className="container mx-auto max-w-6xl px-12">
        <h2 className="font-bold text-4xl flex justify-center text-black mb-6">
          TOP SELLING
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {data.slice(0, 4).map((product) => (
            <div className="bg-white p-4 rounded-lg shadow-md" key={product.id}>
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
                {/* Optional salePrice handling can be added if required */}
              </div>
            </div>
          ))}
        </div>

        <a href="/" className="px-10 py-2 text-black rounded-full bg-white border-2 border-gray-200 text-center hidden">
          View All
        </a>
      </div>
    </section>
  );
}

export default Products;
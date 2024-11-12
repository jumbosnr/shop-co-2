import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function ProductSection() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'], // Unique key for the query
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data; // Returning the product data
    },
  });

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error fetching products</div>; // Error state
  }

  return (
    <section className="casual py-14 px-12">
      <div className="heading">
        <div className="container max-w-6xl mx-auto mb-6">
          <div className="grid grid-cols-2">
            <div className="col-1 px-4">
              <h2 className="text-3xl font-bold">Casual</h2>
            </div>
            <div className="col-2 flex items-center text-xs font-semibold">
              <p className="text-gray-600">Showing 1-10 of {data.length} Products</p>
              <p className="text-gray-600">
                Sort by: <span className="text-black">Most Popular</span>
                <span>icon</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product max-w-6xl mx-auto">
        <div className="row-1 grid grid-cols-3 gap-4 mb-4">
          {data.slice(0, 9).map((product) => (
            <div key={product.id} className="col-1 px-4 py-4">
              <div className="top">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 rounded-xl object-contain object-center"
                />
              </div>
              <div className="bottom">
                <p className="text-lg font-semibold mb-2">{product.title}</p>
                <div className="icon">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      <i className="bi bi-star-fill star text-yellow-400"></i>
                    </span>
                  ))}
                </div>
                <div className="price">
                  <h5 className="text-xl font-bold text-black">${product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Repeat similar blocks for other product rows, or adjust according to your layout */}
      </div>
    </section>
  );
}

export default ProductSection;

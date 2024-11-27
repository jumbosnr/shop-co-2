import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductSection() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products</div>;
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
            <Link
              to={`/product-details?id=${product.id}&title=${encodeURIComponent(product.title)}&image=${encodeURIComponent(product.image)}&price=${product.price}`}
              key={product.id}
              className="col-1 p-4 transform transition-transform hover:scale-105 duration-300 ease-in-out rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="top">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 rounded-xl object-contain object-center"
                />
              </div>
              <div className="bottom mt-4">
                <p className="text-lg font-semibold mt-4 mb-2">{product.title}</p>
                <div className="icon mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      <i className="bi bi-star-fill star text-yellow-400"></i>
                    </span>
                  ))}
                </div>
                <div className="price mt-2">
                  <h5 className="text-xl font-bold text-black">${product.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;

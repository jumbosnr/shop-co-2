import React, { useEffect, useState } from 'react';

// Function to fetch products from the Fake Store API
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData.slice(0, 4)); // Store only the first 4 products
      } catch (err) {
        setError(err.message); // Store error message if fetch fails
      } finally {
        setIsLoading(false); // Set loading to false once fetch is complete
      }
    };

    loadProducts();
  }, []);

  // Handling loading and error states
  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <section className="product-list py-14">
      <div className="container mx-auto max-w-6xl px-12">
        <h2 className="font-bold text-4xl flex place-content-center text-black mb-6">You Might Also Like  </h2>
        <div className="items grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="col border p-4 rounded-lg shadow-lg">
              <div className="top">
                <img src={product.image} alt={product.title} className="w-full h-64 rounded-xl object-contain object-center" />
              </div>
              <div className="bottom mt-4">
                <p className="text-lg font-semibold mb-2">{product.title}</p>
                <div className="icon">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      <i className="bi bi-star-fill star text-yellow-400"></i>
                    </span>
                  ))}
                </div>
                <div className="price flex flex-row gap-2 mt-2">
                  <h5 className="text-xl font-bold text-black">${product.price.toFixed(2)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;

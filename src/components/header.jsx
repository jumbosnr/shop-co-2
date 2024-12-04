import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const totalCartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
      setIsSearching(true);
    } else {
      setIsSearching(false);
      setFilteredProducts([]);
    }
  };

  const handleResultClick = (productId) => {
    setSearchQuery(''); // Clear the search bar
    setIsSearching(false); // Close the dropdown
    navigate(`/store?product=${productId}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-6xl py-5 px-12 flex items-center justify-between border-b-2">
        {/* Logo */}
        <Link to="/" className="logo text-black text-3xl font-extrabold">
          <h1>SHOP.CO</h1>
        </Link>

        {/* Navigation Links */}
        {!isAuthPage && (
          <nav className="flex gap-8">
            {/* <Link to="/" className="hover:text-gray-700">
              Home
            </Link> */}
            <Link to="/store" className="hover:text-gray-700">
              Store
            </Link>
            <Link to="/" className="hover:text-gray-700">
              About
            </Link>
            <Link to="/dress-styles" className="hover:text-gray-700">
              Categories
            </Link>
          </nav>
        )}

        {/* Render the following only if NOT on login or signup pages */}
        {!isAuthPage && (
          <>
            {/* Search Box */}
            <div className="search-box pt-1 pb-1 rounded-2xl border-solid bg-gray-200 px-5 gap-2 py-2 relative">
              <i className="bi bi-search pointer-events-auto"></i>
              <input
                type="search"
                className="bg-transparent pr-20 px-5 border-none focus:border-none outline-none focus:outline-none"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {isSearching && (
                <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-b-lg mt-1 max-h-60 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li key={product.id} className="p-2 hover:bg-gray-100">
                        <span
                          onClick={() => handleResultClick(product.id)}
                          className="cursor-pointer flex items-center gap-2"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-10 h-10 object-cover"
                          />
                          <span>{product.title}</span>
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">Item not found</li>
                  )}
                </ul>
              )}
            </div>

            {/* User Icons */}
            <div className="user flex align-middle gap-5 relative">
              <Link to="/shopping-cart" className="relative">
                <i className="bi bi-cart"></i>
                {totalCartQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                    {totalCartQuantity}
                  </span>
                )}
              </Link>
              <Link to="/login">
                <i className="bi bi-person-circle"></i>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

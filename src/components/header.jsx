import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const totalCartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMenuClick = () => {
    setIsActive((prev) => !prev);
    document.body.classList.toggle('active');
  };

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      if (isActive) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }
  }, [isActive]);

  // Fetch products from the Fake Store API
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

  // Handle search input change
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

  // Handle click on a search result
  const handleResultClick = (productId) => {
    navigate(`/store?product=${productId}`);
  };

  return (
    <header className="bg-white">
      <div className="container mx-auto max-w-6xl flex flex-row py-5 px-12 items-center justify-between border-b-2">
        <a href="#" className="h-menu" onClick={handleMenuClick}>
          <i className="bi bi-list"></i>
        </a>
        <a href="/" className="logo text-black text-3xl font-extrabold">
          <h1>SHOP.CO</h1>
        </a>
        <nav>
          <ul className="flex flex-row items-center gap-10">
            <li className="dropdown flex align-middle gap-5" ref={dropdownRef}>
              {isOpen && (
                <ul className="links hidden">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li><a href="#">Item 4</a></li>
                  <li><a href="#">Item 5</a></li>
                </ul>
              )}
            </li>
            <li><a href="/store">Store</a></li>
            <li><a href="/dress-styles">Categories</a></li>
            <li><a href="">About Us</a></li>
          </ul>
        </nav>
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
                      <img src={product.image} alt={product.title} className="w-10 h-10 object-cover" />
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
        <div className="user flex align-middle gap-5 relative">
          <a href="/shopping-cart" className="relative">
            <i className="bi bi-cart"></i>
            {totalCartQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalCartQuantity}
              </span>
            )}
          </a>
          <a href="/login">
            <i className="bi bi-person-circle"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

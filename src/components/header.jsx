import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const [isActive, setIsActive] = useState(false); // State for active class
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown state
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown if clicked outside
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
    setIsActive((prev) => !prev); // Toggle active class
    document.body.classList.toggle('active'); // Toggle class on body
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
  }, [isActive]); // Effect to toggle class on nav element

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
              {/* <button
                className="toggle"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                Shop
              </button> */}
              {isOpen && ( // Conditionally render dropdown content
                <ul className="links hidden">
                  <li>
                    <a href="#">Item 1</a>
                  </li>
                  <li>
                    <a href="#">Item 2</a>
                  </li>
                  <li>
                    <a href="#">Item 3</a>
                  </li>
                  <li>
                    <a href="#">Item 4</a>
                  </li>
                  <li>
                    <a href="#">Item 5</a>
                  </li>
                </ul>
              )}
            </li>
            <li><a href="/product-details">Product Details</a></li>
            <li><a href="/store">Store</a></li>
            {/* <li><a href="/shopping-cart">Shop</a></li> */}
          </ul>
        </nav>
        <div className="search-box pt-1 pb-1 rounded-2xl border-solid bg-gray-200 px-5 gap-2 py-2">
          <i className="bi bi-search pointer-events-auto"></i>
          <input
            type="search"
            className="bg-transparent pr-20 border-none focus:border-none outline-none focus:outline-none"
            placeholder="Search for products..."
          />
        </div>
        <div className="user flex align-middle gap-5">
          <a href="/shopping-cart">
            <i className="bi bi-cart"></i>
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../node_modules/tailwindcss/base.css';
import '../node_modules/tailwindcss/utilities.css';
import '../node_modules/tailwindcss/components.css';
import './assets/stylesheets/tab-style/main.css';
import './assets/stylesheets/tab-style/home.css';
import './assets/stylesheets/tab-style/product-details.css';
import './assets/stylesheets/tab-style/shopping-cart.css';
import './assets/stylesheets/tab-style/store.css';
import './assets/stylesheets/tab-style/checkout.css';
import './assets/stylesheets/tab-style/signup.css';
import './assets/stylesheets/tab-style/login.css';
import './assets/stylesheets/mobile-style/m-main.css';
import './assets/stylesheets/mobile-style/home.css';
import './assets/stylesheets/mobile-style/product-details.css';
import './assets/stylesheets/mobile-style/store.css';
import { AuthProvider } from './components/AuthContext'; // Correct path
import { CartProvider } from './context/CartContext';
import App from './App';

// Create a client for react-query
const queryClient = new QueryClient();

// Get the root DOM element where React will render the app
const rootElement = document.getElementById('root');

// Use createRoot instead of render in React 18
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import LifeGraphic from './pages/product-details';
import ShoppingCart from './pages/shopping-cart';
import PaymentPage from './pages/payment-page.jsx';
import Login from './pages/login';
import SignUp from './pages/signup';
import ProtectedRoute from './components/protectedRoutes.jsx';
// import { AuthProvider } from './AuthContext'; // Correct path
import LoginC from './components/login.jsx';
import ConfirmationMessage from './components/ConfirmationMessage.jsx';
import DressStyle from './components/dress-styles.jsx';
// import Account from './components/Account'; // Adjust path based on location


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/ConfirmationMessage" element={<ConfirmationMessage />} />
        <Route path="/DressStyle" element={<DressStyle />} />

        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product-details" element={<LifeGraphic />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/payment-page" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<LoginC />} />
        <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
        {/* <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} /> */}
  {/* Add other routes here */}
    
        {/* Uncomment and update other routes as needed */}
        
      </Routes>
    </Router>
  );
}

export default App;

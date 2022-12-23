import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';



function App() {

const [user, setUser] = useState(null);

useEffect(() => {

}, []) 

return(
  <>
  <div className="route-container">
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product/:id" element={<ProductPage />} />
  <Route path="/cartpage" element={<CartPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignUpPage />} />
  </Routes>
  </div>
  </>
);
}

export default App;

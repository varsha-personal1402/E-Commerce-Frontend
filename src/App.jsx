import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import Products from './pages/Products/Products.jsx'
import ProductDetails from './pages/ProductDetails/ProductsDetails.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Login from './pages/LoginAndSignUp/Login.jsx'
import Signup from './pages/LoginAndSignUp/Signup.jsx'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {

  return (
    <>
      <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Other Pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

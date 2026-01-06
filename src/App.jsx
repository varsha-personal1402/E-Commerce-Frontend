import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Login from './pages/LoginAndSignUp/Login.jsx'
import Signup from './pages/LoginAndSignUp/Signup.jsx'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ProductList from './pages/Products/ProductList.jsx'
import ProductDetails from './pages/Products/ProductDetails.jsx'
import ContactForm from './pages/Contact/ContactForm.jsx'
import UserDashboard from './pages/UserDashboard/UserDashboard.jsx'
import Checkout from './pages/CheckoutPage/Checkout.JSX'
import { CartProvider } from './ConetxAPI/CartContext.jsx'
import { OrdersProvider } from './ConetxAPI/OrderContext.jsx'

function App() {

  return (
    <>
    <OrdersProvider>
    <CartProvider>
      <Router>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/user' element={<UserDashboard/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </OrdersProvider>
  </>
  )
}

export default App

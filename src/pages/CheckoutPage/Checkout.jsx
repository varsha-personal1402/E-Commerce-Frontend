// src/pages/Checkout.jsx
import React, { useContext } from "react";
import { CartContext } from "../../ConetxAPI/CartContext";
import { OrdersContext } from "../../ConetxAPI/OrderContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    cartItems.forEach((item) => {
      const newOrder = {
        id: Date.now() + Math.random(),
        product: item.product,
        quantity: item.quantity,
        date: new Date().toLocaleDateString(),
        status: "Pending",
        price: item.price,
        total: item.price * item.quantity,
      };

      addOrder(newOrder);
    });

    clearCart();
    alert("Order placed successfully!");
    navigate("/user");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>
              Total Amount: <strong>${totalAmount}</strong>
            </p>
            <button className="btn place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;

import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="page-container">
        <h2 className="page-title">Your Cart</h2>
        <div className="cart-item">
          <img src="https://via.placeholder.com/120" alt="cart-img" />
          <div>
            <h3>Product 1</h3>
            <p>Price: ₹999</p>
          </div>
          <button className="remove-btn">Remove</button>
        </div>
        <h3 className="total">Total: ₹999</h3>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

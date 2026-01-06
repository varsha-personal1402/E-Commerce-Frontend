import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../ConetxAPI/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>My Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your Cart is Empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <p className="price">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  className="btn remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button
              className="btn checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

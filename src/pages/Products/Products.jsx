import React from "react";

const Products = () => {
  return (
    <div>
      <div className="page-container">
        <h2 className="page-title">All Products</h2>
        <div className="product-grid">
          {products.map((id) => (
            <div key={id} className="product-card">
              <img src="https://via.placeholder.com/200" alt="product" />
              <h3>Product {id}</h3>
              <p>₹999</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

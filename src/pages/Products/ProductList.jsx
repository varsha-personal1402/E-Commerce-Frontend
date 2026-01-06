import React from "react";
import products from "../../data/product";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="product-list-container">
      <h2 className="title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">₹{product.price}</p>
            <p className="product-rating">⭐ {product.rating}</p>
            <Link to={`/product/${product.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

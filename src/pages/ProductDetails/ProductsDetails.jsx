import React from "react";

const ProductsDetails = () => {
  return (
    <div>
      <div className="page-container">
        <h2 className="page-title">Product Details</h2>
        <div className="details-container">
          <img
            src="https://via.placeholder.com/350"
            alt="product"
            className="details-img"
          />
          <div className="details-info">
            <h3>Product Name</h3>
            <p className="price">₹999</p>
            <p>
              This is a sample product description. It gives necessary
              information about the product.
            </p>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;

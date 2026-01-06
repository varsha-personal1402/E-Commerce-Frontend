import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/product";
import { CartContext } from "../../ConetxAPI/CartContext"; 
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useContext(CartContext); 

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <img src={product.image} alt={product.name} className="details-image" />
        <div className="details-info">
          <h2 className="details-name">{product.name}</h2>
          <p className="details-category">Category: {product.category}</p>
          <p className="details-price">Price: ₹{product.price}</p>
          <p className="details-rating">Rating: ⭐ {product.rating}</p>
          <p className="details-description">{product.description}</p>

          <button
            className="btn add-to-cart-btn"
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              });
              alert("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

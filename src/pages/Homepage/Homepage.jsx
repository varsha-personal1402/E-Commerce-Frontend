import React from "react";
import "./Homepage.css";
import categories from "../../data/categoriesData";
import featuredProducts from "../../data/FeaturedProduct";
import Hero from "../../components/Hero/Hero";
import offer1 from "../../assets/offer1.png"
import offer2 from "../../assets/offer2.png"
import Footer from "../../components/Footer/Footer";

function Homepage() {

  const offers = [
  {
    id: 1,
    img: offer1,
    title: "Holiday Deals",
    subtitle: "Up to 50% off\n selected items",
  },
  {
    id: 2,
    img: offer2,
    title: "Take Your Sound\nAnywhere",
    subtitle: "Top Headphone Brands",
  },
];

  const products = [1, 2, 3, 4];
  const testimonials = [
    { name: "Rahul", text: "Amazing products and fast delivery!" },
    { name: "Sneha", text: "I love the variety and quality!" },
    { name: "Arjun", text: "Great customer service and pricing." },
  ];

  return (
    <div className="homepage">
      
     
      {/* ================= HERO SECTION ================= */}
    
      <Hero/>


      {/* ================= CATEGORIES ================= */}
      <section className="categories">
      <h2 className="cat-title">Shop By Category</h2>

      <div className="category-scroll">
        {categories.map((cat, i) => (
          <div key={i} className="category-card">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>


      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="featured">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.img}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="btn">View Details</button>
            </div>
          ))}
        </div>
      </section>


      {/* ================= OFFERS / BANNER ================= */}
      <section className="offers">
      <h2 className="offers-title">Exclusive Offers</h2>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} />
            <div className="offer-info">
              <h3>{offer.title}</h3>
              <p>{offer.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="review-grid">
          {testimonials.map((r, index) => (
            <div key={index} className="review-card">
              <p>"{r.text}"</p>
              <h4>- {r.name}</h4>
            </div>
          ))}
        </div>
      </section>


      <Footer/>
    </div>
  );
}

export default Homepage;

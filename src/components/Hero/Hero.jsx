import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../assets/Hero/hero1.jpg";
import image2 from "../../assets/Hero/hero2.jpg";
import image3 from "../../assets/Hero/hero3.jpg";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-carousel"
      >
        <SwiperSlide>
          <div className="hero-slide">
            <img src={image1} alt="slide1" className="hero-img" />
            <div className="slide-text">
              <h1>Shop the Latest Trends</h1>
              <p>
                Discover top deals and premium quality products at the best
                prices.
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide">
            <img src={image2} alt="slide2" className="hero-img" />
            <div className="slide-text">
              <h1>Unbeatable Offers</h1>
              <p>Trendy outfits & smart gadgets at the lowest prices.</p>
              <button className="btn">Explore Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide">
            <img src={image3} alt="slide3" className="hero-img" />
            <div className="slide-text">
              <h1>Premium Quality</h1>
              <p>Handpicked products for everyday comfort.</p>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;

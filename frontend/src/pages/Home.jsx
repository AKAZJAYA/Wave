import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutWave from "../components/AboutWave";
import Features from "../components/Features";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Header />

      <section>
        <Hero />
      </section>

      <section className="bg-black">
        <div>
          <AboutWave />
        </div>
        <div>
          <Features />
        </div>
      </section>

      <section className="bg-[#F4F5F0]">
        <Products />
      </section>
    </div>
  );
};

export default Home;

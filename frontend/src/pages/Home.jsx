import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutWave from "../components/AboutWave";

const Home = () => {
  return (
    <div>
      <Header />

      <section>
        <Hero />
      </section>

      <section className="bg-black">
        <AboutWave />
      </section>

    </div>
  );
};

export default Home;

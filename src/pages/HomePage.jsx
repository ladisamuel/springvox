import React from "react";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Products from "../components/home/Products";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Industries from "../components/home/Industries";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <WhyChooseUs />
        {/* <Industries /> */}
        {/* <Testimonials /> */}
        <CTA />
      </main>
    </div>
  );
}

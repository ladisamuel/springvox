import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

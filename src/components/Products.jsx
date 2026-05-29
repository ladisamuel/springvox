import React, { useRef, Suspense } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Shield, Phone, Sparkles, ArrowRight, ExternalLink } from 'lucide-react'
import { ParticleBackground } from '../utils/ParticleBackground'
import { ThreeScene } from '../utils/helper'

const products = [
  {
    icon: Brain,
    name: 'ReKallIQ',
    tag: 'AI Platform',
    description: 'A comprehensive AI-driven platform for enterprise automation, intelligent analytics, and cognitive workflow optimization. ReKallIQ transforms how organizations harness data and automate decisions.',
    features: ['AI Automation', 'Analytics', 'Enterprise'],
    color: '#0299b1',
    gradient: 'from-primary/20 to-cyan-500/10',
  },
  {
    icon: Shield,
    name: 'AegisIDS',
    tag: 'Cybersecurity',
    description: 'Enterprise-grade cybersecurity platform with real-time intrusion detection, threat intelligence, and automated incident response. AegisIDS keeps your infrastructure safe from evolving cyber threats.',
    features: ['Cybersecurity', 'Threat Intel', 'IDS'],
    color: '#00d4ff',
    gradient: 'from-cyan-500/20 to-primary/10',
  },
  {
    icon: Phone,
    name: 'TrueKall',
    tag: 'VoIP Platform',
    description: 'Modern, cloud-native communication platform with enterprise VoIP, call center management, intelligent routing, and real-time analytics. Reimagine how your team communicates and connects.',
    features: ['VoIP', 'Call Center', 'Cloud'],
    color: '#0299b1',
    gradient: 'from-primary/20 to-secondary/10',
  },
  {
    icon: Sparkles,
    name: 'Next Innovation',
    tag: 'Coming Soon',
    description: 'Our R&D teams are actively developing the next generation of enterprise software solutions. From advanced AI tools to next-level automation platforms — the future is in progress.',
    features: ['R&D', 'AI', 'Innovation'],
    color: '#00d4ff',
    gradient: 'from-cyan-500/10 to-primary/5',
    comingSoon: true,
  },
]

function ProductCard({ product, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative border4"
    >
      <div className={`relative glss bg-[#111820] p-6 rounded-xl h-full overflow-hidden glow-border transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05]`}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Top Tag */}
        <div className="relative flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${product.color}15` }}
            >
              <product.icon className="w-7 h-7" style={{ color: product.color }} />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">{product.name}</h3>
              <span className="text-xs text-primary/80 font-medium">{product.tag}</span>
            </div>
          </div>
          {product.comingSoon && (
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Coming Soon
            </span>
          )}
        </div>

        {/* Description */}
        <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <div className="relative flex flex-wrap gap-2 mb-8">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="relative">
          <button className="flex items-center gap-2 text-primary text-sm font-semibold group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Corner Glow */}
        <div 
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
          style={{ backgroundColor: product.color }}
        />
      </div>
    </motion.div>
  )
}

export default function Products() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="products" ref={sectionRef} className="relative bggray-900/40 py-24 lg:py-32 overflow-hidden">
      {/* Background */}

      
      {/* 
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-secondary/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(2,153,177,0.15),_transparent_50%)] z-0" />
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" /> 
      <ParticleBackground />


      
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 5, delay: 0.3 }}
                  className="absolute right-5 rotate45 hidden lg:block lg:w-[1200px] lg:h-[1200px] xlh-[600px]  overflow-visible"> 
                              <div className="w-full h-full inset-0">
                                {/* <ThreeScene /> */}
                                <Suspense fallback={<div>{''}</div>}>
                                  <ThreeScene />
                                </Suspense>
                              </div>
                        </motion.div>

      
      
      <div className="absolute inset-0 bgdark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Innovative Platforms{' '}
            <span className="text-gradient">We've Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flagship products designed for enterprise performance, security, and scale — 
            built in-house by SpringVox engineers.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

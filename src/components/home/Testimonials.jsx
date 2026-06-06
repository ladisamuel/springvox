import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '12+', label: 'Countries Served' },
  { value: '8+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3', label: 'Flagship Products' },
]

const testimonials = [
  {
    quote: "SpringVox transformed our entire communications infrastructure. TrueKall has reduced our call center costs by 40% while dramatically improving agent productivity.",
    author: 'Marcus Elliot',
    role: 'CTO, NovaNetworks',
    rating: 5,
  },
  {
    quote: "AegisIDS caught a sophisticated intrusion attempt within seconds. We've never felt more secure. The SpringVox team was exceptional throughout the deployment.",
    author: 'Priya Nair',
    role: 'Head of Security, FinCore Bank',
    rating: 5,
  },
  {
    quote: "ReKallIQ has fundamentally changed how we use data. The AI insights are genuinely actionable. Our decision-making speed has improved by an order of magnitude.",
    author: 'Daniel Osei',
    role: 'VP Operations, GreenGrid Logistics',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[200px]" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Social Proof
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{' '}
            <span className="text-gradient">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 glass rounded-xl">
              <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full glow-border transition-all duration-500 hover:bg-white/[0.05]">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Monitor } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/20 to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(2,153,177,0.15),_transparent_70%)]" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(2, 153, 177, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 153, 177, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="section-padding relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
                        <span className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300">
                          <span>Get Started Today</span>
                        </span>
          
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-6 block">
            
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-gradient">Business</span>{' '}
            <span className="text-gradient">with Technology?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a startup building your first product or an enterprise seeking 
            digital transformation — SpringVox is your technology partner.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#contact" className="btn-primary flex items-center gap-2 ">
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2 ">
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </a>
            <a href="#products" className="btn-secondary flex items-center gap-2 ">
              <Monitor className="w-5 h-5" />
              Request a Demo
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            No commitment required. Response within 24 hours. Free initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

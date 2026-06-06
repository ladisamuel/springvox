import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Landmark, HeartPulse, Wifi, Truck, Building2, GraduationCap, Rocket, Building } from 'lucide-react'

const industries = [
  { icon: Landmark, name: 'Finance', description: 'Fintech banking, and financial services platforms with regulatory compliance.' },
  { icon: HeartPulse, name: 'Healthcare', description: 'Health informatics, patient management, telemedicine, and clinical platforms.' },
  { icon: Wifi, name: 'Telecom', description: 'VoIP, call center systems, network management, and telecom infrastructure.' },
  { icon: Truck, name: 'Logistics', description: 'Fleet management, supply chain visibility, and last-mile delivery optimization.' },
  { icon: Building2, name: 'Government', description: 'E-government portals, public services digitization, and secure citizen platforms.' },
  { icon: GraduationCap, name: 'Education', description: 'LMS platforms, EdTech solutions, virtual classrooms, and learning analytics.' },
  { icon: Rocket, name: 'Startups', description: 'MVP development, rapid prototyping, product-market fit, and scale-ready architecture.' },
  { icon: Building, name: 'Enterprises', description: 'Large-scale digital transformation, ERP integration, and enterprise architecture modernization.' },
]

export default function Industries() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="industries" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-charcoal/20 to-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Industries
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Industries{' '}
            <span className="text-gradient">We Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep expertise across sectors allows us to deliver highly specialized solutions 
            that address industry-specific challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/[0.05] hover:border-primary/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                    <industry.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-semibold">{industry.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

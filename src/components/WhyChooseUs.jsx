import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Scale, Cpu, Users, Headphones, Layout, Rocket, BarChart } from 'lucide-react'
import { ParticleBackground } from '../utils/ParticleBackground'

const features = [
  { icon: Shield, title: 'Enterprise-Grade Security', description: 'Every solution we build adheres to enterprise security standards, encryption protocols, and compliance frameworks.' },
  { icon: Scale, title: 'Scalable Architecture', description: 'Systems designed to grow with you — from 10 users to 10 million, our architecture scales without compromise.' },
  { icon: Cpu, title: 'Innovative Technologies', description: 'We stay ahead of the curve — adopting AI, edge computing, and emerging frameworks before they become mainstream.' },
  { icon: Users, title: 'Experienced Team', description: 'Seasoned engineers, designers, and strategists with deep expertise across domains and industries.' },
  { icon: Headphones, title: 'Reliable Support', description: 'Dedicated support teams providing SLA-backed assistance, monitoring, and proactive issue resolution 24/7.' },
  { icon: Layout, title: 'Modern UI/UX Standards', description: 'Beautiful, intuitive interfaces grounded in user research, design systems, and accessibility best practices.' },
  { icon: Rocket, title: 'Fast Deployment', description: 'Agile delivery methodology, CI/CD pipelines, and DevOps culture that gets your product to market faster.' },
  { icon: BarChart, title: 'Data-Driven Insights', description: 'Real-time dashboards, analytics, and intelligence built into every solution so decisions are always informed.' },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-secondary/20 z-0" />
      <ParticleBackground />

      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-full blur-[200px]" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why SpringVox
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built for{' '}
            <span className="text-gradient">Enterprise</span>{' '}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine technical depth, design excellence, and strategic thinking to deliver 
            outcomes that move the needle.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/[0.05]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

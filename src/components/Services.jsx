import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Code2, Globe, Smartphone, Brain, Shield, Palette, 
  Box, Megaphone, Cloud, MessageSquare, Bot, BarChart3 
} from 'lucide-react'

const services = [
  { icon: Code2, title: 'Custom Software Development', description: 'End-to-end development of tailored enterprise software built for your exact business requirements.' },
  { icon: Brain, title: 'Artificial Intelligence', description: 'ML models, NLP, computer vision, and intelligent automation that make your products smarter.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Penetration testing, threat monitoring, compliance, and 24/7 infrastructure protection.' },
  { icon: Globe, title: 'Web Development', description: 'High-performance web applications with modern frameworks, outstanding UI, and scalable architecture.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experiences.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Cloud architecture, migration, optimization, and managed infrastructure on AWS, Azure, and GCP.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-driven design systems, interaction design, and premium user interfaces for digital products.' },
  { icon: Box, title: '3D Modelling & Animation', description: 'Stunning 3D visuals, product renders, motion graphics, and immersive digital experiences.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'Growth strategies, SEO, content marketing, and paid campaigns that scale your brand online.' },
  { icon: MessageSquare, title: 'Branding Services', description: 'Brand identity, visual systems, messaging strategy, and guidelines for impactful brand presence.' },
  { icon: Bot, title: 'Automation & DevOps', description: 'CI/CD pipelines, infrastructure-as-code, and process automation that accelerate delivery.' },
  { icon: BarChart3, title: 'IT Consulting', description: 'Strategic technology advisory for digital transformation, architecture, and enterprise planning.' },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/[0.05] hover:border-primary/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/10 to-dark" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" /> 

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technology Services{' '}
            <span className="text-gradient">End-to-End</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we cover every layer of the technology stack — 
            design, development, security, and operations.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

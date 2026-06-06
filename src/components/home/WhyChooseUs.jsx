import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import {
  Shield, Scale, Cpu, Users, Headphones, Layout, Rocket, BarChart3,
  ArrowUpRight, Zap, CheckCircle2, Lock, Globe, Sparkles
} from 'lucide-react'
import FeatureCard from './FeatureCard'
// import FeatureCard from './FeatureCard'

// ─── Data ────────────────────────────────────────────────────────────────────
const features = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Every solution adheres to enterprise security standards, encryption protocols, and compliance frameworks including SOC 2, ISO 27001, and GDPR.',
    stat: '99.99%',
    statLabel: 'Uptime SLA',
    color: '#0299b1',
    accent: 'from-[#0299b1]/20 to-transparent'
  },
  {
    icon: Scale,
    title: 'Scalable Architecture',
    description: 'Systems designed to grow with you — from 10 users to 10 million, our architecture scales horizontally without compromise.',
    stat: '10x',
    statLabel: 'Faster Scale',
    color: '#05d8f5',
    accent: 'from-[#05d8f5]/20 to-transparent'
  },
  {
    icon: Cpu,
    title: 'Innovative Technologies',
    description: 'We stay ahead of the curve — adopting AI, edge computing, and emerging frameworks before they become mainstream.',
    stat: '40+',
    statLabel: 'Tech Patents',
    color: '#45919D',
    accent: 'from-[#45919D]/20 to-transparent'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Seasoned engineers, designers, and strategists with deep expertise across domains and industries.',
    stat: '150+',
    statLabel: 'Certified Experts',
    color: '#0299b1',
    accent: 'from-[#0299b1]/20 to-transparent'
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    description: 'Dedicated support teams providing SLA-backed assistance, monitoring, and proactive issue resolution 24/7.',
    stat: '<2min',
    statLabel: 'Avg Response',
    color: '#05d8f5',
    accent: 'from-[#05d8f5]/20 to-transparent'
  },
  {
    icon: Layout,
    title: 'Modern UI/UX Standards',
    description: 'Beautiful, intuitive interfaces grounded in user research, design systems, and accessibility best practices.',
    stat: 'WCAG 2.1',
    statLabel: 'AA Compliant',
    color: '#45919D',
    accent: 'from-[#45919D]/20 to-transparent'
  },
  {
    icon: Rocket,
    title: 'Fast Deployment',
    description: 'Agile delivery methodology, CI/CD pipelines, and DevOps culture that gets your product to market faster.',
    stat: '3x',
    statLabel: 'Faster Delivery',
    color: '#0299b1',
    accent: 'from-[#0299b1]/20 to-transparent'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Real-time dashboards, analytics, and intelligence built into every solution so decisions are always informed.',
    stat: '500M+',
    statLabel: 'Events/Day',
    color: '#05d8f5',
    accent: 'from-[#05d8f5]/20 to-transparent'
  },
]

const trustBadges = [
  { icon: Lock, label: 'SOC 2 Certified' },
  { icon: Globe, label: 'GDPR Compliant' },
  { icon: Zap, label: 'ISO 27001' },
  { icon: CheckCircle2, label: 'HIPAA Ready' },
  { icon: Sparkles, label: 'AI-Powered' },
]

// ─── Floating Particle Canvas ───────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, particles = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * 2
      h = canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }
    resize()
    window.addEventListener('resize', resize)

    const count = 40
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w / 2,
        y: Math.random() * h / 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w / 2, h / 2)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w / 2) p.vx *= -1
        if (p.y < 0 || p.y > h / 2) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(2, 153, 177, ${p.alpha})`
        ctx.fill()
      }
      // Connect nearby
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(2, 153, 177, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />
}

// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (isNaN(num)) { setDisplay(value); return }
    const duration = 2000
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(num * eased)
      setDisplay(prefix + current + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, suffix, prefix])

  return <span ref={ref}>{display}</span>
}


// ─── Main Section ────────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-[#060b10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(2,153,177,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(5,216,245,0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0299b1]/20 to-transparent" />

      {/* Animated particle field */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 section-padding ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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

        {/* Trust badges bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            >
              <badge.icon className="w-3.5 h-3.5 text-[#45919D]" />
              <span className="text-[11px] text-gray-400 font-medium tracking-wide">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Features Grid — 4 columns on large, staggered heights */}
        <div className="border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div key={feature.title} className={i % 2 === 1 ? 'lg:mt-8' : ''}>
              <FeatureCard feature={feature} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-10 py-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Ready to transform your infrastructure?</div>
              <div className="text-gray-500 text-xs mt-0.5">Schedule a consultation with our enterprise team.</div>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0299b1] text-white text-sm font-medium hover:bg-[#05d8f5] transition-colors duration-300 group">
              Get Started
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}































































// import React, { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { Shield, Scale, Cpu, Users, Headphones, Layout, Rocket, BarChart } from 'lucide-react'
// import { ParticleBackground } from '../utils/ParticleBackground'
// import { OurFeatures } from '../utils/helper'
// import FeatureCard from './FeatureCard'

// const features = [
//   { icon: Shield, title: 'Enterprise-Grade Security', description: 'Every solution we build adheres to enterprise security standards, encryption protocols, and compliance frameworks.' },
//   { icon: Scale, title: 'Scalable Architecture', description: 'Systems designed to grow with you — from 10 users to 10 million, our architecture scales without compromise.' },
//   { icon: Cpu, title: 'Innovative Technologies', description: 'We stay ahead of the curve — adopting AI, edge computing, and emerging frameworks before they become mainstream.' },
//   { icon: Users, title: 'Experienced Team', description: 'Seasoned engineers, designers, and strategists with deep expertise across domains and industries.' },
//   { icon: Headphones, title: 'Reliable Support', description: 'Dedicated support teams providing SLA-backed assistance, monitoring, and proactive issue resolution 24/7.' },
//   { icon: Layout, title: 'Modern UI/UX Standards', description: 'Beautiful, intuitive interfaces grounded in user research, design systems, and accessibility best practices.' },
//   { icon: Rocket, title: 'Fast Deployment', description: 'Agile delivery methodology, CI/CD pipelines, and DevOps culture that gets your product to market faster.' },
//   { icon: BarChart, title: 'Data-Driven Insights', description: 'Real-time dashboards, analytics, and intelligence built into every solution so decisions are always informed.' },
// ]

// export default function WhyChooseUs() {
//   const sectionRef = useRef(null)
//   const isInView = useInView(sectionRef, { once: true, margin: '-100px' })


//   return (
//     <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-secondary/20 z-0" />
//       <ParticleBackground />

//       <div className="absolute inset-0 bg-dark" />
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//       <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-full blur-[200px]" />

//       <div className="section-padding relative z-10 mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
//             Why SpringVox
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//             Built for{' '}
//             <span className="text-gradient">Enterprise</span>{' '}
//             <span className="text-gradient">Excellence</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             We combine technical depth, design excellence, and strategic thinking to deliver 
//             outcomes that move the needle.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         {/* 
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, i) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="group relative"
//             >
//               <div className="glass rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/[0.05]">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110">
//                   <feature.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

        
        
        
//         */}
//         <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
//           {OurFeatures.map((feature, i) => (
//             <FeatureCard key={feature.title} {...feature} index={i} />
//           ))}
//         </div>
//       </div>

//     </section>
//   )
// }

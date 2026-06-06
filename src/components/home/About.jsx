import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Users, ArrowRight } from 'lucide-react'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(target)
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We pursue cutting-edge research and emerging technologies to build solutions that are years ahead of the curve.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable by Design',
    description: 'From startups to global enterprises, our solutions scale seamlessly as your business grows and evolves.',
  },
  {
    icon: Target,
    title: 'Enterprise Reliability',
    description: 'Our platforms are architected for scale, built with 99.9% uptime standards, and trusted by organizations worldwide.',
  },
  {
    icon: Users,
    title: 'Digital Transformation',
    description: 'We don\'t just build software — we partner with organizations to drive complete digital evolution.',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  
const values = [
  { label: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
  { label: "Scalability", description: "Solutions that grow with your business" },
  { label: "Reliability", description: "Enterprise-grade stability and performance" },
  { label: "Security", description: "Zero-trust architecture end-to-end" },
];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}

{/* bg-[radial-gradient(ellipse_at_bottom_left,_r */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" /> 
      {/* <ParticleBackground /> */}
      
      <div className="absolute inset-0 bgdark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-dark via-charcoal/30 to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" /> */}

      <div className="section-padding relative z-10 mx-auto">
          <div class="lg:max-w-[75%] border4 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                          >
                            <span className="text-sm text-gray-300">About SpringVox</span>
                          </motion.div>

              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                A Forward-Thinking{' '}
                <br class="hidden lg:block" />
                <span className="text-gradient text3xl">Technology</span>{' '}
                <span className="text-gradient text3xl">Company</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-400 leading-relaxed"
            >
              <p>
                SpringVox Solution Limited is a premier technology company specializing in software 
                development, enterprise solutions, artificial intelligence, cybersecurity, VoIP communication systems and digital transformation. 
                We build our own innovative products while delivering world-class technology services 
                to organizations across industries.
              </p>
              {/* <p>
                Our mission is to harness the power of emerging technologies to solve real-world 
                challenges — making businesses smarter, faster, and more competitive in the digital age.
              </p> */}
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 mt-8"
            >
              <a href="#services" className="btn-primary flex items-center gap-2">
                Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div> */}
          </div>
        {/* <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"> */}
          {/* Left Column */}

          {/* Right Column - Feature Cards */}
          {/* <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          
      <div className="border4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
        <div>
          <div className="relative">
            <div className="relative
            bg-[#111820] border border-white/5
             rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/5
            ">
              <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-gray-400 leading-relaxed">To empower businesses with innovative, scalable, and secure technology solutions that drive digital transformation and sustainable growth.</p>
            </div>
            <div className="relative
                        bg-[#111820] border border-white/5
                         rounded-2xl p-6 h-full glow-border transition-all duration-500 hover:bg-white/5 mt-5
">
              <h3 className="text-lg font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-gray-400 leading-relaxed">To be a global leader in intelligent technology solutions, setting the standard for innovation, reliability, and enterprise excellence.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Our Core Values</h3>
          <div className="space-y-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#029ab144] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0299b1]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{v.label}</h4>
                  <p className="text-xs text-gray-400 mt-1">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-6 rounded-xl  bg-[#111820] border border-white/5"
          >
            <p className="text-sm text-gray-400 leading-relaxed">
              Since 2020, we have been at the forefront of digital transformation, 
              delivering innovative solutions that empower businesses worldwide. 
              Our team of 100+ experts combines deep technical expertise with 
              a passion for excellence.
            </p>
          </motion.div>
        </div>
      </div>




        {/* </div> */}
      </div>
    </section>
  )
}

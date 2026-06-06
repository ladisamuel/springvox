import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import {
  Target, Zap, Shield, Users, Globe, Award, TrendingUp, Heart,
  ArrowRight, Sparkles, MapPin, Calendar, ChevronRight, Building2,
  Cpu, Rocket, Lightbulb, Handshake, CheckCircle2
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '2019', label: 'Founded', suffix: '' },
  { value: '150', label: 'Team Members', suffix: '+' },
  { value: '40', label: 'Enterprise Clients', suffix: '+' },
  { value: '12', label: 'Countries', suffix: '' },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: "We don't follow trends — we set them. Every solution is built with tomorrow's technology in mind.",
    color: '#0299b1',
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description: "Security isn't an afterthought. It's woven into every line of code, every architecture decision, every deployment.",
    color: '#05d8f5',
  },
  {
    icon: Users,
    title: 'People-Centric',
    description: 'Technology serves people. We design for the humans behind the screen — intuitive, accessible, and empowering.',
    color: '#45919D',
  },
  {
    icon: Handshake,
    title: 'Partnership Mindset',
    description: "We don't just deliver projects. We become an extension of your team, invested in your long-term success.",
    color: '#0299b1',
  },
]

const milestones = [
  { year: '2019', title: 'SpringVox Founded', desc: 'Started with a vision to bridge the gap between enterprise needs and cutting-edge technology.' },
  { year: '2020', title: 'First Enterprise Contract', desc: 'Secured our first Fortune 500 client, validating our approach to scalable software architecture.' },
  { year: '2021', title: 'ReKallIQ R&D Begins', desc: 'Initiated research into private AI and RAG systems for enterprise knowledge management.' },
  { year: '2022', title: 'Global Expansion', desc: 'Opened offices in London and Singapore. Team grew to 80+ engineers and designers.' },
  { year: '2023', title: 'AegisIDS Launch', desc: 'Released our enterprise cybersecurity platform with real-time threat detection.' },
  { year: '2024', title: 'ReKallIQ Pilot', desc: 'Launched pilot programme for ReKallIQ with select enterprise partners.' },
  { year: '2025', title: 'SpringVox PBX', desc: 'Entering the unified communications space with a cloud-native PBX platform.' },
  { year: '2026', title: 'Next Frontier', desc: 'Expanding AI capabilities and exploring next-gen automation for global enterprises.' },
]

const leadership = [
  { role: 'Engineering', count: '80+', icon: Cpu, desc: 'Full-stack, DevOps, AI/ML, and security specialists' },
  { role: 'Design', count: '25+', icon: Sparkles, desc: 'UX researchers, product designers, and design system architects' },
  { role: 'Strategy', count: '15+', icon: Target, desc: 'Solution architects, tech leads, and digital transformation consultants' },
  { role: 'Operations', count: '30+', icon: Building2, desc: 'Project managers, QA engineers, and 24/7 support teams' },
]

// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''))
    if (isNaN(num)) { setDisplay(value); return }
    const duration = 2000
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(num * eased)
      setDisplay(String(current) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value, suffix])

  return <span ref={ref}>{display}</span>
}

// ─── Particle Network Canvas ────────────────────────────────────────────────
function ParticleNetwork() {
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * w / 2,
        y: Math.random() * h / 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, w / 2, h / 2)
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w / 2) p.vx *= -1
        if (p.y < 0 || p.y > h / 2) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(2, 153, 177, ${p.alpha})`
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(2, 153, 177, ${0.06 * (1 - dist / 140)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />
}

// ─── Value Card ─────────────────────────────────────────────────────────────
function ValueCard({ value, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })
  const Icon = value.icon

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [6, -6])
  const rotateY = useTransform(x, [-100, 100], [-6, 6])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set(e.clientX - (rect.left + rect.width / 2))
    y.set(e.clientY - (rect.top + rect.height / 2))
  }
  const handleMouseLeave = () => {
    animate(x, 0, { duration: 0.5 })
    animate(y, 0, { duration: 0.5 })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0a1218]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_60px_-12px_rgba(2,153,177,0.12)]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0299b1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-[#0299b1]/20 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700" />

        <div className="relative p-7">
          <div className="relative mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${value.color}15` }}>
              <Icon className="w-5 h-5" style={{ color: value.color }} />
            </div>
            <div className="absolute -inset-1 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: `${value.color}10` }} />
          </div>

          <h3 className="text-white font-semibold text-[15px] mb-2.5 group-hover:text-[#05d8f5] transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-gray-400 text-[13px] leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Timeline Item ───────────────────────────────────────────────────────────
function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`relative flex items-start gap-6 ${index % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''}`}
    >
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-[#0299b1] ring-4 ring-[#0299b1]/20 z-10" />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-[#0299b1]/30 to-transparent min-h-[60px] mt-2" />}
      </div>

      <div className="pb-8 lg:pb-12">
        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase text-[#0299b1] bg-[#0299b1]/10 border border-[#0299b1]/20 mb-2">
          {item.year}
        </span>
        <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{item.desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Leadership Card ─────────────────────────────────────────────────────────
function LeadershipCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/[0.06] bg-[#0a1218]/60 backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-[#0a1218]/80"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#45919D]/10 flex items-center justify-center group-hover:bg-[#0299b1]/15 transition-colors duration-300">
          <Icon className="w-4 h-4 text-[#0299b1]" />
        </div>
        <span className="text-2xl font-bold text-white tabular-nums">{item.count}</span>
      </div>
      <h4 className="text-white font-semibold text-sm mb-1">{item.role}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

// ─── Main About Page ─────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="relative min-h-screen bg-[#060b10] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(2,153,177,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(5,216,245,0.04),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0299b1]/20 to-transparent" />
      <ParticleNetwork />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0299b1]/20 bg-[#0299b1]/5 mb-8"
            >
              <Building2 className="w-3.5 h-3.5 text-[#0299b1]" />
              <span className="text-[#0299b1] text-xs font-semibold tracking-widest uppercase">About SpringVox</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Engineering </span>
              <span className="bg-gradient-to-r from-[#0299b1] via-[#05d8f5] to-[#45919D] bg-clip-text text-transparent">
                Tomorrow's
              </span>
              <br />
              <span className="text-white">Enterprise</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              SpringVox is a technology company built by engineers, for engineers. We design, build, and deploy the infrastructure that powers the world's most demanding enterprises.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#story" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0299b1] text-white text-sm font-medium hover:bg-[#05d8f5] transition-colors duration-300 group">
                Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:border-[#0299b1]/30 hover:text-white transition-all duration-300">
                Work With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="relative py-12 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''}`}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white tabular-nums tracking-tight mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ────────────────────────────────────────────────────────── */}
      <section id="story" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0299b1] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                From a garage idea to{' '}
                <span className="bg-gradient-to-r from-[#0299b1] to-[#05d8f5] bg-clip-text text-transparent">global impact</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
                <p>SpringVox was founded in 2019 by a group of engineers who were frustrated with the gap between enterprise ambition and technical execution...</p>
                <p>So we built something different. A company that treats every project as if it were our own infrastructure...</p>
                <p>Today, SpringVox powers mission-critical systems for enterprises across four continents...</p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0299b1]" />
                <span className="text-sm text-gray-400">London · Singapore · Lagos · Dubai</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a1218]/60 backdrop-blur-sm p-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0299b1]/30 to-transparent" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#0299b1]/10 blur-[60px]" />

                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <Rocket className="w-5 h-5 text-[#0299b1] mb-2" />
                      <div className="text-xs text-gray-500">Projects Delivered</div>
                      <div className="text-xl font-bold text-white">200+</div>
                    </div>
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <Award className="w-5 h-5 text-[#05d8f5] mb-2" />
                      <div className="text-xs text-gray-500">Industry Awards</div>
                      <div className="text-xl font-bold text-white">14</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <TrendingUp className="w-5 h-5 text-[#45919D] mb-2" />
                      <div className="text-xs text-gray-500">YoY Growth</div>
                      <div className="text-xl font-bold text-white">340%</div>
                    </div>
                    <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <Heart className="w-5 h-5 text-[#0299b1] mb-2" />
                      <div className="text-xs text-gray-500">Client Retention</div>
                      <div className="text-xl font-bold text-white">97%</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map((n) => (
                        <div key={n} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0299b1] to-[#0a1218] border-2 border-[#0a1218] flex items-center justify-center text-[9px] font-bold text-white">
                          SV
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="text-white font-medium">150+</span> team members across 4 offices
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#0299b1] text-sm font-semibold tracking-widest uppercase mb-4 block">What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Our <span className="bg-gradient-to-r from-[#0299b1] to-[#05d8f5] bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[15px] leading-relaxed">
              The principles that guide every decision we make, every product we ship, and every partnership we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#0299b1] text-sm font-semibold tracking-widest uppercase mb-4 block">Our Journey</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              The <span className="bg-gradient-to-r from-[#0299b1] to-[#05d8f5] bg-clip-text text-transparent">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            {milestones.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} isLast={i === milestones.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#0299b1] text-sm font-semibold tracking-widest uppercase mb-4 block">The Team</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Built by <span className="bg-gradient-to-r from-[#0299b1] to-[#05d8f5] bg-clip-text text-transparent">Experts</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[15px] leading-relaxed">
              A multidisciplinary team of engineers, designers, and strategists united by a single mission: build technology that matters.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((item, i) => (
              <LeadershipCard key={item.role} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/[0.08] bg-[#0a1218]/80 backdrop-blur-xl p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0299b1]/30 to-transparent" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-[#0299b1]/10 blur-[80px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0299b1]/20 bg-[#0299b1]/5 mb-6">
                <Zap className="w-3.5 h-3.5 text-[#0299b1]" />
                <span className="text-[#0299b1] text-xs font-semibold tracking-widest uppercase">Let's Build Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to <span className="bg-gradient-to-r from-[#0299b1] to-[#05d8f5] bg-clip-text text-transparent">transform</span> your business?
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
                Whether you're modernising legacy systems, launching a new product, or securing your infrastructure — we're here to help.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:hello@springvox.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0299b1] text-white text-sm font-medium hover:bg-[#05d8f5] transition-colors duration-300 group shadow-lg shadow-[#0299b1]/20">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:border-[#0299b1]/30 hover:text-white transition-all duration-300">
                  View Careers
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
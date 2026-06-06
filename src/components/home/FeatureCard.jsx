import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

// ─── Feature Card ───────────────────────────────────────────────────────────
export default function FeatureCard({ feature, index }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })
  const Icon = feature.icon

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set(e.clientX - cx)
    y.set(e.clientY - cy)
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
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-[#0a1218]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/[0.12] 
      ">
        {/* hover:shadow-[0_0_60px_-12px_rgba(2,153,177,0.15)] */}
        {/* Gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${feature.accent} via-[${feature.color}]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700`} />

        <div className="relative p-5">
          {/* Top row: icon + stat */}
          <div className="flex items-start justify-between mb-5">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#45919D]/10 flex items-center justify-center group-hover:bg-[#0299b1]/15 transition-all duration-500 group-hover:scale-110">
                <Icon className="w-5 h-5 text-[#0299b1]" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-[#0299b1]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-white tabular-nums tracking-tight">
                {feature.stat.includes('M') || feature.stat.includes('+') || feature.stat.includes('<') || feature.stat.includes('x') || feature.stat.includes('%') || feature.stat.includes('WCAG')
                  ? <span className="text-[#05d8f5]">{feature.stat}</span>
                  : <AnimatedCounter value={feature.stat} />
                }
              </div>
              <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">{feature.statLabel}</div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-[15px] mb-2 group-hover:text-[#05d8f5] transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-[11px] leading-relaxed">
            {feature.description}
          </p>

          {/* Hover arrow */}
          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#0299b1]/0 group-hover:text-[#0299b1]/80 transition-all duration-500 translate-y2 group-hover:translate-y-0">
            Learn more
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
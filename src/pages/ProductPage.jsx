import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Phone,
  Clock,
  Activity,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Globe,
  Server,
  Lock,
  BarChart3,
  Cpu,
  Radio,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "rekalliq",
    name: "ReKallIQ",
    subtitle: "AI-Powered Enterprise Intelligence",
    icon: Zap,
    color: "cyan",
    status: "Generally Available",
    description:
      "ReKallIQ is SpringVox's flagship enterprise intelligence platform. It combines large language models, cognitive automation, and real-time analytics to transform how organizations process information, make decisions, and automate workflows — at scale.",
    features: [
      "Natural language query across enterprise data",
      "Intelligent process automation & orchestration",
      "Real-time cognitive dashboards & reporting",
      "Seamless ERP/CRM integration via APIs",
      "Role-based access control & audit logs",
      "On-premise or cloud deployment options",
    ],
    badges: [
      "Enterprise Analytics",
      "Workflow Automation",
      "Decision Intelligence",
      "Data Consolidation",
    ],
    timeline: [
      {
        time: "2:47:03 AM",
        event: "Latency spike detected",
        detail: "Dashboard queries crossed 600ms and climbing fast",
        type: "warning",
      },
      {
        time: "2:47:09 AM",
        event: "Auto-scaling triggered",
        detail: "Cognitive processing nodes scaled from 4 to 12 instances",
        type: "info",
      },
      {
        time: "2:47:11 AM",
        event: "Alert rule fired",
        detail: "p99 > 800ms on analytics API threshold breached for 30s",
        type: "alert",
      },
      {
        time: "2:47:15 AM",
        event: "Team notified via Slack",
        detail: "#platform-alerts channel pinged",
        type: "info",
      },
      {
        time: "2:47:28 AM",
        event: "Incident resolved",
        detail: "Query cache warmed, latency normalized to 120ms",
        type: "success",
      },
    ],
    alertCard: {
      title: "p99 spike on analytics-api",
      metric: "1.36s",
      threshold: "800ms",
      severity: "critical",
      service: "api-gateway",
    },
  },
  // {
  //   id: "aegisids",
  //   name: "AegisIDS",
  //   subtitle: "Enterprise Cybersecurity & IDS",
  //   icon: Shield,
  //   color: "emerald",
  //   status: "Generally Available",
  //   description:
  //     "AegisIDS is a next-generation cybersecurity platform built to detect, respond to, and neutralize threats before they cause damage. With real-time behavioral analysis, threat intelligence feeds, and automated incident response.",
  //   features: [
  //     "Real-time network intrusion detection & prevention",
  //     "Behavioral anomaly detection with ML models",
  //     "Automated threat response playbooks",
  //     "Compliance reporting (SOC2, ISO 27001, GDPR)",
  //     "Zero-trust architecture enforcement",
  //     "24/7 threat intelligence feed integration",
  //   ],
  //   badges: [
  //     "Network Security",
  //     "Threat Intelligence",
  //     "Compliance",
  //     "Incident Response",
  //   ],
  //   timeline: [
  //     {
  //       time: "2:47:03 AM",
  //       event: "Suspicious traffic detected",
  //       detail: "Outbound connection to known C2 server from host-42",
  //       type: "warning",
  //     },
  //     {
  //       time: "2:47:05 AM",
  //       event: "Behavioral analysis triggered",
  //       detail: "ML model flagged anomalous process tree pattern",
  //       type: "info",
  //     },
  //     {
  //       time: "2:47:08 AM",
  //       event: "Alert rule fired",
  //       detail: "Critical threat signature match on endpoint protection",
  //       type: "alert",
  //     },
  //     {
  //       time: "2:47:10 AM",
  //       event: "Auto-isolation executed",
  //       detail: "Host-42 network segment quarantined automatically",
  //       type: "success",
  //     },
  //     {
  //       time: "2:47:22 AM",
  //       event: "Threat neutralized",
  //       detail: "Malicious process terminated, forensic snapshot captured",
  //       type: "success",
  //     },
  //   ],
  //   alertCard: {
  //     title: "Critical threat on endpoint-42",
  //     metric: "Severity 9.8",
  //     threshold: "7.0",
  //     severity: "critical",
  //     service: "aegis-engine",
  //   },
  // },
  {
    id: "springVox-PBX",
    name: "SpringVox PBX",
    subtitle: "Cloud-Native Call Center & VoIP",
    icon: Phone,
    color: "blue",
    status: "Generally Available",
    description:
      "SpringVox PBX reimagines enterprise communications with a modern, cloud-native VoIP and call center platform. Built for reliability and scale, with intelligent routing, real-time analytics, and seamless CRM integration.",
    features: [
      "Enterprise-grade VoIP with 99.99% uptime SLA",
      "Intelligent call routing & IVR automation",
      "Real-time agent monitoring & analytics",
      "Omnichannel: voice, chat, SMS, email",
      "CRM integration (Salesforce, HubSpot, custom)",
      "Scalable from 10 to 10,000+ agents",
    ],
    badges: [
      "Call Centers",
      "Enterprise VoIP",
      "Customer Support",
      "Remote Teams",
    ],
    timeline: [
      {
        time: "2:47:03 AM",
        event: "Call drop spike detected",
        detail: "SIP trunk failure rate crossed 5% on us-east-1",
        type: "warning",
      },
      {
        time: "2:47:06 AM",
        event: "Failover initiated",
        detail: "Traffic rerouted to us-west-2 backup cluster",
        type: "info",
      },
      {
        time: "2:47:09 AM",
        event: "Alert rule fired",
        detail: "PSTN gateway health check failed for 45s",
        type: "alert",
      },
      {
        time: "2:47:14 AM",
        event: "Auto-scaling triggered",
        detail: "Media server pool expanded from 8 to 20 nodes",
        type: "info",
      },
      {
        time: "2:47:31 AM",
        event: "Service restored",
        detail: "Call completion rate back to 99.97%, QoS nominal",
        type: "success",
      },
    ],
    alertCard: {
      title: "SIP failure on us-east-1",
      metric: "5.2% drop rate",
      threshold: "1.0%",
      severity: "critical",
      service: "sip-gateway",
    },
  },
];

const colorMap = {
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    glow: "shadow-cyan-500/20",
    badge: "bg-cyan-950/50 text-cyan-400 border-cyan-500/30",
    dot: "bg-cyan-400",
    line: "bg-cyan-500/30",
    alertBg: "bg-cyan-950/30",
    alertBorder: "border-cyan-500/30",
    alertText: "text-cyan-400",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-emerald-500/20",
    badge: "bg-emerald-950/50 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-400",
    line: "bg-emerald-500/30",
    alertBg: "bg-emerald-950/30",
    alertBorder: "border-emerald-500/30",
    alertText: "text-emerald-400",
  },
  blue: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/20",
    badge: "bg-blue-950/50 text-blue-400 border-blue-500/30",
    dot: "bg-blue-400",
    line: "bg-blue-500/30",
    alertBg: "bg-blue-950/30",
    alertBorder: "border-blue-500/30",
    alertText: "text-blue-400",
  },
};

const TimelineItem = ({ item, color, isLast, index, total }) => {
  const typeColors = {
    warning: "text-amber-400",
    info: "text-slate-400",
    alert: "text-red-400",
    success: "text-emerald-400",
  };

  const dotColors = {
    warning: "bg-amber-500 border-amber-500/50",
    info: "bg-slate-500 border-slate-500/50",
    alert: "bg-red-500 border-red-500/50 animate-pulse",
    success: "bg-emerald-500 border-emerald-500/50",
  };

  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-3 h-3 rounded-full border-2 ${dotColors[item.type]} ${index === 0 ? "ring-4 ring-cyan-500/10" : ""}`}
        />
        {!isLast && (
          <div className={`w-px flex-1 min-h-[40px] ${color.line}`} />
        )}
      </div>
      <div className="pb-6 flex-1">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-xs font-mono text-slate-500">{item.time}</span>
          <span className={`text-sm font-medium ${typeColors[item.type]}`}>
            {item.event}
          </span>
        </div>
        <p className="text-xs text-slate-500 font-mono leading-relaxed">
          {item.detail}
        </p>
      </div>
    </div>
  );
};

const AlertCard = ({ alert, color }) => (
  <div
    className={`relative rounded-lg border ${color.alertBorder} ${color.alertBg} p-4 backdrop-blur-sm`}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
      <span className="text-[10px] font-mono font-bold tracking-wider text-red-400 uppercase">
        Alert Triggered
      </span>
    </div>
    <h4 className="text-sm font-bold text-white mb-3">{alert.title}</h4>
    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
      <div>
        <p className="text-slate-500 mb-0.5">Current</p>
        <p className={`font-bold ${color.alertText}`}>{alert.metric}</p>
      </div>
      <div>
        <p className="text-slate-500 mb-0.5">Threshold</p>
        <p className="text-slate-400">{alert.threshold}</p>
      </div>
      <div>
        <p className="text-slate-500 mb-0.5">Severity</p>
        <p className="text-red-400 font-bold uppercase">{alert.severity}</p>
      </div>
      <div>
        <p className="text-slate-500 mb-0.5">Service</p>
        <p className="text-slate-400">{alert.service}</p>
      </div>
    </div>
  </div>
);

const ProductSlide = ({ product, index, total, activeIndex }) => {
  const colors = colorMap[product.color];
  const Icon = product.icon;
  const isActive = index === activeIndex;

  if (!isActive) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-in fade-in duration-500">
      {/* Left: Product Info */}
      <div className="space-y-2 border4">
        <div>
          <div className="flex items-center border4 gap-3 mb-2">
            <div className={`border-l pl-2 h-full ${colors.text}`}>
              <Icon className={`w-4 h-4 ${colors.text}`} />
            </div>
            {/* <div className={`w-6 h-6 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
            </div> */}
            <span
              className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${colors.badge}`}
            >
              {product.status}
            </span>
          </div>

          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
            {product.name}
          </h2>
          <p className={`text-sm font-medium ${colors.text} mb-2`}>
            {product.subtitle}
          </p>
          <p className="text-slate-400 leadingrelaxed text-sm max-w-lg">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.badges.map((badge, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Key Features
          </p>
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate-8000 border border-slate-700 flex items-center justify-center">
                <CheckCircle2 className={`w-3 h-3 ${colors.text}`} />
              </div>
              <span className="text-slate-300 text-xs">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap text-xs gap-4">
          <a
            href="#"
            className={`btnprimary rounded-lg px-6 bg-${product.color}-600 flex gap-3 items-center`}
          >
            Request {product.name} Demo
          </a>
          <a href="#" className="btn-secondary text-xs flex gap-3 items-center">
            View Documentation
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> 
      </div>

      {/* Right: Timeline Visualization */}
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            {index + 1} of {total}
          </span>
          <span className="text-xs font-mono text-slate-500">
            {product.timeline[0].time}
          </span>
        </div>

        <div className="relative bg-[#0d1117]/50 rounded-xl border border-slate-800/50 p-6 backdrop-blur-sm">
          <div className="absolute top-4 right-4">
            <AlertCard alert={product.alertCard} color={colors} />
          </div>

          <div className="mt-24">
            <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
              Incident Timeline
            </p>
            <div className="space-y-0">
              {product.timeline.map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  color={colors}
                  isLast={i === product.timeline.length - 1}
                  index={i}
                  total={product.timeline.length}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/50">
            <p className="text-xs text-slate-500 font-mono">
              <span className="text-emerald-400">Resolved</span> in 28 seconds.
              Scroll through each moment {product.name} caught it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpringVoxProductsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = products.length;

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const currentProduct = products[activeIndex];
  const colors = colorMap[currentProduct.color];

  return (
    <div className="min-hscreen section-padding pt-20 bg-[#0a0f14] text-white font-sans antialiased selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-16  mx-auto">


        <div className="section-padding relative z-10">
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
              <span className="text-[#0299b1] text-xs font-semibold tracking-widest uppercase">Our Products</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Platforms Built for </span>
              <span className="bg-gradient-to-r from-[#0299b1] via-[#05d8f5] to-[#45919D] bg-clip-text text-transparent">
                Enterprise Scale
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
Three flagship products — each engineered to solve critical
            enterprise challenges with intelligence, security, and scale.            </p>
 
          </motion.div>
        </div>




 
      </section>

      {/* Product Tabs */}
      <section className=" mx-auto mb-8">
        <div className="flex flex-wrap justify-center items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {products.map((product, index) => {
            const isActive = index === activeIndex;
            const pColors = colorMap[product.color];
            return (
              <button
                key={product.id}
                onClick={() => goToSlide(index)}
                className={`
                  
                  flex items-center gap-2 px-4 py-2.5 roundedfull text-sm font-medium transition-all duration-300 border whitespace-nowrap

                  btn-secondary
                  
                  
                  ${
                  isActive
                    ? `bg-slate-800 border-slate-600 text-white ${pColors.dot} shadow-lg`
                    : "bg-transparent border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300"
                }`}
              >
                <product.icon
                  className={`w-4 h-4 ${isActive ? pColors.text : "text-slate-600"}`}
                />
                {product.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="border-t border-slate-800/60" />
      </div>

      {/* Carousel Content */}
      <section className="relative  mx-auto py-12 lg:py-16">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:-left-4 z-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 lg:-right-4 z-10">
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Content */}
        <div className="overflow-hidden">
          {products.map((product, index) => (
            <ProductSlide
              key={product.id}
              product={product}
              index={index}
              total={totalSlides}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-cyan-400"
                  : "w-1.5 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className=" mx-auto pb-20 pt-8">
        <div className="bg-[#0d1117] border border-slate-800/60 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Not sure which product fits your needs?
            </h3>
            <p className="text-slate-400">
              Talk to a SpringVox solutions expert — we'll guide you to the
              right fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors duration-200"
            >
              Book a Free Consultation
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold transition-colors duration-200"
            >
              Compare Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpringVoxProductsCarousel;

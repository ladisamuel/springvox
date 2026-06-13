import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Zap, 
  Shield, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle, 
  Info,
  XCircle,
  CheckCircle,
  Cpu,
  Server,
  Lock,
  ChevronDown
} from 'lucide-react';

// ============================================
// DATA
// ============================================

const products = [
  {
    id: 'rekalliq',
    name: 'ReKallIQ',
    subtitle: 'AI-Powered Enterprise Intelligence & Automation',
    icon: Zap,
    color: 'cyan',
    status: 'Generally Available',
    description: 'ReKallIQ is SpringVox\'s flagship enterprise intelligence platform. It combines large language models, cognitive automation, and real-time analytics to transform how organizations process information, make decisions, and automate workflows — at scale.',
    features: [
      'Natural language query across enterprise data',
      'Intelligent process automation & orchestration',
      'Real-time cognitive dashboards & reporting',
      'Seamless ERP/CRM integration via APIs',
      'Role-based access control & audit logs',
      'On-premise or cloud deployment options'
    ],
    badges: ['Enterprise Analytics', 'Workflow Automation', 'Decision Intelligence', 'Data Consolidation'],
    timeline: [
      { time: '2:47:03 AM', event: 'Latency spike detected', detail: 'Dashboard queries crossed 600ms and climbing fast', type: 'warning' },
      { time: '2:47:09 AM', event: 'Auto-scaling triggered', detail: 'Cognitive processing nodes scaled from 4 to 12 instances', type: 'info' },
      { time: '2:47:11 AM', event: 'Alert rule fired', detail: 'p99 > 800ms on analytics API threshold breached for 30s', type: 'alert' },
      { time: '2:47:15 AM', event: 'Team notified via Slack', detail: '#platform-alerts channel pinged', type: 'info' },
      { time: '2:47:28 AM', event: 'Incident resolved', detail: 'Query cache warmed, latency normalized to 120ms', type: 'success' }
    ],
    alertCard: {
      title: 'p99 spike on analytics-api',
      metric: '1.36s',
      threshold: '800ms',
      severity: 'critical',
      service: 'api-gateway'
    }
  },
  {
    id: 'aegisids',
    name: 'AegisIDS',
    subtitle: 'Enterprise Cybersecurity & Intrusion Detection System',
    icon: Shield,
    color: 'emerald',
    status: 'Generally Available',
    description: 'AegisIDS is a next-generation cybersecurity platform built to detect, respond to, and neutralize threats before they cause damage. With real-time behavioral analysis, threat intelligence feeds, and automated incident response.',
    features: [
      'Real-time network intrusion detection & prevention',
      'Behavioral anomaly detection with ML models',
      'Automated threat response playbooks',
      'Compliance reporting (SOC2, ISO 27001, GDPR)',
      'Zero-trust architecture enforcement',
      '24/7 threat intelligence feed integration'
    ],
    badges: ['Network Security', 'Threat Intelligence', 'Compliance', 'Incident Response'],
    timeline: [
      { time: '2:47:03 AM', event: 'Suspicious traffic detected', detail: 'Outbound connection to known C2 server from host-42', type: 'warning' },
      { time: '2:47:05 AM', event: 'Behavioral analysis triggered', detail: 'ML model flagged anomalous process tree pattern', type: 'info' },
      { time: '2:47:08 AM', event: 'Alert rule fired', detail: 'Critical threat signature match on endpoint protection', type: 'alert' },
      { time: '2:47:10 AM', event: 'Auto-isolation executed', detail: 'Host-42 network segment quarantined automatically', type: 'success' },
      { time: '2:47:22 AM', event: 'Threat neutralized', detail: 'Malicious process terminated, forensic snapshot captured', type: 'success' }
    ],
    alertCard: {
      title: 'Critical threat on endpoint-42',
      metric: 'Severity 9.8',
      threshold: '7.0',
      severity: 'critical',
      service: 'aegis-engine'
    }
  },
  {
    id: 'truekall',
    name: 'TrueKall',
    subtitle: 'Cloud-Native Call Center & VoIP Communication Platform',
    icon: Phone,
    color: 'blue',
    status: 'Generally Available',
    description: 'TrueKall reimagines enterprise communications with a modern, cloud-native VoIP and call center platform. Built for reliability and scale, with intelligent routing, real-time analytics, and seamless CRM integration.',
    features: [
      'Enterprise-grade VoIP with 99.99% uptime SLA',
      'Intelligent call routing & IVR automation',
      'Real-time agent monitoring & analytics',
      'Omnichannel: voice, chat, SMS, email',
      'CRM integration (Salesforce, HubSpot, custom)',
      'Scalable from 10 to 10,000+ agents'
    ],
    badges: ['Call Centers', 'Enterprise VoIP', 'Customer Support', 'Remote Teams'],
    timeline: [
      { time: '2:47:03 AM', event: 'Call drop spike detected', detail: 'SIP trunk failure rate crossed 5% on us-east-1', type: 'warning' },
      { time: '2:47:06 AM', event: 'Failover initiated', detail: 'Traffic rerouted to us-west-2 backup cluster', type: 'info' },
      { time: '2:47:09 AM', event: 'Alert rule fired', detail: 'PSTN gateway health check failed for 45s', type: 'alert' },
      { time: '2:47:14 AM', event: 'Auto-scaling triggered', detail: 'Media server pool expanded from 8 to 20 nodes', type: 'info' },
      { time: '2:47:31 AM', event: 'Service restored', detail: 'Call completion rate back to 99.97%, QoS nominal', type: 'success' }
    ],
    alertCard: {
      title: 'SIP failure on us-east-1',
      metric: '5.2% drop rate',
      threshold: '1.0%',
      severity: 'critical',
      service: 'sip-gateway'
    }
  }
];

const roadmapItems = [
  {
    category: 'AI Platform',
    quarter: 'Q3 2025',
    title: 'Project Aurora',
    description: 'Next-generation multimodal AI platform for enterprise content understanding, generation, and synthesis.',
    icon: Cpu,
    color: 'cyan'
  },
  {
    category: 'Data Platform',
    quarter: 'Q4 2025',
    title: 'Project Nexus',
    description: 'Unified enterprise data mesh platform connecting disparate data sources into a single, governed intelligence layer.',
    icon: Server,
    color: 'emerald'
  },
  {
    category: 'Automation',
    quarter: 'Q1 2026',
    title: 'Project Orion',
    description: 'Low-code robotic process automation suite enabling non-technical teams to automate complex business workflows.',
    icon: Zap,
    color: 'blue'
  },
  {
    category: 'Security',
    quarter: 'Q2 2026',
    title: 'Project Cipher',
    description: 'Quantum-resistant cryptography and key management infrastructure for forward-secure enterprise environments.',
    icon: Lock,
    color: 'purple'
  }
];

// ============================================
// COLOR MAP
// ============================================

const colorMap = {
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    badge: 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30',
    dot: 'bg-cyan-400',
    alertBg: 'bg-cyan-950/30',
    alertBorder: 'border-cyan-500/30',
    alertText: 'text-cyan-400',
    btn: 'bg-cyan-600 hover:bg-cyan-500',
    glow: 'shadow-cyan-500/20'
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    badge: 'bg-emerald-950/50 text-emerald-400 border-emerald-500/30',
    dot: 'bg-emerald-400',
    alertBg: 'bg-emerald-950/30',
    alertBorder: 'border-emerald-500/30',
    alertText: 'text-emerald-400',
    btn: 'bg-emerald-600 hover:bg-emerald-500',
    glow: 'shadow-emerald-500/20'
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    badge: 'bg-blue-950/50 text-blue-400 border-blue-500/30',
    dot: 'bg-blue-400',
    alertBg: 'bg-blue-950/30',
    alertBorder: 'border-blue-500/30',
    alertText: 'text-blue-400',
    btn: 'bg-blue-600 hover:bg-blue-500',
    glow: 'shadow-blue-500/20'
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    badge: 'bg-purple-950/50 text-purple-400 border-purple-500/30',
    dot: 'bg-purple-400',
    alertBg: 'bg-purple-950/30',
    alertBorder: 'border-purple-500/30',
    alertText: 'text-purple-400',
    btn: 'bg-purple-600 hover:bg-purple-500',
    glow: 'shadow-purple-500/20'
  }
};

// ============================================
// TIMELINE TYPE CONFIG
// ============================================

const typeConfig = {
  warning: { 
    dot: 'bg-amber-500 border-amber-500/50', 
    text: 'text-amber-400', 
    Icon: AlertTriangle 
  },
  info: { 
    dot: 'bg-slate-500 border-slate-500/50', 
    text: 'text-slate-400', 
    Icon: Info 
  },
  alert: { 
    dot: 'bg-red-500 border-red-500/50 animate-pulse', 
    text: 'text-red-400', 
    Icon: XCircle 
  },
  success: { 
    dot: 'bg-emerald-500 border-emerald-500/50', 
    text: 'text-emerald-400', 
    Icon: CheckCircle 
  }
};

// ============================================
// SUB-COMPONENTS
// ============================================

const TimelineItem = ({ item, isLast }) => {
  const config = typeConfig[item.type];

  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-3 h-3 rounded-full border-2 ${config.dot} flex items-center justify-center`}>
          <div className="w-1 h-1 rounded-full bg-white/80" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 min-h-[40px] bg-slate-800 group-hover:bg-slate-700 transition-colors" />
        )}
      </div>

      <div className="pb-6 flex-1">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-xs font-mono text-slate-500 tabular-nums">
            {item.time}
          </span>
          <span className={`text-sm font-semibold ${config.text}`}>
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

const AlertCard = ({ alert, color }) => {
  return (
    <div className={`relative rounded-lg border ${color.alertBorder} ${color.alertBg} p-5 backdrop-blur-sm shadow-lg`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-red-400 uppercase">
          Alert Triggered
        </span>
      </div>

      <h4 className="text-base font-bold text-white mb-4 tracking-tight">
        {alert.title}
      </h4>

      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div>
          <p className="text-slate-500 mb-1 uppercase tracking-wider text-[10px]">
            Current
          </p>
          <p className={`font-bold text-lg ${color.alertText}`}>
            {alert.metric}
          </p>
        </div>
        <div>
          <p className="text-slate-500 mb-1 uppercase tracking-wider text-[10px]">
            Threshold
          </p>
          <p className="text-slate-400 font-medium">
            {alert.threshold}
          </p>
        </div>
        <div>
          <p className="text-slate-500 mb-1 uppercase tracking-wider text-[10px]">
            Severity
          </p>
          <p className="text-red-400 font-bold uppercase tracking-wider">
            {alert.severity}
          </p>
        </div>
        <div>
          <p className="text-slate-500 mb-1 uppercase tracking-wider text-[10px]">
            Service
          </p>
          <p className="text-slate-400 font-medium">
            {alert.service}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductSlide = ({ product, index, total }) => {
  const colors = colorMap[product.color];
  const Icon = product.icon;

  return (
    <div className="h-full w-full bg-[#0a0f14] overflow-y-auto lg:overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="h-full w-full flex items-center pl-20 lg:pl-36 pr-4 lg:pr-12 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-7xl mx-auto w-full">

          <div className="space-y-4 lg:space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-3 lg:mb-4">
                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center shadow-lg`}>
                  <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${colors.text}`} />
                </div>
                <span className={`text-[10px] lg:text-xs font-bold tracking-[0.15em] uppercase px-3 lg:px-4 py-1 lg:py-1.5 rounded-full border ${colors.badge}`}>
                  {product.status}
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 lg:mb-3 tracking-tight leading-none">
                {product.name}
              </h2>

              <p className={`text-sm lg:text-base font-semibold ${colors.text} mb-3 lg:mb-4`}>
                {product.subtitle}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm lg:text-base max-w-lg">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge, i) => (
                <span 
                  key={i} 
                  className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="space-y-0.5">
              <p className="text-[10px] lg:text-xs font-bold tracking-[0.15em] text-slate-500 uppercase mb-2 lg:mb-3">
                Key Features
              </p>
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 py-1.5 lg:py-2">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-slate-500" />
                  </div>
                  <span className="text-slate-300 text-xs lg:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:gap-4 pt-1">
              <a 
                href="#" 
                className={`inline-flex items-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-lg ${colors.btn} text-white text-xs lg:text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl`}
              >
                Request {product.name} Demo
              </a>
              <a 
                href="#" 
                className="inline-flex items-center text-slate-400 hover:text-white text-xs lg:text-sm font-medium transition-colors duration-200 group"
              >
                View Documentation 
                <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
{/* half part */}
{/* second part */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <span className="text-[10px] lg:text-xs font-mono text-slate-500 font-bold tracking-wider">
                {index + 1} OF {total}
              </span>
              <span className="text-[10px] lg:text-xs font-mono text-slate-500 tabular-nums">
                {product.timeline[0].time}
              </span>
            </div>

            <div className="relative bg-[#0d1117]/60 rounded-xl border border-slate-800/60 p-4 lg:p-8 backdrop-blur-sm">
              <div className="mb-6 lg:mb-0 lg:absolute lg:top-4 lg:right-4 lg:w-56 xl:w-64 z-10">
                <AlertCard alert={product.alertCard} color={colors} />
              </div>

              <div className="lg:mt-36 xl:mt-32">
                <p className="text-[10px] lg:text-xs font-mono text-slate-500 mb-4 lg:mb-5 uppercase tracking-[0.15em] font-bold">
                  Incident Timeline
                </p>
                <div className="space-y-0">
                  {product.timeline.map((item, i) => (
                    <TimelineItem 
                      key={i} 
                      item={item} 
                      isLast={i === product.timeline.length - 1} 
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 lg:mt-6 pt-4 lg:pt-5 border-t border-slate-800/50">
                <p className="text-[10px] lg:text-xs text-slate-500 font-mono leading-relaxed">
                  <span className="text-emerald-400 font-semibold">Resolved</span> in 28 seconds. Scroll through each moment {product.name} caught it.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================

const ProductsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const totalSlides = products.length;
  const SCROLL_SPACING = 1.2; // Each slide gets 120vh of scroll space for smooth snap feel

  // ============================================
  // SCROLL TRACKING - Fixed for proper snap behavior
  // ============================================

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const wrapperRect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      // Only track when carousel is in view
      if (wrapperRect.bottom < 0 || wrapperRect.top > vh) return;

      const wrapperTop = wrapper.offsetTop;
      const slideHeight = vh * SCROLL_SPACING;
      const totalScrollable = slideHeight * totalSlides;
      const scrolled = window.scrollY - wrapperTop + vh * 0.1; // Small offset for sticky top

      // Calculate which slide is active based on scroll position
      // Each slide occupies a full snap zone
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setProgress(rawProgress);

      const newIndex = Math.min(totalSlides - 1, Math.floor(rawProgress * totalSlides));
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, totalSlides]);

  // ============================================
  // SCROLL TO SLIDE - Snap to exact slide start
  // ============================================

  const scrollToSlide = useCallback((index) => {
    if (!wrapperRef.current) return;

    const vh = window.innerHeight;
    const wrapperTop = wrapperRef.current.offsetTop;
    const slideHeight = vh * SCROLL_SPACING;
    const targetScroll = wrapperTop + (slideHeight * index) - vh * 0.1;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, []);

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="bg-[#0a0f14] text-white font-sans antialiased selection:bg-cyan-500/30">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative max-w-4xl py-24 lg:py-32">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-6">
            — Our Products
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
            Platforms Built for <span className="text-cyan-400">Enterprise Scale</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
            Three flagship products — and more in development — each engineered to solve critical enterprise challenges with intelligence, security, and scale.
          </p>

          <div className="flex flex-wrap gap-3">
            {products.map((product) => {
              const pColors = colorMap[product.color];
              return (
                <button
                  key={product.id}
                  onClick={() => {
                    const carouselTop = wrapperRef.current?.offsetTop || 0;
                    window.scrollTo({ top: carouselTop + 50, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${pColors.border} ${pColors.bg} ${pColors.text} hover:brightness-110`}
                >
                  <product.icon className="w-4 h-4" />
                  {product.name}
                </button>
              );
            })}
            <span className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-slate-800 text-slate-500">
              Coming Soon
            </span>
          </div>

          <div className="mt-20 flex items-center gap-2 text-slate-600 animate-bounce">
            <span className="text-xs font-mono uppercase tracking-widest">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CAROUSEL SECTION - Fixed Implementation */}
      {/* ============================================ */}
      <div 
        ref={wrapperRef} 
        className="relative"
      >
        {products.map((product, i) => {
          const isActive = i === activeIndex;
          // Higher index = higher z-index so later slides stack on top
          const stackZIndex = 10 + i;

          return (
            <div 
              key={product.id}
              className="relative w-full"
              style={{ 
                height: `${SCROLL_SPACING * 100}vh`,
              }}
            >
              {/* Sticky container - pinned with proper stacking */}
              <div 
                className="sticky w-full overflow-hidden rounded-none lg:rounded-2xl border-y lg:border border-slate-800/60 shadow-2xl mx-auto bg-[#0a0f14]"
                style={{ 
                  height: '80vh', 
                  top: '10vh',
                  zIndex: stackZIndex,
                }}
              >
                {/* ============================================ */}
                {/* PROGRESS BAR - LEFT SIDE */}
                {/* ============================================ */}
                <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 h-[60vh] z-50 flex flex-col justify-between">

                  {/* Background track line */}
                  <div className="absolute left-[5px] top-0 bottom-0 w-px bg-slate-800/80" />

                  {/* Progress fill line - grows with scroll */}
                  <div 
                    className="absolute left-[5px] top-0 w-px bg-cyan-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    style={{ height: `${progress * 100}%` }}
                  />

                  {/* Progress points with product names */}
                  <div className="relative h-full flex flex-col justify-between py-1">
                    {products.map((p, pi) => {
                      const isActivePoint = pi === activeIndex;
                      const isPast = pi < activeIndex;
                      const pColors = colorMap[p.color];

                      return (
                        <button
                          key={p.id}
                          onClick={() => scrollToSlide(pi)}
                          className="relative flex items-center gap-3 group py-2 cursor-pointer"
                        >
                          {/* Dot */}
                          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 flex-shrink-0 ${
                            isActivePoint 
                              ? `${pColors.dot} border-transparent scale-150 shadow-lg` 
                              : isPast 
                                ? 'bg-slate-800 border-slate-600' 
                                : 'bg-slate-900 border-slate-700 group-hover:border-slate-500'
                          }`}>
                            {isActivePoint && (
                              <div className="w-full h-full rounded-full animate-ping bg-cyan-400/30" />
                            )}
                          </div>

                          {/* Product name label - shows on active or hover */}
                          <span className={`text-[10px] lg:text-xs font-bold tracking-[0.1em] uppercase transition-all duration-500 whitespace-nowrap ${
                            isActivePoint 
                              ? 'text-white opacity-100 translate-x-0' 
                              : isPast 
                                ? 'text-slate-500 opacity-70' 
                                : 'text-slate-600 opacity-0 -translate-x-3 group-hover:opacity-40 group-hover:translate-x-0'
                          }`}>
                            {p.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ============================================ */}
                {/* SLIDE CONTENT */}
                {/* ============================================ */}
                <div className="h-full w-full">
                  <ProductSlide product={product} index={i} total={totalSlides} />
                </div>

                {/* ============================================ */}
                {/* BOTTOM RIGHT INDICATORS */}
                {/* ============================================ */}
                <div className="absolute bottom-6 right-6 lg:right-12 z-50 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {products.map((_, pi) => (
                      <button
                        key={pi}
                        onClick={() => scrollToSlide(pi)}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          pi === activeIndex ? 'w-8 bg-cyan-400' : 'w-1.5 bg-slate-700 hover:bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================ */}
      {/* ROADMAP SECTION */}
      {/* ============================================ */}
      <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto py-24 lg:py-32">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative text-center mb-16 lg:mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">
            — Product Roadmap —
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            What's <span className="text-cyan-400">Coming Next</span>
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Our R&D pipeline is active. Here's a glimpse of what SpringVox is building next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, i) => {
            const colors = colorMap[item.color];
            const Icon = item.icon;

            return (
              <div 
                key={i} 
                className="group bg-[#0d1117] border border-slate-800/60 rounded-xl p-6 lg:p-8 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${colors.text}`}>
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-800/60 px-2 py-1 rounded">
                    {item.quarter}
                  </span>
                </div>

                <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <a 
                  href="#" 
                  className={`inline-flex items-center text-xs font-bold ${colors.text} hover:brightness-125 transition-all group/link`}
                >
                  Join Waitlist 
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA BANNER SECTION */}
      {/* ============================================ */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pb-24 lg:pb-32">
        <div className="bg-[#0d1117] border border-slate-800/60 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Not sure which product fits your needs?
            </h3>
            <p className="text-slate-400 text-sm lg:text-base">
              Talk to a SpringVox solutions expert — we'll guide you to the right fit.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg hover:shadow-cyan-500/20"
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

export default ProductsPage;
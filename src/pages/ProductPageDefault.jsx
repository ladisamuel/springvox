import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Server, 
  Cpu, 
  Lock, 
  Phone, 
  Headphones, 
  Zap, 
  BarChart3, 
  FileText, 
  Users, 
  Cloud, 
  Radio,
  Menu,
  X
} from 'lucide-react';

// Custom brand colors matching the SpringVox dark teal/cyan theme
const theme = {
  bg: '#0a0f14',
  bgCard: '#0d1419',
  bgElevated: '#111a20',
  border: '#1a252e',
  borderLight: '#223340',
  textPrimary: '#ffffff',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  accent: '#0ea5e9', // cyan-500
  accentHover: '#0284c7', // cyan-600
  accentLight: '#22d3ee', // cyan-400
  badgeBg: '#0f172a',
  badgeBorder: '#1e293b',
};

const CheckItem = ({ text }) => (
  <div className="flex items-start gap-3 py-3">
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
      <CheckCircle className="w-3 h-3 text-cyan-400" />
    </div>
    <span className="text-slate-300 text-sm leading-relaxed">{text}</span>
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50">
    {children}
  </span>
);

const ProductCard = ({ icon: Icon, title, subtitle, description, features, badges, ctaText, ctaHref, docsHref, iconBg = "bg-cyan-500/10", iconColor = "text-cyan-400", reverse = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    {/* Content Side */}
    <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-lg ${iconBg} border border-cyan-500/20 flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Generally Available</span>
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">{title}</h2>
      <p className="text-cyan-400 text-sm font-medium mb-6">{subtitle}</p>
      
      <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {badges.map((badge, i) => (
          <Badge key={i}>{badge}</Badge>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        <a 
          href={ctaHref}
          className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors duration-200"
        >
          {ctaText}
        </a>
        <a 
          href={docsHref}
          className="inline-flex items-center text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 group"
        >
          View Documentation 
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>

    {/* Features Side */}
    <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
      <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">Key Features</p>
      <div className="space-y-1">
        {features.map((feature, i) => (
          <CheckItem key={i} text={feature} />
        ))}
      </div>
    </div>
  </div>
);

const RoadmapCard = ({ icon: Icon, category, quarter, title, description, iconBg = "bg-cyan-500/10", iconColor = "text-cyan-400" }) => (
  <div className="bg-[#0d1419] border border-[#1a252e] rounded-xl p-6 hover:border-cyan-500/30 transition-colors duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">{category}</span>
      <span className="text-xs font-medium text-slate-500 bg-slate-800/60 px-2 py-1 rounded">{quarter}</span>
    </div>
    <div className={`w-10 h-10 rounded-lg ${iconBg} border border-cyan-500/20 flex items-center justify-center mb-4`}>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors group/link">
      Join Waitlist 
      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
    </a>
  </div>
);

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('ReKallIQ');

  const tabs = ['ReKallIQ', 'AegisIDS', 'TrueKall', 'Coming Soon'];

  return (
    <div className="min-h-screen bg-[#0a0f14] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">— Our Products</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Platforms Built for <span className="text-cyan-400">Enterprise Scale</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
            Three flagship products — and more in development — each engineered to solve critical enterprise challenges with intelligence, security, and scale.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeTab === tab 
                    ? 'bg-slate-800 border-slate-600 text-white' 
                    : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="border-t border-[#1a252e]" />
      </div>

      {/* Products Section */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        {/* ReKallIQ */}
        <ProductCard
          icon={Zap}
          title="ReKallIQ"
          subtitle="AI-Powered Enterprise Intelligence & Automation"
          description="ReKallIQ is SpringVox's flagship enterprise intelligence platform. It combines large language models, cognitive automation, and real-time analytics to transform how organizations process information, make decisions, and automate workflows — at scale."
          features={[
            "Natural language query across enterprise data",
            "Intelligent process automation & orchestration",
            "Real-time cognitive dashboards & reporting",
            "Seamless ERP/CRM integration via APIs",
            "Role-based access control & audit logs",
            "On-premise or cloud deployment options"
          ]}
          badges={["Enterprise Analytics", "Workflow Automation", "Decision Intelligence", "Data Consolidation"]}
          ctaText="Request ReKallIQ Demo"
          ctaHref="#"
          docsHref="#"
        />

        {/* Divider */}
        <div className="border-t border-[#1a252e]" />

        {/* AegisIDS */}
        <ProductCard
          icon={Shield}
          title="AegisIDS"
          subtitle="Enterprise Cybersecurity & Intrusion Detection System"
          description="AegisIDS is a next-generation cybersecurity platform built to detect, respond to, and neutralize threats before they cause damage. With real-time behavioral analysis, threat intelligence feeds, and automated incident response, AegisIDS gives your security team an unfair advantage."
          features={[
            "Real-time network intrusion detection & prevention",
            "Behavioral anomaly detection with ML models",
            "Automated threat response playbooks",
            "Compliance reporting (SOC2, ISO 27001, GDPR)",
            "Zero-trust architecture enforcement",
            "24/7 threat intelligence feed integration"
          ]}
          badges={["Network Security", "Threat Intelligence", "Compliance", "Incident Response"]}
          ctaText="Request AegisIDS Demo"
          ctaHref="#"
          docsHref="#"
          reverse={true}
          iconBg="bg-emerald-500/10"
          iconColor="text-emerald-400"
        />

        {/* Divider */}
        <div className="border-t border-[#1a252e]" />

        {/* TrueKall */}
        <ProductCard
          icon={Phone}
          title="TrueKall"
          subtitle="Cloud-Native Call Center & VoIP Communication Platform"
          description="TrueKall reimagines enterprise communications with a modern, cloud-native VoIP and call center platform. Built for reliability and scale, TrueKall enables teams to communicate smarter with intelligent routing, real-time analytics, omnichannel support, and seamless CRM integration."
          features={[
            "Enterprise-grade VoIP with 99.99% uptime SLA",
            "Intelligent call routing & IVR automation",
            "Real-time agent monitoring & analytics",
            "Omnichannel: voice, chat, SMS, email",
            "CRM integration (Salesforce, HubSpot, custom)",
            "Scalable from 10 to 10,000+ agents"
          ]}
          badges={["Call Centers", "Enterprise VoIP", "Customer Support", "Remote Teams"]}
          ctaText="Request TrueKall Demo"
          ctaHref="#"
          docsHref="#"
          iconBg="bg-blue-500/10"
          iconColor="text-blue-400"
        />
      </section>

      {/* Product Roadmap Section */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto py-20 lg:py-28">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase mb-4">— Product Roadmap —</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            What's <span className="text-cyan-400">Coming Next</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Our R&D pipeline is active. Here's a glimpse of what SpringVox is building next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RoadmapCard
            icon={Cpu}
            category="AI Platform"
            quarter="Q3 2025"
            title="Project Aurora"
            description="A next-generation multimodal AI platform for enterprise content understanding, generation, and synthesis."
          />
          <RoadmapCard
            icon={Server}
            category="Data Platform"
            quarter="Q4 2025"
            title="Project Nexus"
            description="Unified enterprise data mesh platform connecting disparate data sources into a single, governed intelligence layer."
          />
          <RoadmapCard
            icon={Zap}
            category="Automation"
            quarter="Q1 2026"
            title="Project Orion"
            description="Low-code robotic process automation suite enabling non-technical teams to automate complex business workflows."
          />
          <RoadmapCard
            icon={Lock}
            category="Security"
            quarter="Q2 2026"
            title="Project Cipher"
            description="Quantum-resistant cryptography and key management infrastructure for forward-secure enterprise environments."
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pb-20">
        <div className="bg-[#0d1419] border border-[#1a252e] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Not sure which product fits your needs?</h3>
            <p className="text-slate-400">Talk to a SpringVox solutions expert — we'll guide you to the right fit.</p>
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

export default ProductPage;
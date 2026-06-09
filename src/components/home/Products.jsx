import React, { useRef, Suspense, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Brain,
  Shield,
  Phone,
  Sparkles,
  ArrowRight,
  Check,
  Headphones,
  BarChart3,
  Globe,
  Users,
} from "lucide-react";
import { ParticleBackground } from "../../utils/ParticleBackground";
import { ThreeScene } from "../../utils/helper";

// ─── Product Data ────────────────────────────────────────────────────────────
const products = [
  {
    id: "rekalliq",
    label: "ReKall-IQ",
    icon: Brain,
    color: "#0299b1",
    badges: ["AI-Powered", "Enterprise", "Pilot Programme Open"],
    name: "ReKallIQ",
    tagline: "Enterprise Knowledge Intelligence — Reimagined",
    description:
      "ReKallIQ is SpringVox's flagship AI platform that transforms your internal documents, policies, and institutional knowledge into a secure, always-available AI assistant. Powered by private RAG (Retrieval-Augmented Generation), your team gets instant, source-cited answers — without your data ever touching a public AI model.",
    features: [
      "Private RAG over your internal documents",
      "Vector semantic search across all company files",
      "Built-in speech-to-text for voice Q&A",
      "Knowledge-gap analytics & stale content alerts",
      "Role-Based Access Control (RBAC) per workspace",
      "Multi-tenant — strict data isolation per organisation",
      "Admin console with usage dashboards",
      "Enterprise-grade security — data never leaves your org",
    ],
    primaryCta: {
      text: "Request Demo / See How It Works",
      href: "https://springvox-knowledge-ai.vercel.app/",
      external: true,
    },
    secondaryCta: null,
    footer:
      "Selecting a limited number of organisations for our Pilot Programme. Free access during pilot in exchange for your feedback.",
    mockupType: "chat",
    mockupPills: ["RAG-Powered", "Source-Cited", "Private & Secure"],
    chatMessages: [
      { from: "user", text: "What does our leave policy say about sick days?" },
      {
        from: "ai",
        text: "According to your HR Policy document, employees are entitled to 10 sick days per year. Unused days do not roll over but are reviewed annually.",
        sources: ["HR_Policy.pdf", "Employee_Handbook.docx"],
      },
    ],
  },
  {
    id: "springvox-pbx",
    label: "SpringVox PBX",
    icon: Phone,
    color: "#05d8f5",
    badges: ["Cloud-Native", "Enterprise VoIP", "Pilot Programme Open"],
    name: "SpringVox PBX",
    tagline: "Cloud-Native Communication — Reimagined",
    description:
      "SpringVox PBX is a modern, cloud-native business phone system built for enterprises that need reliability, scale, and intelligence. From call routing and IVR to real-time analytics and CRM integrations — manage your entire communication stack from one unified platform.",
    features: [
      "Intelligent call routing & auto-attendant (IVR)",
      "HD VoIP with global edge POPs for low latency",
      "Call center management with live queue dashboards",
      "CRM integrations (Salesforce, HubSpot, Zoho)",
      "Real-time call analytics & quality monitoring",
      "Voicemail-to-text with AI transcription",
      "Multi-tenant with per-department billing",
      "99.999% uptime SLA with geo-redundancy",
    ],
    primaryCta: {
      text: "Request Demo / See How It Works",
      href: "#",
      external: false,
    },
    secondaryCta: null,
    footer:
      "Pilot Programme open for select enterprises. Free migration and onboarding support included during the pilot phase.",
    mockupType: "pbx",
    mockupPills: ["Cloud-Native", "HD VoIP", "CRM Ready"],
  },
  {
    id: "next",
    label: "Next Innovation",
    icon: Sparkles,
    color: "#45919D",
    badges: [],
    name: "Next Innovation",
    tagline: "",
    description: "",
    features: [],
    primaryCta: null,
    secondaryCta: null,
    footer: "",
    mockupType: "coming-soon",
    mockupPills: [],
  },
];

// ─── Dynamic Product Panel ───────────────────────────────────────────────────
function ProductPanel({ product }) {
  const isComingSoon = product.mockupType === "coming-soon";

  if (isComingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg mx-auto text-center"
      >
        <div
          className="rounded-2xl p-12 sm:p-16 border flex flex-col items-center gap-6"
          style={{
            background: "rgba(17, 24, 32, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(2, 153, 177, 0.2)",
            boxShadow: "0 0 40px rgba(2, 153, 177, 0.08)",
          }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-[#0299b1]/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#0299b1]" />
            </div>
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ backgroundColor: "#0299b1", animationDuration: "3s" }}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Something Powerful is Coming
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Our team is finalising the next addition to the SpringVox product
              suite. Stay tuned — or get early access by joining our community.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#cta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-all duration-300"
          >
            Stay Updated
          </button>
        </div>
      </motion.div>
    );
  }

  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
    >
      {/* Left Column */}
      <div className="space-y-6">
        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border"
                style={{
                  color: product.color,
                  backgroundColor: `${product.color}15`,
                  borderColor: `${product.color}30`,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {product.name}
          </h3>
          <p
            className="mt-2 text-lg font-medium"
            style={{ color: product.color }}
          >
            {product.tagline}
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          {product.description}
        </p>

        <div className="space-y-2.5">
          {product.features.map((feat) => (
            <div
              key={feat}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <Check className="w-3 h-3" style={{ color: product.color }} />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {product.primaryCta && (
            <a
              href={product.primaryCta.href}
              target={product.primaryCta.external ? "_blank" : undefined}
              rel={
                product.primaryCta.external ? "noopener noreferrer" : undefined
              }
              className="btn-primary flex items-center gap-2"
              style={{
                backgroundColor: product.color,
                boxShadow: `0 0 20px ${product.color}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#017a8f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = product.color;
              }}
            >
              {product.primaryCta.text}
            </a>
          )}
        </div>

        {product.footer && (
          <p className="text-xs text-muted flex items-center gap-1.5">
            {product.footer}
          </p>
        )}
      </div>

      {/* Right Column — Mockup */}
      <div className="relative">
        {product.mockupPills.length > 0 && (
          <div className="absolute -top-4 -right-4 flex flex-wrap gap-2 z-10">
            {product.mockupPills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-xs font-medium backdrop-blur-sm rounded-full border"
                style={{
                  color: product.color,
                  backgroundColor: `${product.color}15`,
                  borderColor: `${product.color}30`,
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        )}

        {/* Mockup Container */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "rgba(17, 24, 32, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: `${product.color}30`,
            boxShadow: `0 0 40px ${product.color}15, 0 0 80px ${product.color}08`,
          }}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{
                  background: `linear-gradient(to bottom right, ${product.color}, ${product.color}aa)`,
                }}
              >
                {product.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white">
                  {product.name}
                </p>
                <p className="text-[10px] text-muted">
                  Workspace: Your Organisation
                </p>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-red-400" />
              </div>
            </div>
          </div>

          {/* Mockup Body */}
          <div className="p-4 sm:p-5">
            {product.mockupType === "chat" && <ChatMockup product={product} />}
            {product.mockupType === "pbx" && (
              <PBXMockup color={product.color} />
            )}
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-5 py-2.5 border-t border-white/5 text-center">
            <span className="text-[10px] text-muted/50">
              Powered by {product.name}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Chat Mockup (ReKallIQ) ─────────────────────────────────────────────────
function ChatMockup({ product }) {
  return (
    <div className="space-y-4">
      {product.chatMessages?.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className="max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed"
            style={
              msg.from === "user"
                ? {
                    borderRadius: "1rem 1rem 0.25rem 1rem",
                    backgroundColor: `${product.color}20`,
                    border: `1px solid ${product.color}15`,
                    color: "rgba(255,255,255,0.9)",
                  }
                : {
                    borderRadius: "1rem 1rem 1rem 0.25rem",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.9)",
                  }
            }
          >
            <p>{msg.text}</p>
            {msg.sources && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.sources.map((src) => (
                  <span
                    key={src}
                    className="px-2 py-0.5 text-[10px] rounded-full border"
                    style={{
                      color: product.color,
                      backgroundColor: `${product.color}10`,
                      borderColor: `${product.color}25`,
                    }}
                  >
                    {src}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-1 pl-2">
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: product.color }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: product.color, animationDelay: "0.2s" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: product.color, animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}

// ─── PBX Mockup (SpringVox PBX) ────────────────────────────────────────────
function PBXMockup({ color }) {
  const extensions = [
    { ext: "101", name: "Sales Dept", status: "on-call", time: "04:23" },
    { ext: "102", name: "Support Line", status: "available", time: "" },
    { ext: "103", name: "Reception", status: "busy", time: "12:01" },
    { ext: "104", name: "Exec Office", status: "available", time: "" },
  ];

  const recentCalls = [
    { from: "+1 (555) 0123", duration: "2:14", type: "inbound" },
    { from: "+1 (555) 0456", duration: "0:45", type: "outbound" },
    { from: "+1 (555) 0789", duration: "5:30", type: "inbound" },
  ];

  const statusColors = {
    "on-call": { bg: "#f59e0b20", dot: "#f59e0b", label: "On Call" },
    available: { bg: "#10b98120", dot: "#10b981", label: "Available" },
    busy: { bg: "#ef444420", dot: "#ef4444", label: "Busy" },
  };

  return (
    <div className="space-y-4">
      {/* Live Stats Bar */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active Calls", value: "12", icon: Phone },
          { label: "Queue", value: "3", icon: Users },
          { label: "Avg Duration", value: "4:12", icon: BarChart3 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg p-2.5 border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <stat.icon className="w-3 h-3" style={{ color }} />
              <span className="text-[9px] text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <div className="text-sm font-bold text-white tabular-nums">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Extensions */}
      <div className="space-y-1.5">
        <div className="text-[10px] text-muted uppercase tracking-wider mb-1">
          Extensions
        </div>
        {extensions.map((ext) => {
          const st = statusColors[ext.status];
          return (
            <div
              key={ext.ext}
              className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/[0.02]"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {ext.ext}
                </div>
                <div>
                  <div className="text-xs text-white font-medium">
                    {ext.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: st.dot }}
                    />
                    <span className="text-[9px] text-muted">{st.label}</span>
                  </div>
                </div>
              </div>
              {ext.time && (
                <span className="text-[10px] text-muted tabular-nums">
                  {ext.time}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Recent Calls */}
      <div className="space-y-1.5">
        <div className="text-[10px] text-muted uppercase tracking-wider mb-1">
          Recent Calls
        </div>
        {recentCalls.map((call, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${color}15` }}
              >
                {call.type === "inbound" ? (
                  <ArrowRight className="w-3 h-3 rotate-90" style={{ color }} />
                ) : (
                  <ArrowRight
                    className="w-3 h-3 -rotate-90"
                    style={{ color }}
                  />
                )}
              </div>
              <span className="text-[11px] text-white/80">{call.from}</span>
            </div>
            <span className="text-[10px] text-muted tabular-nums">
              {call.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Typing indicator */}
      <div className="flex items-center gap-1.5 pl-1">
        <Headphones className="w-3 h-3" style={{ color }} />
        <span className="text-[10px] text-muted">
          AI Assistant monitoring calls...
        </span>
        <span
          className="w-1 h-1 rounded-full animate-pulse"
          style={{ backgroundColor: color }}
        />
        <span
          className="w-1 h-1 rounded-full animate-pulse"
          style={{ backgroundColor: color, animationDelay: "0.2s" }}
        />
        <span
          className="w-1 h-1 rounded-full animate-pulse"
          style={{ backgroundColor: color, animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}

// ─── Main Products Section ───────────────────────────────────────────────────
export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("rekalliq");

  const activeProduct = products.find((p) => p.id === activeTab);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" />
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 5, delay: 0.3 }}
        className="absolute right-5 rotate45 hidden lg:block lg:w-[1200px] lg:h-[1200px] overflow-visible"
      >
        <div className="w-full h-full inset-0">
          <Suspense fallback={<div>{""}</div>}>
            <ThreeScene />
          </Suspense>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}


                  <div class="lg:max-w-[75%] border4 text-center mb-4  lg:text-left">
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
                                    <span className="text-sm text-gray-300">Our Products</span>
                                  </motion.div>
        
                      <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                        
                      </span>
                      <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                        Innovative Platforms{' '}
                        <br class="hidden lg:block" />
                        <span className="text-gradient text3xl">We've Built</span>{' '}
                        {/* <span className="text-gradient text3xl">Company</span> */}
                      </h2>
                    </motion.div>
        
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-6 text-gray-400 leading-relaxed"
                    >
                      <p>
            Flagship products designed for enterprise performance, security, and
            scale — built in-house by SpringVox engineers.
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

 
        {/* Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-2 mb-10 sm:mb-12">

        {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"> */}
          {products.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300"
                style={
                  isActive
                    ? {
                        backgroundColor: `${tab.color}15`,
                        color: tab.color,
                        border: `1px solid ${tab.color}40`,
                        boxShadow: `0 0 20px ${tab.color}10`,
                      }
                    : {
                        color: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        backgroundColor: "rgba(255,255,255,0.02)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                  }
                }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Panel */}
        <AnimatePresence mode="wait">
          <ProductPanel key={activeTab} product={activeProduct} />
        </AnimatePresence>
      </div>
    </section>
  );
}

import React, { useRef, Suspense, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Brain,
  Shield,
  Phone,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { ParticleBackground } from "../../utils/ParticleBackground";
import { ThreeScene } from "../../utils/helper";

const products = [
  {
    icon: Brain,
    name: "ReKallIQ",
    tag: "AI Platform",
    description:
      "A comprehensive AI-driven platform for enterprise automation, intelligent analytics, and cognitive workflow optimization. ReKallIQ transforms how organizations harness data and automate decisions.",
    features: ["AI Automation", "Analytics", "Enterprise"],
    color: "#0299b1",
    gradient: "from-primary/20 to-cyan-500/10",
  },
  {
    icon: Shield,
    name: "AegisIDS",
    tag: "Cybersecurity",
    description:
      "Enterprise-grade cybersecurity platform with real-time intrusion detection, threat intelligence, and automated incident response. AegisIDS keeps your infrastructure safe from evolving cyber threats.",
    features: ["Cybersecurity", "Threat Intel", "IDS"],
    color: "#00d4ff",
    gradient: "from-cyan-500/20 to-primary/10",
  },
  {
    icon: Phone,
    name: "TrueKall",
    tag: "VoIP Platform",
    description:
      "Modern, cloud-native communication platform with enterprise VoIP, call center management, intelligent routing, and real-time analytics. Reimagine how your team communicates and connects.",
    features: ["VoIP", "Call Center", "Cloud"],
    color: "#0299b1",
    gradient: "from-primary/20 to-secondary/10",
  },
  {
    icon: Sparkles,
    name: "Next Innovation",
    tag: "Coming Soon",
    description:
      "Our R&D teams are actively developing the next generation of enterprise software solutions. From advanced AI tools to next-level automation platforms — the future is in progress.",
    features: ["R&D", "AI", "Innovation"],
    color: "#00d4ff",
    gradient: "from-cyan-500/10 to-primary/5",
    comingSoon: true,
  },
];

const tabs = [
  { id: "rekalliq", label: "ReKall-IQ " },
  { id: "next1", label: "Next Innovation" },
  // { id: "next2", label: "Next Innovation" },
  // { id: "next3", label: "Next Innovation" },
];

const rekalliqFeatures = [
  "Private RAG over your internal documents",
  "Vector semantic search across all company files",
  "Built-in speech-to-text for voice Q&A",
  "Knowledge-gap analytics & stale content alerts",
  "Role-Based Access Control (RBAC) per workspace",
  "Multi-tenant  strict data isolation per organisation",
  "Admin console with usage dashboards",
  "Enterprise-grade security  data never leaves your org",
];

function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative border4"
    >
      <div
        className={`relative glss bg-[#111820] p-6 rounded-xl h-full overflow-hidden glow-border transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05]`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Top Tag */}
        <div className="relative flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${product.color}15` }}
            >
              <product.icon
                className="w-7 h-7"
                style={{ color: product.color }}
              />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">{product.name}</h3>
              <span className="text-xs text-primary/80 font-medium">
                {product.tag}
              </span>
            </div>
          </div>
          {product.comingSoon && (
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Coming Soon
            </span>
          )}
        </div>

        {/* Description */}
        <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features */}
        <div className="relative flex flex-wrap gap-2 mb-8">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="relative">
          <button className="flex items-center gap-2 text-primary text-sm font-semibold group/btn">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Corner Glow */}
        <div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
          style={{ backgroundColor: product.color }}
        />
      </div>
    </motion.div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("rekalliq");

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative bggray-900/40 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}

      {/* 
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-secondary/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(2,153,177,0.15),_transparent_50%)] z-0" />
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" />
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 5, delay: 0.3 }}
        className="absolute right-5 rotate45 hidden lg:block lg:w-[1200px] lg:h-[1200px] xlh-[600px]  overflow-visible"
      >
        <div className="w-full h-full inset-0">
          {/* <ThreeScene /> */}
          <Suspense fallback={<div>{""}</div>}>
            <ThreeScene />
          </Suspense>
        </div>
      </motion.div>

      <div className="absolute inset-0 bgdark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-padding relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Innovative Platforms{" "}
            <span className="text-gradient">We've Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Flagship products designed for enterprise performance, security, and
            scale — built in-house by SpringVox engineers.
          </p>
        </motion.div>

        {/* Products Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#0299b1]/20 text-[#0299b1] border border-[#0299b1]/40 shadow-lg shadow-[#0299b1]/10"
                  : "text-muted border border-white/10 hover:border-white/20 hover:text-white bg-dark-card"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "rekalliq" ? (
            <ReKalliqPanel key="rekalliq" />
          ) : (
            <NextInnovationPanel key={activeTab} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// function ReKalliqPanel({ onOpenWaitlist }) {
function ReKalliqPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {["AI-Powered", "Enterprise", "Pilot Programme Open"].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-[#0299b1] bg-[#0299b1]/10 rounded-full border border-[#0299b1]/20"
            >
              {badge}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            ReKallIQ
          </h3>
          <p className="mt-2 text-lg text-[#0abde3] font-medium">
            Enterprise Knowledge Intelligence Reimagined
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          ReKallIQ is SpringVox&apos;s flagship AI platform that transforms your
          internal documents, policies, and institutional knowledge into a
          secure, always-available AI assistant. Powered by private RAG
          (Retrieval-Augmented Generation), your team gets instant, source-cited
          answers without your data ever touching a public AI model.
        </p>

        <div className="space-y-2.5">
          {rekalliqFeatures.map((feat) => (
            <div
              key={feat}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0299b1]/20 flex items-center justify-center mt-0.5">
                {/* <IconCheck className="w-3 h-3 text-[#0299b1]" /> */}
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://springvox-knowledge-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0299b1] rounded-xl hover:bg-[#017a8f] transition-all duration-300 shadow-lg shadow-[#0299b1]/20"
          >
            Request Demo / See How It Works
          </a>
          {/* <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#0299b1] border border-[#0299b1]/40 rounded-xl hover:bg-[#0299b1]/10 transition-all duration-300"
          >
            Join Beta Waitlist 
          </button> */}
        </div>

        <p className="text-xs text-muted flex items-center gap-1.5">
          <span></span>
          Selecting a limited number of organisations for our Pilot Programme.
          Free access during pilot in exchange for your feedback.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -right-4 flex flex-wrap gap-2 z-10">
          {["RAG-Powered", "Source-Cited", "Private & Secure"].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 text-xs font-medium text-[#0299b1] bg-[#0299b1]/10 backdrop-blur-sm rounded-full border border-[#0299b1]/20"
            >
              {pill}
            </span>
          ))}
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            background: "rgba(17, 24, 32, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(2, 153, 177, 0.2)",
            boxShadow:
              "0 0 40px rgba(2, 153, 177, 0.08), 0 0 80px rgba(2, 153, 177, 0.03)",
          }}
        >
          <div className="p-4 sm:p-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0299b1] to-[#0abde3] flex items-center justify-center text-white text-xs font-bold">
                SK
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white">
                  SpringVox Knowledge AI
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

          <div className="p-4 sm:p-5 space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[80%] p-3 rounded-2xl rounded-br-sm bg-[#0299b1]/20 border border-[#0299b1]/10">
                <p className="text-xs text-white/90">
                  What does our leave policy say about sick days?
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[85%] p-3 rounded-2xl rounded-bl-sm bg-white/5 border border-white/5">
                <p className="text-xs text-white/90 leading-relaxed">
                  According to your HR Policy document, employees are entitled
                  to 10 sick days per year. Unused days do not roll over but are
                  reviewed annually.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="px-2 py-0.5 text-[10px] bg-[#0299b1]/10 text-[#0299b1] rounded-full border border-[#0299b1]/20">
                    HR_Policy.pdf
                  </span>
                  <span className="px-2 py-0.5 text-[10px] bg-[#0299b1]/10 text-[#0299b1] rounded-full border border-[#0299b1]/20">
                    Employee_Handbook.docx
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-pulse" />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0299b1] animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>

          <div className="px-4 sm:px-5 py-2.5 border-t border-white/5 text-center">
            <span className="text-[10px] text-muted/50">
              Powered by ReKallIQ
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NextInnovationPanel() {
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
            <svg
              className="w-8 h-8 text-[#0299b1]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
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
            suite. Stay tuned or get early access by joining our community.
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

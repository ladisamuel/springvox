import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Globe,
  Zap,
  ArrowRight,
  Download,
  BarChart3,
  Shield,
  Target,
  Award,
  ChevronDown,
  Mail,
  FileText,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  Building2 ,
} from "lucide-react";
import { Play } from "lucide-react";

const metrics = [
  {
    label: "Annual Recurring Revenue",
    value: "$12.4M",
    growth: "+147% YoY",
    icon: TrendingUp,
  },
  {
    label: "Enterprise Customers",
    value: "340+",
    growth: "+68% YoY",
    icon: Users,
  },
  {
    label: "Countries Deployed",
    value: "42",
    growth: "Global Reach",
    icon: Globe,
  },
  {
    label: "Platform Uptime",
    value: "99.99%",
    growth: "Enterprise SLA",
    icon: Zap,
  },
];

const financialHighlights = [
  { year: "2022", revenue: "$2.1M", customers: "45", employees: "12" },
  { year: "2023", revenue: "$5.8M", customers: "120", employees: "34" },
  { year: "2024", revenue: "$12.4M", customers: "340", employees: "78" },
  { year: "2025E", revenue: "$28M", customers: "650", employees: "140" },
];

const leadership = [
  {
    name: "David Chen",
    role: "Chief Executive Officer",
    bio: "Former VP Engineering at Palantir. 15 years building enterprise AI platforms. Stanford CS, MBA Wharton.",
    previous: "Palantir, Google Cloud",
  },
  {
    name: "Sarah Okafor",
    role: "Chief Technology Officer",
    bio: "PhD Machine Learning, MIT. Former Principal Scientist at DeepMind. 40+ patents in NLP and retrieval systems.",
    previous: "DeepMind, OpenAI",
  },
  {
    name: "Marcus Webb",
    role: "Chief Revenue Officer",
    bio: "Scaled three B2B SaaS companies from $0 to $50M+ ARR. Former SVP Sales at Twilio.",
    previous: "Twilio, Segment, Zendesk",
  },
  {
    name: "Elena Vasquez",
    role: "Chief Financial Officer",
    bio: "Former CFO at two public SaaS companies. Led $800M+ in capital markets transactions. CPA, CFA.",
    previous: "Snowflake, ServiceNow",
  },
];

const useOfFunds = [
  {
    category: "R&D & Product",
    percent: 45,
    desc: "ReKallIQ v3, PBX expansion, new AI modules",
  },
  {
    category: "Sales & Marketing",
    percent: 30,
    desc: "Enterprise sales team, global partnerships, brand",
  },
  {
    category: "Infrastructure",
    percent: 15,
    desc: "Global edge nodes, SOC 2 compliance, security",
  },
  {
    category: "Operations",
    percent: 10,
    desc: "Talent acquisition, legal, administrative",
  },
];

const differentiators = [
  {
    title: "Proprietary RAG Architecture",
    desc: "Unlike competitors relying on third-party LLMs, ReKallIQ runs entirely on private infrastructure with zero data leakage — a non-negotiable for Fortune 500 compliance teams.",
    icon: Shield,
  },
  {
    title: "Dual Revenue Engine",
    desc: "Recurring SaaS subscriptions (ReKallIQ, PBX) plus high-margin professional services (custom AI, cloud migration, cybersecurity) create multiple paths to $100M ARR.",
    icon: BarChart3,
  },
  {
    title: "Enterprise-First GTM",
    desc: "Average contract value of $87K with 94% net revenue retention. Pilot-to-paid conversion rate of 78% — 3x industry average for AI SaaS.",
    icon: Target,
  },
  {
    title: "Technical Moat",
    desc: "12 granted patents, 8 pending. Self-healing infrastructure, sub-50ms global latency, and proprietary voice AI trained on 50M+ enterprise conversations.",
    icon: Award,
  },
];

const press = [
  {
    source: "TechCrunch",
    title: "SpringVox Raises $24M Series A to Build the Enterprise Brain",
    date: "Mar 2025",
  },
  {
    source: "Forbes",
    title:
      "How SpringVox Is Winning the Enterprise AI Race Without Touching Customer Data",
    date: "Jan 2025",
  },
  {
    source: "Wired",
    title: "The Cloud-Native PBX That Threatens Cisco and Avaya",
    date: "Nov 2024",
  },
  {
    source: "Bloomberg",
    title: "SpringVox Revenue Surges 147% as Enterprises Embrace Private AI",
    date: "Sep 2024",
  },
];

const documents = [
  { label: "Series B Pitch Deck", size: "4.2 MB", type: "PDF" },
  { label: "FY2024 Financial Statements", size: "2.8 MB", type: "PDF" },
  { label: "Technical Architecture Overview", size: "6.1 MB", type: "PDF" },
  { label: "Cap Table & Ownership Structure", size: "1.4 MB", type: "PDF" },
];

export default function InvestorsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div className="min-hscreen bg-[#0c1719] text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative section-padding pt-32 z-10">
        {/* Hero */}
<div className="lg:max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="text-[#0299b1] text-xs font-semibold tracking-widest uppercase">Investor Relations</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 tracking-tight">
              
              <span className="text-white">Building the </span>
              <span className="bg-gradient-to-r from-[#0299b1] via-[#05d8f5] to-[#45919D] bg-clip-text text-transparent">
                Enterprise AI
              </span>
              <br />
              <span className="text-white">Infrastructure of Tomorrow</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                SpringVox is a high-growth enterprise technology company
                delivering private AI, cloud communications, and digital
                transformation services to Fortune 500 and mid-market leaders
                across 42 countries.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button href="#story" className="btn-primary flex gap-3 items-center">
                <Download className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Download Investor Kit
              </button>
              <button href="#contact" className="btn-secondary flex gap-3 items-center">
                  <Mail className="w-4 h-4" /> Contact IR Team
                
              </button>
            </div>
          </motion.div>
        </div>

        {/* Metrics Ticker */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-3xl font-black text-white mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    {metric.label}
                  </p>
                  <p className="text-sm text-cyan-400 font-semibold">
                    {metric.growth}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="pb-12 sticky top-20 z-30 bg-[#0c1719]/95 backdrop-blur-xl border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto">
            {[
              "overview",
              "financials",
              "leadership",
              "strategy",
              "documents",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        {activeTab === "overview" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto">
              {/* Investment Thesis */}
              <div className="mb-20">
                <h2 className="text-3xl font-black tracking-tight mb-4">
                  Investment <span className="text-cyan-400">Thesis</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mb-12">
                  SpringVox sits at the intersection of three explosive markets:
                  enterprise AI ($150B by 2035), cloud communications ($45B by
                  2030), and cybersecurity services ($200B by 2035).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {differentiators.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        className="glass rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/20 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Traction Timeline */}
              <div className="mb-20">
                <h2 className="text-3xl font-black tracking-tight mb-10">
                  Traction & <span className="text-cyan-400">Growth</span>
                </h2>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                    {financialHighlights.map((item, i) => (
                      <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 * i, duration: 0.5 }}
                        className={`glass rounded-2xl p-6 border ${selectedYear === item.year ? "border-cyan-500/40 bg-cyan-500/5" : "border-gray-800/50"} cursor-pointer transition-all hover:border-cyan-500/30`}
                        onClick={() => setSelectedYear(item.year)}
                      >
                        <p className="text-xs text-cyan-400 font-bold tracking-wider uppercase mb-4">
                          {item.year}
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-2xl font-black text-white">
                              {item.revenue}
                            </p>
                            <p className="text-xs text-gray-500 uppercase">
                              Revenue
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">
                              {item.customers}
                            </p>
                            <p className="text-xs text-gray-500 uppercase">
                              Customers
                            </p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-white">
                              {item.employees}
                            </p>
                            <p className="text-xs text-gray-500 uppercase">
                              Team
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Use of Funds */}
              <div className="mb-20">
                <h2 className="text-3xl font-black tracking-tight mb-4">
                  Use of <span className="text-cyan-400">Funds</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mb-10">
                  SpringVox is raising a $35M Series B to accelerate product
                  development, expand enterprise sales, and enter the European
                  and APAC markets.
                </p>

                <div className="glass rounded-3xl p-8 border border-gray-800/50">
                  <div className="space-y-6">
                    {useOfFunds.map((item, i) => (
                      <div key={item.category}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-white">
                              {item.percent}%
                            </span>
                            <span className="text-sm font-semibold text-white">
                              {item.category}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">
                            {item.desc}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percent}%` }}
                            transition={{
                              delay: 0.2 + i * 0.1,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-800/50 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Series B Target</p>
                      <p className="text-2xl font-black text-white">
                        $35,000,000
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Pre-Money Valuation
                      </p>
                      <p className="text-2xl font-black text-cyan-400">$140M</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Coverage */}
              {/* <div>
                <h2 className="text-3xl font-black tracking-tight mb-10">
                  In the <span className="text-cyan-400">News</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {press.map((item, i) => (
                    <motion.a
                      key={item.title}
                      href="#"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      className="glass rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-all group flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-cyan-400 uppercase">
                            {item.source}
                          </span>
                          <span className="text-xs text-gray-600">
                            • {item.date}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
                    </motion.a>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.section>
        )}

        {/* Financials Section */}
        {activeTab === "financials" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black tracking-tight mb-4">
                Financial <span className="text-cyan-400">Performance</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mb-12">
                Audited financials available upon request. All figures in USD.
              </p>

              <div className="glass rounded-3xl border border-gray-800/50 overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800/50">
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Metric
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          2022
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          2023
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          2024
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          2025E
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/30">
                      {[
                        ["Total Revenue", "$2.1M", "$5.8M", "$12.4M", "$28.0M"],
                        ["ARR (SaaS)", "$1.4M", "$4.2M", "$9.8M", "$22.5M"],
                        [
                          "Services Revenue",
                          "$0.7M",
                          "$1.6M",
                          "$2.6M",
                          "$5.5M",
                        ],
                        ["Gross Margin", "62%", "68%", "74%", "78%"],
                        [
                          "Net Revenue Retention",
                          "105%",
                          "112%",
                          "118%",
                          "125%",
                        ],
                        ["CAC Payback (months)", "18", "14", "11", "9"],
                        ["LTV:CAC Ratio", "3.2x", "4.1x", "5.8x", "7.5x"],
                        ["Burn Multiple", "2.8x", "1.9x", "1.2x", "0.6x"],
                      ].map((row, i) => (
                        <tr
                          key={row[0]}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-white">
                            {row[0]}
                          </td>
                          {row.slice(1).map((cell, j) => (
                            <td
                              key={j}
                              className={`px-6 py-4 text-right ${j === 3 ? "text-cyan-400 font-semibold" : "text-gray-400"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-2xl p-6 border border-gray-800/50">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Run Rate ARR
                  </p>
                  <p className="text-3xl font-black text-white mb-1">$14.2M</p>
                  <p className="text-sm text-cyan-400">+147% YoY</p>
                </div>
                <div className="glass rounded-2xl p-6 border border-gray-800/50">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Gross Margin
                  </p>
                  <p className="text-3xl font-black text-white mb-1">74%</p>
                  <p className="text-sm text-cyan-400">+600bps YoY</p>
                </div>
                <div className="glass rounded-2xl p-6 border border-gray-800/50">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Rule of 40
                  </p>
                  <p className="text-3xl font-black text-white mb-1">82%</p>
                  <p className="text-sm text-cyan-400">
                    Growth + Profitability
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Leadership Section */}
        {activeTab === "leadership" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black tracking-tight mb-4">
                Executive <span className="text-cyan-400">Team</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mb-12">
                Seasoned operators from Palantir, DeepMind, Twilio, Snowflake,
                and other category-defining enterprise companies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="glass rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/20 transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-black text-cyan-400">
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-0.5">
                          {person.name}
                        </h3>
                        <p className="text-sm text-cyan-400 font-medium mb-3">
                          {person.role}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed mb-3">
                          {person.bio}
                        </p>
                        <p className="text-xs text-gray-600">
                          Previously:{" "}
                          <span className="text-gray-400">
                            {person.previous}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 glass rounded-3xl p-10 border border-gray-800/50 text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Board</h3>
                <p className="text-gray-400 max-w-lg mx-auto mb-6">
                  We are actively seeking independent directors with deep
                  expertise in enterprise SaaS, AI governance, and international
                  expansion.
                </p>
                <button className="px-8 py-3 border border-gray-700 text-white rounded-lg font-semibold text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  Express Interest
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* Strategy Section */}
        {activeTab === "strategy" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black tracking-tight mb-4">
                Growth <span className="text-cyan-400">Strategy</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mb-12">
                Our path to $100M ARR and profitability by 2027.
              </p>

              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Product-Market Fit (Complete)",
                    period: "2022 – 2024",
                    items: [
                      "Launched ReKallIQ v1 and v2",
                      "Acquired 340+ enterprise customers",
                      "Achieved 99.99% platform uptime",
                      "Built 78-person team across 4 countries",
                    ],
                    status: "complete",
                  },
                  {
                    phase: "Phase 2: Scale & Expansion (Current)",
                    period: "2025 – 2026",
                    items: [
                      "Series B funding for R&D and sales",
                      "Launch SpringVox PBX v2 with AI features",
                      "Expand to EU and APAC markets",
                      "Grow enterprise sales team to 50+",
                    ],
                    status: "current",
                  },
                  {
                    phase: "Phase 3: Platform Dominance",
                    period: "2027 – 2028",
                    items: [
                      "Reach $100M ARR",
                      "IPO readiness assessment",
                      "Acquire complementary AI startups",
                      "Launch developer marketplace and APIs",
                    ],
                    status: "future",
                  },
                ].map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    className={`glass rounded-2xl p-8 border ${phase.status === "current" ? "border-cyan-500/30 bg-cyan-500/5" : "border-gray-800/50"}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {phase.status === "complete" && (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      )}
                      {phase.status === "current" && (
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                      {phase.status === "future" && (
                        <Target className="w-5 h-5 text-gray-600" />
                      )}
                      <h3 className="text-lg font-bold text-white">
                        {phase.phase}
                      </h3>
                      <span className="text-xs text-gray-500 ml-auto">
                        {phase.period}
                      </span>
                    </div>
                    <ul className="space-y-2 ml-8">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-400 flex items-center gap-2"
                        >
                          <span
                            className={`w-1 h-1 rounded-full ${phase.status === "complete" ? "bg-cyan-400" : phase.status === "current" ? "bg-cyan-400" : "bg-gray-600"}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Documents Section */}
        {activeTab === "documents" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black tracking-tight mb-4">
                Investor <span className="text-cyan-400">Documents</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mb-12">
                Secure access to financial reports, cap tables, and technical
                documentation. All documents are NDA-protected.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {documents.map((doc, i) => (
                  <motion.div
                    key={doc.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="glass rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {doc.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                      <Download className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass rounded-3xl p-10 border border-gray-800/50 text-center">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Request a Management Presentation
                </h3>
                <p className="text-gray-400 max-w-lg mx-auto mb-6">
                  Schedule a 60-minute deep-dive with our CEO and CFO to discuss
                  financials, product roadmap, and market opportunity.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="px-8 py-3 bg-cyan-500 text-[#0c1719] rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors">
                    Schedule Meeting
                  </button>
                  <button className="px-8 py-3 border border-gray-700 text-white rounded-lg font-semibold text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all">
                    <Mail className="w-4 h-4 inline mr-2" />
                    ir@springvox.com
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Footer CTA */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Ready to <span className="text-cyan-400">Invest</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join leading VCs and strategic investors backing the future of
              enterprise AI infrastructure.
            </p>

            
            <div className="flex flex-wrap justify-center gap-4">
              <button href="#story" className="btn-primary flex gap-3 items-center">
                Request Allocation
              </button>
              <button href="#contact" className="btn-secondary flex gap-3 items-center">
                Speak with IR Team
              </button>
            </div>
 
          </div>
        </section>
      </div>
    </div>
  );
}

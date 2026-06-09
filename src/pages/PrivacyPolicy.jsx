// src/pages/PrivacyPolicy.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Shield, Lock, Eye, Server, Globe, Trash2, Bell,
  ChevronRight, ArrowLeft, CheckCircle2, FileText, Calendar
} from 'lucide-react'

const lastUpdated = 'June 9, 2026'

const sections = [
  { id: 'overview', title: 'Overview', icon: Eye },
  { id: 'collection', title: 'Information We Collect', icon: Server },
  { id: 'usage', title: 'How We Use Information', icon: CheckCircle2 },
  { id: 'sharing', title: 'Information Sharing', icon: Globe },
  { id: 'security', title: 'Data Security', icon: Lock },
  { id: 'retention', title: 'Data Retention', icon: Calendar },
  { id: 'rights', title: 'Your Rights', icon: Shield },
  { id: 'cookies', title: 'Cookies & Tracking', icon: Bell },
  { id: 'changes', title: 'Policy Changes', icon: FileText },
  { id: 'contact', title: 'Contact Us', icon: ChevronRight },
]

const dataCategories = [
  {
    category: 'Account Information',
    examples: 'Name, email, company, phone, billing address, payment method',
    purpose: 'Account creation, billing, customer support',
    retention: 'Duration of account + 7 years for tax compliance',
  },
  {
    category: 'Usage Data',
    examples: 'IP address, browser type, device info, pages visited, feature usage',
    purpose: 'Platform improvement, security monitoring, analytics',
    retention: '36 months from collection',
  },
  {
    category: 'Enterprise Content',
    examples: 'Documents uploaded to ReKallIQ, call logs, configuration data',
    purpose: 'Service delivery, AI model training (opt-in only), troubleshooting',
    retention: 'Duration of subscription + 30 days post-termination',
  },
  {
    category: 'Communications',
    examples: 'Support tickets, sales inquiries, feedback forms',
    purpose: 'Customer support, relationship management, product improvement',
    retention: '7 years',
  },
]

const rights = [
  {
    title: 'Right to Access',
    desc: 'Request a copy of all personal data we hold about you. We provide this within 30 days at no charge for the first request per year.',
  },
  {
    title: 'Right to Rectification',
    desc: 'Correct inaccurate or incomplete personal data through your account settings or by contacting our support team.',
  },
  {
    title: 'Right to Erasure',
    desc: 'Request deletion of your personal data ("Right to be Forgotten"). We will comply within 30 days unless legal obligations require retention.',
  },
  {
    title: 'Right to Restrict Processing',
    desc: 'Request that we limit how we use your data while we verify accuracy or resolve disputes.',
  },
  {
    title: 'Right to Data Portability',
    desc: 'Receive your data in a structured, machine-readable format (JSON/CSV) for transfer to another service.',
  },
  {
    title: 'Right to Object',
    desc: 'Opt out of data processing for direct marketing, profiling, or AI model training at any time.',
  },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('overview')

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen  bg-[#0a0a0f] text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="px-8 lg:px-16 pt-24 pb-16 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm font-medium mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to SpringVox
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-xs font-bold tracking-[0.15em] text-cyan-400 uppercase">
                  Legal
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4">
                Privacy <span className="text-cyan-400">Policy</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                SpringVox Solution Limited is committed to protecting your privacy.
                This policy explains how we collect, use, and safeguard your information
                when you use our products and services.
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Last updated: {lastUpdated}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Version 3.2
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                        activeSection === section.id
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-gray-500 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {section.title}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-9 space-y-16">
              {/* Overview */}
              <section id="overview" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  Overview
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    SpringVox Solution Limited ("SpringVox", "we", "us", or "our") operates
                    the websites springvoxsolution.com and app.springvox.com, as well as
                    the ReKallIQ, SpringVox PBX, and related enterprise technology products
                    (collectively, the "Services").
                  </p>
                  <p>
                    This Privacy Policy describes how we collect, use, store, protect,
                    and share your personal information when you use our Services, visit
                    our websites, attend our events, or engage with our sales and support
                    teams. It also explains your privacy rights and how to exercise them.
                  </p>
                  <div className="glass rounded-xl p-6 border border-gray-800/50 bg-cyan-500/5">
                    <p className="text-sm text-cyan-400 font-semibold mb-2">
                      Key Principle
                    </p>
                    <p className="text-sm text-gray-400">
                      We design our products with privacy by default. Your enterprise data
                      uploaded to ReKallIQ never trains our AI models unless you explicitly
                      opt in. We do not sell your personal information to third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="collection" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Server className="w-6 h-6 text-cyan-400" />
                  Information We Collect
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  We collect information that you provide directly, data generated through
                  your use of our Services, and information from third-party sources.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-800/50 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-900/50 border-b border-gray-800/50">
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Examples</th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Purpose</th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/30">
                      {dataCategories.map((row) => (
                        <tr key={row.category} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4 font-medium text-white">{row.category}</td>
                          <td className="px-6 py-4 text-gray-400">{row.examples}</td>
                          <td className="px-6 py-4 text-gray-400">{row.purpose}</td>
                          <td className="px-6 py-4 text-gray-500 text-xs">{row.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="usage" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Provide, operate, and maintain our Services',
                    'Process transactions and send related information',
                    'Send technical notices, updates, and support messages',
                    'Respond to your comments and support requests',
                    'Monitor and analyze usage trends and preferences',
                    'Detect, investigate, and prevent security incidents',
                    'Comply with legal obligations and enforce agreements',
                    'Develop new products, features, and functionality',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Information Sharing */}
              <section id="sharing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  Information Sharing & Disclosure
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We do not sell, rent, or trade your personal information. We share
                    information only in the following limited circumstances:
                  </p>
                  <div className="space-y-4 mt-6">
                    {[
                      {
                        title: 'Service Providers',
                        desc: 'We engage trusted third-party vendors for hosting (AWS), payment processing (Stripe), email delivery (SendGrid), and analytics. All providers are contractually bound to process data only for specified purposes and maintain confidentiality.',
                      },
                      {
                        title: 'Enterprise Customers',
                        desc: 'If your organization has a SpringVox enterprise account, designated administrators may access usage data and manage your account settings. We share only what is necessary for account administration.',
                      },
                      {
                        title: 'Legal Compliance',
                        desc: 'We may disclose information if required by law, subpoena, or governmental request, or when necessary to protect our rights, property, or safety, or that of our users or the public.',
                      },
                      {
                        title: 'Business Transfers',
                        desc: 'In the event of a merger, acquisition, or asset sale, user information would be transferred subject to the same privacy commitments. You will be notified before your data is transferred.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="glass rounded-xl p-6 border border-gray-800/50">
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-cyan-400" />
                  Data Security
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                      { icon: Lock, label: 'Encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
                      { icon: Shield, label: 'Compliance', desc: 'SOC 2 Type II, ISO 27001 certified' },
                      { icon: Eye, label: 'Access Control', desc: 'Role-based access, MFA required' },
                      { icon: Server, label: 'Infrastructure', desc: 'AWS US-East, EU-West, APAC regions' },
                      { icon: Bell, label: 'Monitoring', desc: '24/7 SOC, automated threat detection' },
                      { icon: Trash2, label: 'Disposal', desc: 'Secure deletion per NIST 800-88' },
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50">
                          <Icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-white text-sm">{item.label}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  Data Retention
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We retain your personal information for as long as necessary to fulfill
                    the purposes outlined in this policy, unless a longer retention period is
                    required or permitted by law.
                  </p>
                  <ul className="space-y-3 mt-4">
                    {[
                      'Account data: Retained for the duration of your account plus 7 years for tax and legal compliance.',
                      'Usage logs: Retained for 36 months for security analysis and platform improvement.',
                      'Enterprise content: Retained for the duration of your subscription plus 30 days after termination, unless you request earlier deletion.',
                      'Marketing data: Retained until you unsubscribe or request deletion.',
                      'Backup data: Encrypted backups are retained for 90 days and then securely purged.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section id="rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Your Privacy Rights
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Depending on your location, you may have the following rights regarding
                  your personal data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {rights.map((right) => (
                    <div key={right.title} className="glass rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/20 transition-all">
                      <h3 className="font-bold text-white mb-2">{right.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 glass rounded-xl p-6 border border-cyan-500/20 bg-cyan-500/5">
                  <p className="text-sm text-cyan-400 font-semibold mb-2">
                    How to Exercise Your Rights
                  </p>
                  <p className="text-sm text-gray-400">
                    Email privacy@springvox.com with your request. We will verify your
                    identity and respond within 30 days. For account deletion, you may also
                    use the "Delete Account" option in your account settings.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Bell className="w-6 h-6 text-cyan-400" />
                  Cookies & Tracking Technologies
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We use cookies and similar technologies to enhance your experience,
                    analyze traffic, and understand how our Services are used.
                  </p>
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-sm border border-gray-800/50 rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-gray-900/50 border-b border-gray-800/50">
                          <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Purpose</th>
                          <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800/30">
                        {[
                          ['Essential', 'Authentication, security, session management', 'Session'],
                          ['Functional', 'Language preferences, accessibility settings', '1 year'],
                          ['Analytics', 'Usage patterns, feature adoption, performance', '2 years'],
                          ['Marketing', 'Ad relevance, campaign measurement', '90 days'],
                        ].map((row) => (
                          <tr key={row[0]} className="hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4 font-medium text-white">{row[0]}</td>
                            <td className="px-6 py-4 text-gray-400">{row[1]}</td>
                            <td className="px-6 py-4 text-gray-500 text-xs">{row[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-4">
                    You can manage cookie preferences through your browser settings or our
                    Cookie Consent Manager. Essential cookies cannot be disabled as they are
                    required for the Services to function.
                  </p>
                </div>
              </section>

              {/* Policy Changes */}
              <section id="changes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  Changes to This Policy
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes
                    in our practices, legal requirements, or Service functionality.
                  </p>
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <p className="text-sm text-gray-400">
                      <span className="text-white font-semibold">Notification:</span> We will
                      notify you of material changes by email (to your registered address) or
                      through a prominent notice on our platform at least 30 days before the
                      changes take effect. The "Last Updated" date at the top of this page
                      indicates when the policy was last revised.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                  Contact Us
                </h2>
                <div className="glass rounded-2xl p-8 border border-gray-800/50">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    If you have questions, concerns, or requests regarding this Privacy
                    Policy or our data practices, please contact our Data Protection Officer:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm text-white">privacy@springvox.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Postal Address</p>
                      <p className="text-sm text-white">SpringVox Solution Limited</p>
                      <p className="text-sm text-gray-400">88 Innovation Drive, Tech City, TC 10204</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">DPO</p>
                      <p className="text-sm text-white">Elena Vasquez, Chief Compliance Officer</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Response Time</p>
                      <p className="text-sm text-white">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
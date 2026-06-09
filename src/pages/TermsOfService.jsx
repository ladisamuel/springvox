// src/pages/TermsOfService.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Scale, FileText, AlertTriangle, CheckCircle2, XCircle,
  Globe, Server, CreditCard, Lock, ArrowLeft, Calendar,
  ChevronRight, Gavel, Shield, Zap
} from 'lucide-react'

const lastUpdated = 'June 9, 2026'

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle2 },
  { id: 'services', title: 'Description of Services', icon: Server },
  { id: 'accounts', title: 'User Accounts', icon: Lock },
  { id: 'payment', title: 'Payment & Billing', icon: CreditCard },
  { id: 'conduct', title: 'Acceptable Use', icon: Shield },
  { id: 'ip', title: 'Intellectual Property', icon: FileText },
  { id: 'termination', title: 'Termination', icon: XCircle },
  { id: 'liability', title: 'Limitation of Liability', icon: AlertTriangle },
  { id: 'disputes', title: 'Dispute Resolution', icon: Gavel },
  { id: 'general', title: 'General Provisions', icon: Globe },
]

const prohibitedUses = [
  'Reverse engineering, decompiling, or disassembling any part of the Services',
  'Using the Services to store or process unlawful, harmful, or infringing content',
  'Attempting to gain unauthorized access to systems, accounts, or data',
  'Interfering with or disrupting the integrity or performance of the Services',
  'Using automated scripts, bots, or scrapers to access the Services',
  'Reselling, sublicensing, or redistributing the Services without authorization',
  'Transmitting viruses, malware, or other malicious code',
  'Harassing, abusing, or harming another person through the Services',
]

const serviceLevels = [
  {
    tier: 'Standard',
    uptime: '99.9%',
    support: 'Business hours (9am–6pm EST)',
    response: '24 hours',
    credits: '10% monthly fee per hour of downtime',
  },
  {
    tier: 'Enterprise',
    uptime: '99.99%',
    support: '24/7 with dedicated account manager',
    response: '1 hour',
    credits: '25% monthly fee per hour of downtime',
  },
]

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance')

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen section-padding bg-[#0a0a0f] text-white">
    {/* <div className="min-h-screen bg-[#0c1719] text-white"> */}
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
                  <Scale className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-xs font-bold tracking-[0.15em] text-cyan-400 uppercase">
                  Legal
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4">
                Terms of <span className="text-cyan-400">Service</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                These terms govern your access to and use of SpringVox products,
                services, and websites. Please read them carefully before using
                our platform.
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Last updated: {lastUpdated}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Version 4.0
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
              {/* Acceptance */}
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    By accessing or using the Services provided by SpringVox Solution Limited
                    ("SpringVox", "we", "us", or "our"), you agree to be bound by these Terms
                    of Service ("Terms"). If you are using the Services on behalf of an
                    organization, you represent and warrant that you have the authority to
                    bind that organization to these Terms.
                  </p>
                  <div className="glass rounded-xl p-6 border border-gray-800/50 bg-yellow-500/5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-yellow-400 font-semibold mb-1">
                          Important Notice
                        </p>
                        <p className="text-sm text-gray-400">
                          If you do not agree to these Terms, you must not access or use
                          our Services. Your continued use of the Services following any
                          changes to these Terms constitutes acceptance of those changes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    These Terms apply to all visitors, users, and others who access or use
                    our websites, applications, APIs, and any other Services we provide.
                    They do not alter in any way the terms or conditions of any other
                    agreement you may have with SpringVox for products, services, or
                    otherwise.
                  </p>
                </div>
              </section>

              {/* Services Description */}
              <section id="services" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Server className="w-6 h-6 text-cyan-400" />
                  Description of Services
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    SpringVox provides enterprise technology solutions including but not
                    limited to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      {
                        title: 'ReKallIQ',
                        desc: 'Enterprise knowledge intelligence platform with private RAG architecture for secure AI-powered document retrieval and Q&A.',
                      },
                      {
                        title: 'SpringVox PBX',
                        desc: 'Cloud-native business phone system with VoIP, call routing, IVR, CRM integrations, and real-time analytics.',
                      },
                      {
                        title: 'Professional Services',
                        desc: 'Custom software development, AI solutions, cybersecurity consulting, cloud infrastructure, UI/UX design, and digital marketing.',
                      },
                      {
                        title: 'API & Integrations',
                        desc: 'RESTful APIs, webhooks, and pre-built connectors for Salesforce, HubSpot, Slack, Microsoft Teams, and other enterprise tools.',
                      },
                    ].map((service) => (
                      <div key={service.title} className="glass rounded-xl p-6 border border-gray-800/50">
                        <h3 className="font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of
                    the Services at any time with reasonable notice. We will not be liable
                    to you or any third party for any modification, suspension, or
                    discontinuation.
                  </p>
                </div>
              </section>

              {/* SLA Table */}
              <div className="glass rounded-2xl p-8 border border-gray-800/50">
                <h3 className="text-lg font-bold mb-6">Service Level Agreements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800/50">
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Tier</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Uptime SLA</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Support</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Response Time</th>
                        <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Service Credits</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/30">
                      {serviceLevels.map((row) => (
                        <tr key={row.tier} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-4 font-semibold text-white">{row.tier}</td>
                          <td className="px-4 py-4 text-gray-400">{row.uptime}</td>
                          <td className="px-4 py-4 text-gray-400">{row.support}</td>
                          <td className="px-4 py-4 text-gray-400">{row.response}</td>
                          <td className="px-4 py-4 text-gray-400">{row.credits}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* User Accounts */}
              <section id="accounts" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-cyan-400" />
                  User Accounts
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    To access certain features of the Services, you must register for an
                    account. You agree to provide accurate, current, and complete information
                    during registration and to update such information to keep it accurate.
                  </p>
                  <div className="space-y-3 mt-4">
                    <h3 className="font-semibold text-white">Account Security</h3>
                    <p className="text-sm">
                      You are responsible for safeguarding the password and access credentials
                      for your account. You agree not to disclose your credentials to any third
                      party and to notify us immediately of any unauthorized use of your
                      account.
                    </p>
                    <h3 className="font-semibold text-white mt-4">Multi-Factor Authentication</h3>
                    <p className="text-sm">
                      Enterprise accounts are required to enable MFA. Standard accounts are
                      strongly encouraged to enable MFA. SpringVox supports TOTP-based
                      authenticator apps and hardware security keys (FIDO2/WebAuthn).
                    </p>
                    <h3 className="font-semibold text-white mt-4">Account Types</h3>
                    <ul className="space-y-2 mt-2">
                      {[
                        'Individual Account: For personal use, limited to one user.',
                        'Team Account: For small teams, includes shared workspaces and admin controls.',
                        'Enterprise Account: For organizations, includes SSO, advanced security, custom contracts, and dedicated support.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section id="payment" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-cyan-400" />
                  Payment & Billing
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Fees for the Services are described on our pricing page or in your
                    Enterprise Order Form. All fees are quoted in US Dollars unless otherwise
                    specified.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      {
                        title: 'Subscription Billing',
                        desc: 'Billed monthly or annually in advance. Annual subscriptions receive a 20% discount. Auto-renewal unless cancelled 30 days before renewal.',
                      },
                      {
                        title: 'Usage-Based Charges',
                        desc: 'Excess API calls, storage overages, and premium features billed in arrears at the rates specified in your plan.',
                      },
                      {
                        title: 'Professional Services',
                        desc: 'Billed according to the Statement of Work (SOW). Net-30 payment terms for Enterprise clients. Milestone-based billing available.',
                      },
                      {
                        title: 'Refunds',
                        desc: 'Annual subscriptions cancelled within 30 days of purchase are eligible for a full refund. Monthly subscriptions are non-refundable.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="glass rounded-xl p-5 border border-gray-800/50">
                        <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50 mt-6">
                    <p className="text-sm text-gray-400">
                      <span className="text-white font-semibold">Late Payments:</span> Overdue
                      balances accrue interest at 1.5% per month (18% per annum) or the maximum
                      rate permitted by law, whichever is less. We may suspend Services for
                      accounts more than 30 days overdue after providing written notice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Acceptable Use */}
              <section id="conduct" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Acceptable Use Policy
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    You agree to use the Services only for lawful purposes and in accordance
                    with these Terms. The following activities are strictly prohibited:
                  </p>
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    {prohibitedUses.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4">
                    Violation of this policy may result in immediate suspension or termination
                    of your account, forfeiture of prepaid fees, and referral to law
                    enforcement authorities where applicable.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="ip" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">SpringVox IP</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      All software, algorithms, interfaces, documentation, trademarks, and
                      other materials provided by SpringVox are owned by or licensed to us
                      and are protected by intellectual property laws. You receive a limited,
                      non-exclusive, non-transferable license to use the Services during the
                      term of your subscription. No ownership rights are transferred.
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">Your Content</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      You retain all ownership rights to data, documents, and other content
                      you upload to the Services ("Customer Content"). You grant SpringVox a
                      limited license to process Customer Content solely for the purpose of
                      providing the Services. For ReKallIQ, we do not use your documents to
                      train our AI models unless you explicitly opt in via account settings.
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">Feedback</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Any feedback, suggestions, or ideas you provide regarding the Services
                      may be used by SpringVox without restriction or compensation. You
                      grant us a perpetual, irrevocable, royalty-free license to incorporate
                      your feedback into our products.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <XCircle className="w-6 h-6 text-cyan-400" />
                  Termination
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-6 border border-gray-800/50">
                      <h3 className="font-semibold text-white mb-2">Termination by You</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        You may terminate your account at any time through the account
                        settings or by contacting support. Termination takes effect at the
                        end of the current billing period. No refunds for prepaid unused
                        time except as specified in the Refund Policy.
                      </p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-gray-800/50">
                      <h3 className="font-semibold text-white mb-2">Termination by SpringVox</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        We may suspend or terminate your account immediately for: (a)
                        violation of these Terms; (b) non-payment more than 30 days overdue;
                        (c) fraudulent activity; (d) legal requirement. We will provide notice
                        where practicable.
                      </p>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50 mt-4">
                    <h3 className="font-semibold text-white mb-2">Effect of Termination</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Upon termination: (a) your license to use the Services ends;
                      (b) we will retain your data for 30 days then securely delete it
                      unless legal obligations require longer retention; (c) you may
                      export your data during the 30-day retention period; (d) all
                      provisions that by nature should survive termination will survive.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-cyan-400" />
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <div className="glass rounded-xl p-6 border border-yellow-500/20 bg-yellow-500/5">
                    <p className="text-sm text-yellow-400 font-semibold mb-2">
                      Important Legal Disclaimer
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPRINGVOX AND ITS OFFICERS,
                      EMPLOYEES, AGENTS, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                      INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT
                      NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                      LOSSES.
                    </p>
                  </div>
                  <p>
                    Our total liability for any claim arising from or relating to these
                    Terms or the Services shall not exceed the greater of: (a) the amount
                    you paid to SpringVox in the 12 months preceding the claim, or (b) USD
                    $1,000. This limitation applies regardless of the theory of liability
                    (contract, tort, strict liability, or otherwise).
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of certain
                    damages, so the above limitations may not apply to you.
                  </p>
                </div>
              </section>

              {/* Dispute Resolution */}
              <section id="disputes" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-cyan-400" />
                  Dispute Resolution
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">Governing Law</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      These Terms are governed by the laws of the State of Delaware, United
                      States, without regard to its conflict of law provisions. For customers
                      outside the United States, the laws of the jurisdiction where your
                      contract is formed shall apply.
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">Arbitration</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Any dispute arising from these Terms shall first be attempted to be
                      resolved through good-faith negotiation. If unresolved within 30 days,
                      the dispute shall be submitted to binding arbitration under the rules
                      of the American Arbitration Association (AAA) in Wilmington, Delaware.
                      Arbitration shall be conducted by a single arbitrator. Judgment on the
                      award may be entered in any court of competent jurisdiction.
                    </p>
                  </div>
                  <div className="glass rounded-xl p-6 border border-gray-800/50">
                    <h3 className="font-semibold text-white mb-2">Class Action Waiver</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      You agree that any proceedings will be conducted only on an individual
                      basis and not in a class, consolidated, or representative action. If a
                      court determines that this waiver is unenforceable, the arbitration
                      agreement shall be void.
                    </p>
                  </div>
                </div>
              </section>

              {/* General Provisions */}
              <section id="general" className="scroll-mt-28">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  General Provisions
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        title: 'Entire Agreement',
                        desc: 'These Terms, together with our Privacy Policy and any Enterprise Order Form, constitute the entire agreement between you and SpringVox regarding the Services.',
                      },
                      {
                        title: 'Severability',
                        desc: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.',
                      },
                      {
                        title: 'Waiver',
                        desc: 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right. Any waiver must be in writing.',
                      },
                      {
                        title: 'Assignment',
                        desc: 'You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.',
                      },
                      {
                        title: 'Force Majeure',
                        desc: 'Neither party will be liable for failure or delay in performance due to causes beyond reasonable control, including acts of God, war, terrorism, labor disputes, or Internet failures.',
                      },
                      {
                        title: 'Notices',
                        desc: 'Notices to SpringVox must be sent to legal@springvox.com. Notices to you will be sent to the email address associated with your account.',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800/50">
                        <Zap className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="glass rounded-2xl p-8 border border-gray-800/50">
                <h3 className="text-lg font-bold mb-4">Questions About These Terms?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Legal Department</p>
                    <p className="text-sm text-white">legal@springvox.com</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Mailing Address</p>
                    <p className="text-sm text-white">SpringVox Solution Limited</p>
                    <p className="text-sm text-gray-400">88 Innovation Drive, Tech City, TC 10204</p>
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
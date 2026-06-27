import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";
import { Building2 } from "lucide-react";

const inquiryTypes = [
  "General Inquiry",
  "Start a Project",
  "Book a Consultation",
  "Request a Demo",
  "Partnership",
  "Careers",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months",
  "Flexible",
];

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
        />
      </svg>
    ),
    label: "EMAIL US",
    value: import.meta.env.VITE_EMAIL_CONTACT,
    sub: "We respond within 24 hours",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
        />
      </svg>
    ),
    label: "CALL US",
    value: import.meta.env.VITE_PHONE_NUMBER,
    sub: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: "HEADQUARTERS",
    value: "Global · Remote-First",
    sub: "Remote in North America, Europe, Africa & Asia",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "SUPPORT HOURS",
    value: "24 / 7",
    sub: "Enterprise SLA support available",
  },
];

const quickActions = [
  "Book a Free Consultation",
  "Request a Product Demo",
  //   "View Case Studies",
  "Explore Careers",
];

// ─── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(num * eased);
      setDisplay(prefix + current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, suffix, prefix]);

  return <span ref={ref}>{display}</span>;
}

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState("Start a Project");
  const [budget, setBudget] = useState("$10,000 – $50,000");
  const [timeline, setTimeline] = useState("3 – 6 months");
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen pt-20 bg-[#050d0f] text-white font-sans">
      {/* Hero Section */}



<div className="lg:max-w-7xl mx-auto pb-10 pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
              <span className="text-[#0299b1] text-xs font-semibold tracking-widest uppercase">Contact Us</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 tracking-tight">
              
              <span className="text-white">Let's Build  </span>
              <span className="bg-gradient-to-r from-[#0299b1] via-[#05d8f5] to-[#45919D] bg-clip-text text-transparent">
                Something Great
              </span>
              <br />
              <span className="text-white"> Together</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                
            Tell us about your project, ask a question, or book a free
            consultation. Our team will get back to you within 24 hours.
            </p>

          </motion.div>
        </div>

 
      {/* Main Content */}
      <section className="px-8 md:px-16 lg:px-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Form */}
          <div className="flex-1 bg-[#0a1218] border border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-1">Send Us a Message</h2>
            <p className="text-gray-400 text-sm mb-6">
              Fill in the details below and we'll reach out promptly.
            </p>

            {/* Inquiry Type */}
            <div className="mb-6">
              <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
                Type of Inquiry
              </label>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedInquiry(type)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                      selectedInquiry === type
                        ? "bg-[#0299b1]/20 border-[#0299b1] text-[#0299b1]"
                        : "bg-transparent border-white/10 text-gray-300 hover:border-[#0299b1]/50 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition"
                />
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  Work Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Nexios"
                  className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="I'd like to discuss a software development project..."
                className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                className="w-full bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#0299b1]/60 transition resize-none"
              />
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  Estimated Budget
                </label>
                <div className="relative">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full appearance-none bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0299b1]/60 transition cursor-pointer"
                  >
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
                  Timeline
                </label>
                <div className="relative">
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full appearance-none bg-[#0f2228] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#0299b1]/60 transition cursor-pointer"
                  >
                    {timelineOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 mb-6">
              <button
                onClick={() => setAgreed((v) => !v)}
                className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded flex items-center justify-center border transition-all ${
                  agreed
                    ? "bg-[#0299b1] border-[#0299b1]"
                    : "bg-transparent border-white/20"
                }`}
              >
                {agreed && (
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <p className="text-xs text-gray-400 leading-relaxed">
                I agree to SpringVox's Privacy Policy and consent to being
                contacted regarding my inquiry. We never share your data with
                third parties.
              </p>
            </div>

            {/* Submit */}
            <button className="w-full bg-[#0299b1] hover:bg-[#01aac6] transition-colors text-white font-semibold py-3 rounded-lg text-sm">
              Send Message
            </button>
          </div>

          {/* Right: Info + Map + Quick Actions */}
          <div className="lg:w-80 xl:w-96 flex flex-col gap-5">
            {/* Contact Information */}
            <div className="bg-[#0a1218] border border-white/5 rounded-2xl p-6">
              <h3 className="text-base font-semibold mb-5">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 flex-shrink-0 rounded-lg bg-[#0299b1]/10 flex items-center justify-center text-[#0299b1]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-white">
                          {item.value}
                        </p>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                    {i < contactInfo.length - 1 && (
                      <div className="mt-5 border-t border-white/5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            {/* Subtle grid/map background */}
            {/* <div className="bg-[#0a1218] border border-white/5 rounded-2xl overflow-hidden h-44 relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(2,153,177,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(2,153,177,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative flex flex-col items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#0299b1] flex items-center justify-center shadow-lg shadow-[#0299b1]/40">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="text-xs text-gray-400">
                  Global offices · Remote-first
                </p>
              </div>
            </div> */}

            {/* Quick Actions */}
            <div className="bg-[#0a1218] border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/5 bg-[#0f2228] hover:border-[#0299b1]/40 hover:bg-[#0299b1]/5 transition-all group text-sm text-gray-300 hover:text-white"
                  >
                    {action}
                    <svg
                      className="w-4 h-4 text-gray-500 group-hover:text-[#0299b1] group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

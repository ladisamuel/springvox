import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo/springvox-logo-light.png'

const footerLinks = {
  Products: [
    { name: "ReKallIQ", href: "#" },
    { name: "SpringVox PBX", href: "#" },
    { name: "Coming Soon", href: "#" },
    // { name: 'AegisIDS', href: '#' },
    // { name: 'TrueKall', href: '#' },
  ],
  Services: [
    { name: "Software Development", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Cloud Infrastructure", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "/about-us" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Contact: [
    { name: "Get in Touch", href: "#contact" },
    { name: "Support", href: "#" },
    { name: "Book Consultation", href: "#contact" },
    { name: "Request Demo", href: "#products" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-darker pt-20 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-padding mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">


            {/* <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl" />
                <span className="relative text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">SpringVox</span>
                <span className="text-primary/80 text-[10px] font-medium tracking-widest uppercase">Solution</span>
              </div>
            </a> */}

            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="relative w10 h-10 flex items-center justify-center">
                <img src={logo} class="h-full" alt="SpringVox Logo" />
                {/* 
            
                          <div className="absolute inset-0 bg-primary/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-80" />
                          <span className="relative text-white font-bold text-lg">S</span>
                          */}
              </div>
              {/* <div className="flex flex-col">
                          <span className="text-white font-bold text-lg leading-tight tracking-tight">
                            SpringVox
                          </span>
                          <span className="text-primary/80 text-[10px] font-medium tracking-widest uppercase">
                            Solution
                          </span>
                        </div> */}
            </Link>
            {/* <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Building intelligent software solutions for forward-thinking businesses. 
              AI, enterprise software, and digital transformation.
            </p> */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We help organizations modernize their operations through custom
              software development, AI-powered systems, VoIP communication
              solutions, digital marketing and brand promotion, cybersecurity
              tools, and enterprise automation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                support@springvox.com
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Global Offices - Remote First
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 SpringVox Solution Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

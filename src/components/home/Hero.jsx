import React, { useEffect, useRef, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";
import Scene3D from "../Scene3D";
import { ParticleBackground } from "../../utils/ParticleBackground";
import { ThreeScene } from "../../utils/helper";

function FloatingCard({ icon: Icon, title, delay, position }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={`absolute ${position} hidden lg:block`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2,
        }}
        className="glass rounded-2xl p-4 w-48 glow-border"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">{title}</p>
            <p className="text-gray-400 text-xs">Active</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex items-center pt-30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-secondary/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(2,153,177,0.15),_transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" />
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-5 rotate45 hidden lg:block w-[600px] h-[600px] xlh-[600px]  overflow-visible"
      >
        <div className="w-full h-full inset-0">
          {/* <ThreeScene /> */}
          <Suspense fallback={<div>{""}</div>}>
            <ThreeScene />
          </Suspense>
        </div>
      </motion.div>
      {/* Content */}
      <div className="section-padding relative z-10 w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[9fr_3fr] lg:gap-16 items-center">
          {/* Left Column - Text */}
          {/* <div className="max-w-2xl flex flex-col items-center justify-center border-4"> */}
          <div class="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-gray-300">
                Enterprise Technology Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text5xl lg:text-6xl font-bold - xl:text7xl tracking-tight leading-tight leading[1.1] mb-6"
            >
              Building Intelligent <br class="block lg:hidden" />
              <span className="text-gradient">Software Solutions</span>
              <br class="block md:hidden" />{" "}
              <span className="text-white/80">for the Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="m-auto lg:mx-0 text-gray-400 mb-10 md:max-w-[80%] lg:max-w-lg leading-relaxed"
            >
              SpringVox Solution Limited delivers cutting-edge AI, enterprise
              software, cybersecurity, and digital transformation solutions that
              power the next generation of businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-16 items-center justify-center lg:justify-start"
            >
              <a
                href="#products"
                className="btn-primary flex items-center gap-2"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Request Consultation
              </a>
              <a href="#products" className="btn-secondary">
                View Products
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center lg:justify-start text-xs"
            >
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "12+", label: "Countries Served" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            {/* </div> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-xs text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Enterprise Softwares
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0299b1]" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#029ab1a2]" />
                99.9% Uptime
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b102a2a2]" />
                Cybersecurity
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02b194]" />
                Custom Developments
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Scene */}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}

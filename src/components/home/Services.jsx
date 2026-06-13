import React, { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Shield,
  Palette,
  Box,
  Megaphone,
  Cloud,
  MessageSquare,
  Bot,
  BarChart3,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const ROW_1 = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end development of tailored enterprise software built for your exact business requirements.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "ML models, NLP, computer vision, and intelligent automation that make your products smarter.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Penetration testing, threat monitoring, compliance, and 24/7 infrastructure protection.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance web applications with modern frameworks, outstanding UI, and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android with exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, optimization, and managed infrastructure on AWS, Azure, and GCP.",
  },
];

const ROW_2 = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven design systems, interaction design, and premium user interfaces for digital products.",
  },
  {
    icon: Box,
    title: "3D Modelling & Animation",
    description:
      "Stunning 3D visuals, product renders, motion graphics, and immersive digital experiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Growth strategies, SEO, content marketing, and paid campaigns that scale your brand online.",
  },
  {
    icon: MessageSquare,
    title: "Branding Services",
    description:
      "Brand identity, visual systems, messaging strategy, and guidelines for impactful brand presence.",
  },
  {
    icon: Bot,
    title: "Automation & DevOps",
    description:
      "CI/CD pipelines, infrastructure-as-code, and process automation that accelerate delivery.",
  },
  {
    icon: BarChart3,
    title: "IT Consulting",
    description:
      "Strategic technology advisory for digital transformation, architecture, and enterprise planning.",
  },
];

const CARD_W = 280;
const GAP = 16;
const STEP = CARD_W + GAP;
const COPIES = 4;

// ─── Single Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div
      className="group relative flex-none rounded-2xl border border-white/5 bg-[#0e1a1e] p-6
                 transition-all duration-500
                 hover:border-[#0299b1]/30 hover:bg-[#111e23]"
      style={{ width: CARD_W, height: 196, backfaceVisibility: "hidden" }}
    >
      {/* top-right accent corner */}
      <span
        className="pointer-events-none absolute right-0 top-0 h-10 w-10 rounded-tr-2xl
                       border-r border-t border-[#0299b1]/0
                       transition-all duration-500 group-hover:border-[#0299b1]/30"
      />

      {/* inner radial glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl
                       bg-[radial-gradient(circle_at_30%_20%,rgba(2,153,177,0.07),transparent_65%)]
                       opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg
                        bg-[#45919D1A] transition-colors duration-300
                        group-hover:bg-[#0299b1]/20"
        >
          <Icon className="h-5 w-5 text-[#0299b1]" />
        </div>
        <h3
          className="mb-2 text-sm font-semibold text-white
                       transition-colors duration-300 group-hover:text-[#05d8f5]"
        >
          {service.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-400">
          {service.description}
        </p>
      </div>
    </div>
  );
}

// ─── Carousel Row Hook ────────────────────────────────────────────────────────
function useCarouselRow(direction, n, globalPause) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);

  const loopStart = n * STEP;

  const state = useRef({
    x: direction === "rtl" ? -loopStart : -loopStart,
    velocity: 0,
    isDragging: false,
    autoRunning: true,
    isHovered: false,
    dragStartX: 0,
    dragStartOff: 0,
    lastPointerX: 0,
    lastTime: performance.now(),
    rafId: null,
    resumeTimer: null,
    wheelTimer: null,
  });

  const applyTransform = useCallback(() => {
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(${state.current.x}px)`;
  }, []);

  const clampLoop = useCallback(() => {
    const s = state.current;
    const copyW = n * STEP;
    if (s.x < -(copyW * (COPIES - 1))) s.x += copyW;
    if (s.x > -copyW) s.x -= copyW;
  }, [n]);

  // 3D curved transforms based on distance from viewport center
  const updateCardTransforms = useCallback(() => {
    if (!trackRef.current || !outerRef.current) return;
    const cards = trackRef.current.children;
    if (!cards.length) return;
    const cw = outerRef.current.offsetWidth;
    const cc = cw / 2;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardCenter = i * STEP + STEP / 2 + state.current.x;
      const dist = cardCenter - cc;

      const rotateY = dist * -0.065;
      const scale = Math.max(0.82, 1 - Math.abs(dist) * 0.00045);
      const opacity = Math.max(0.35, 1 - Math.abs(dist) * 0.0009);
      const z = Math.max(0, 60 - Math.abs(dist) * 0.08);

      card.style.transform = `translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`;
      card.style.opacity = opacity;
    }
  }, [n]);

  const tick = useCallback(
    (now) => {
      const s = state.current;
      const AUTO = 0.55;
      const paused = globalPause.current && !s.isDragging;

      if (s.autoRunning && !s.isDragging && !paused) {
        const dt = Math.min(now - s.lastTime, 50);
        s.lastTime = now;
        s.x +=
          direction === "rtl" ? -((AUTO * dt) / 16.67) : (AUTO * dt) / 16.67;
        clampLoop();
        applyTransform();
      } else {
        s.lastTime = now;
      }

      // momentum decay
      if (!s.isDragging && Math.abs(s.velocity) > 0.05) {
        s.x += s.velocity;
        s.velocity *= 0.93;
        clampLoop();
        applyTransform();
      }

      updateCardTransforms();
      s.rafId = requestAnimationFrame(tick);
    },
    [direction, applyTransform, clampLoop, updateCardTransforms, globalPause],
  );

  const onDown = useCallback(
    (e) => {
      const s = state.current;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      s.isDragging = true;
      s.autoRunning = false;
      s.dragStartX = clientX;
      s.dragStartOff = s.x;
      s.lastPointerX = clientX;
      s.velocity = 0;
      globalPause.current = true;
      clearTimeout(s.resumeTimer);
      clearTimeout(s.wheelTimer);
      if (trackRef.current) trackRef.current.style.transition = "none";
    },
    [globalPause],
  );

  const onMove = useCallback(
    (e) => {
      const s = state.current;
      if (!s.isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      s.velocity = clientX - s.lastPointerX;
      s.lastPointerX = clientX;
      s.x = s.dragStartOff + (clientX - s.dragStartX);
      clampLoop();
      applyTransform();
      updateCardTransforms();
    },
    [applyTransform, clampLoop, updateCardTransforms],
  );

  const onUp = useCallback(() => {
    const s = state.current;
    if (!s.isDragging) return;
    s.isDragging = false;
    globalPause.current = false;
    s.resumeTimer = setTimeout(() => {
      if (!s.isHovered) {
        s.autoRunning = true;
        s.lastTime = performance.now();
      }
    }, 1800);
  }, [globalPause]);

  // Horizontal scroll via mouse wheel / trackpad
  const onWheel = useCallback(
    (e) => {
      const s = state.current;
      e.preventDefault();

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const speed = 0.5;

      s.x -= delta * speed;
      s.velocity = -delta * speed * 0.15;
      s.autoRunning = false;
      globalPause.current = true;

      clearTimeout(s.wheelTimer);
      clearTimeout(s.resumeTimer);

      s.wheelTimer = setTimeout(() => {
        globalPause.current = false;
        if (!s.isHovered) {
          s.autoRunning = true;
          s.lastTime = performance.now();
        }
      }, 1200);

      clampLoop();
      applyTransform();
      updateCardTransforms();
    },
    [applyTransform, clampLoop, updateCardTransforms, globalPause],
  );

  useEffect(() => {
    const s = state.current;
    applyTransform();
    updateCardTransforms();
    s.rafId = requestAnimationFrame(tick);

    const outer = outerRef.current;
    outer.addEventListener("mousedown", onDown);
    outer.addEventListener("touchstart", onDown, { passive: true });
    outer.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    const pauseSelf = () => {
      s.isHovered = true;
      s.autoRunning = false;
    };
    const resumeSelf = () => {
      s.isHovered = false;
      if (!s.isDragging && !globalPause.current) {
        s.autoRunning = true;
        s.lastTime = performance.now();
      }
    };
    outer.addEventListener("mouseenter", pauseSelf);
    outer.addEventListener("mouseleave", resumeSelf);
    outer.addEventListener("contextmenu", (e) => e.preventDefault());

    return () => {
      cancelAnimationFrame(s.rafId);
      clearTimeout(s.resumeTimer);
      clearTimeout(s.wheelTimer);
      outer.removeEventListener("mousedown", onDown);
      outer.removeEventListener("touchstart", onDown);
      outer.removeEventListener("wheel", onWheel);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
      outer.removeEventListener("mouseenter", pauseSelf);
      outer.removeEventListener("mouseleave", resumeSelf);
    };
  }, [
    tick,
    onDown,
    onMove,
    onUp,
    onWheel,
    applyTransform,
    updateCardTransforms,
    globalPause,
  ]);

  return { outerRef, trackRef };
}

// ─── Carousel Band ────────────────────────────────────────────────────────────
function CarouselBand({ services, direction, globalPause }) {
  const n = services.length;
  const { outerRef, trackRef } = useCarouselRow(direction, n, globalPause);

  return (
    <div
      // style={{ perspective: 1400, perspectiveOrigin: 'center center' }}

      className="overflow-hidden py-10 px-2"
      style={{ perspective: 1400, perspectiveOrigin: "center center" }}
    >
      <div
        ref={outerRef}
        className="relative overflow-hidden py-6 cursor-grab active:cursor-grabbing select-none"
        // style={{
        //   WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        //   maskImage:       'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        // }}

        className="flex gap-6 cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          // x,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: GAP,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        >
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            services.map((svc, i) => (
              <ServiceCard key={`${copy}-${i}`} service={svc} />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Services2() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Shared ref — true while any row is being dragged or wheeled
  const globalPause = useRef(false);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(1,66,76,0.2),_transparent_50%)] z-0" />

      <div className="">
        {/* Header */}

        <div className="section-padding">
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
              <span className="text-sm text-gray-300">Our Services</span>
            </motion.div>

            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block"></span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Technology Services <br className="hidden lg:block" />
              <span className="text-gradient text3xl">End-to-End</span>{" "}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              From concept to deployment, we cover every layer of the technology
              stack — design, development, security, and operations.
            </p>
          </motion.div>
        </div>

        {/* <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0f14] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0f14] to-transparent z-20 pointer-events-none" /> */}

        {/* Row 1 — Right to Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-4"
        >
          <CarouselBand
            services={ROW_1}
            direction="rtl"
            globalPause={globalPause}
          />
        </motion.div>

        {/* Row 2 — Left to Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          <CarouselBand
            services={ROW_2}
            direction="ltr"
            globalPause={globalPause}
          />
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function Spotlight({ children, className = "" }) {
  const { x, y } = useMousePosition();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(2, 153, 177, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

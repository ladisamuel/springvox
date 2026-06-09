
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// interface Props {
//   onOpenWaitlist?: () => void;
// }

export default function ReKallIQPopup({ onOpenWaitlist }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("sv_rekalliq_popup");
    if (true) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("sv_rekalliq_popup", "1");
      }, 3000);
      return () => clearTimeout(timer);
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setDismissed(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleClose = () => setDismissed(true);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 max-w-xs sm:max-w-sm"
          style={{ width: "calc(100vw - 1.5rem)" }}
        >
          <div
            className="relative p-4 rounded-xl"
            style={{
              background: "rgba(1, 66, 76, 0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(2, 153, 177, 0.35)",
              boxShadow: "0 8px 32px rgba(2, 153, 177, 0.15), 0 2px 8px rgba(0,0,0,0.4)",
              borderRadius: "12px",
            }}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold text-white px-2 py-0.5 rounded"
                style={{ backgroundColor: "#0299b1" }}
              >
                NEW
              </span>
            </div>

            <h3 className="text-white font-semibold text-base mb-1">
              Introducing ReKallIQ
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered enterprise knowledge — now accepting pilot organisations.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://springvox-knowledge-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0299b1] text-white text-sm px-3 py-1.5 rounded-md hover:bg-[#017a8f] transition-colors"
              >
                Explore ReKallIQ →
              </a>
              <button
                onClick={() => {
                  onOpenWaitlist?.();
                  handleClose();
                }}
                className="text-[#0299b1] text-sm underline-offset-2 hover:underline transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

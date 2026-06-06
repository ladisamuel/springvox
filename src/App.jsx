import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Router from "./routes/Router";

function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
       <Router />
      </div>
  );
}

export default App;

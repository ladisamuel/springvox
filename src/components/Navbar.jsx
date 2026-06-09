import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react'
import logo from '../assets/logo/springvox-logo-light.png'
import { Link, useNavigate } from 'react-router-dom'
const navLinks = [
  { name: 'About us', href: '/about-us' },
  { name: 'Products', href: '/#products' },
  { name: 'Services', href: '/#services' },
  // { name: 'Investors', href: '/investors' },
  // { name: 'About', href: '#about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed border-none top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-padding mx-auto flex items-center justify-between">
          <Link to='/' className="flex items-center gap-2 group">
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

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-sm text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#products"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <Link
              to="https://springvox-knowledge-ai.vercel.app/"
              className="btn-secondary bg-white text-gray-900 border-none flex items-center gap-2 text-sm"
            >
              <span>
              Try Rekal<span className="text-red-600 p-0">iQ</span>
              </span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary mt-4"
              >
                Get Started
              </motion.a>
              <motion.a
                href="https://springvox-knowledge-ai.vercel.app/"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-secondary bg-white/10 text-white border-none mt-1"
              >
              Try Rekall<span className="text-red-600 p-0">iQ</span>
              </motion.a>
               
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

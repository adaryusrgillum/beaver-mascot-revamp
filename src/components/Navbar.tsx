import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'OUR CRAFT', href: '#services' },
  { label: 'DAM PLANS', href: '#packages' },
  { label: 'RESULTS', href: '#stats' },
  { label: 'COLONY', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="images/beaver-logo.png"
                alt="AdvertiseBeaver Logo"
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#e85d04]/20 rounded-full blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="font-oswald text-lg font-bold tracking-wider text-white block leading-tight">
                ADVERTISE<span className="text-[#e85d04]">BEAVER</span>
              </span>
              <span className="font-space text-[10px] tracking-[3px] text-white/30 uppercase">.COM</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-space tracking-[2px] text-white/50 hover:text-[#e85d04] transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-[#e85d04]/60 mr-2">
              <div className="w-2 h-2 rounded-full bg-[#e85d04] animate-pulse" />
              <span className="font-space text-[10px] tracking-wider">BUIDLING NOW</span>
            </div>
            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-2 bg-[#e85d04] hover:bg-[#f48c06] text-black font-space text-xs font-bold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <Zap size={14} className="fill-black" />
              DAM IT, LET'S GO!
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-space tracking-widest text-white/70 hover:text-[#e85d04] hover:bg-white/5 transition-all py-3 px-3 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[#e85d04] text-black font-space text-sm font-bold tracking-wider px-5 py-3 rounded-lg mt-4"
            >
              DAM IT, LET'S GO!
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

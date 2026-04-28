import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'LOG ROLLER',
    subtitle: 'Launch ads that convert',
    description: 'We roll out high-converting digital ads across Google, Facebook, and display networks. Every campaign is precision-engineered to move your business forward.',
    image: '/images/beaver-chart.png',
    accent: '#e85d04',
  },
  {
    title: 'TERRITORY MARKER',
    subtitle: 'Reach customers nearby',
    description: 'Mark your territory with precision geofencing. We target customers where they live, work & play — turning foot traffic into loyal leads.',
    image: '/images/beaver-map.png',
    accent: '#f48c06',
  },
  {
    title: 'LODGE TALKER',
    subtitle: 'Build brand & engagement',
    description: 'Engaging content that builds trust across all major social platforms. We grow your community and turn followers into customers.',
    image: '/images/beaver-phone.png',
    accent: '#dc2f02',
  },
  {
    title: 'DAM INSPECTOR',
    subtitle: "See what's working in real-time",
    description: 'Real-time data and transparent reporting so you see exactly what sticks. No guesswork — just clear, actionable insights to strengthen your flow.',
    image: '/images/beaver-search.png',
    accent: '#e85d04',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo('.service-card',
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.services-grid', start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative z-10 py-28 sm:py-36 bg-[#0f0e0e] overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e85d04]/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#dc2f02]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-title flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#e85d04]/40" />
              <p className="font-space text-[11px] tracking-[4px] text-[#e85d04] uppercase">How We Build</p>
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-[0.95]">
              Dam Good<br />
              <span className="gradient-text-animated">Strategy.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-base leading-relaxed">
            From log rolling to lodge building — we create campaigns that put your business in front of the right beavers at the right time.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative rounded-2xl p-8 border border-white/[0.06] bg-[#181615] hover:border-[#e85d04]/30 hover:bg-[#1e1b18] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${service.accent}15, transparent 70%)` }} />

              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-oswald text-5xl font-bold text-white/[0.04] group-hover:text-[#e85d04]/[0.08] transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-oswald text-xl font-bold text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#e85d04]/60 font-space mt-0.5">{service.subtitle}</p>
                  </div>
                </div>
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: service.accent }} />
                </div>
              </div>

              <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#e85d04]/0 group-hover:text-[#e85d04]/80 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-xs font-space tracking-wider uppercase">Learn More</span>
                  <ArrowUpRight size={14} />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#e85d04]/40 group-hover:bg-[#e85d04]/10 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-[#e85d04] transition-colors" />
                </div>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full transition-all duration-700 scale-x-0 group-hover:scale-x-100"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}60, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

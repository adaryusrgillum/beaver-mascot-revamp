import { Target, BarChart3, TrendingUp, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Focused',
    subtitle: 'We find the best logs',
    color: '#e85d04',
  },
  {
    icon: BarChart3,
    title: 'Trackable',
    subtitle: 'Every stick accounted for',
    color: '#f48c06',
  },
  {
    icon: TrendingUp,
    title: 'Built to Last',
    subtitle: 'Dams that stand the test',
    color: '#dc2f02',
  },
  {
    icon: Shield,
    title: 'Dam Strong',
    subtitle: 'No contracts, no BS',
    color: '#e85d04',
  },
]

export default function BenefitsBar() {
  return (
    <section className="relative z-10 py-10 bg-gradient-to-r from-[#e85d04] via-[#f48c06] to-[#dc2f02] overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="flex items-center gap-4 group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center group-hover:bg-black/20 group-hover:scale-110 transition-all duration-300">
                <b.icon size={22} className="text-black/80" />
              </div>
              <div>
                <h3 className="font-oswald text-lg font-bold text-black uppercase tracking-wide">{b.title}</h3>
                <p className="text-xs text-black/60 font-space">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '5M+', label: 'STICKS GATHERED' },
  { value: '121K', label: 'CHEWS TAKEN' },
  { value: '10K+', label: 'DAMS BUILT' },
  { value: '50+', label: 'COLONIES THRIVING' },
]

export default function StatsMarquee() {
  const doubledStats = [...stats, ...stats, ...stats, ...stats]

  return (
    <section id="stats" className="relative z-10 py-14 bg-[#0f0e0e] border-y border-white/[0.06] overflow-hidden mesh-gradient">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="flex animate-marquee whitespace-nowrap">
        {doubledStats.map((stat, i) => (
          <div key={`${stat.label}-${i}`} className="flex items-center gap-6 mx-10">
            <div className="flex items-baseline gap-3">
              <span className="font-oswald text-5xl sm:text-6xl font-bold gradient-text-animated">
                {stat.value}
              </span>
              <span className="font-space text-[10px] tracking-[3px] text-[#e85d04]/50 uppercase">
                {stat.label}
              </span>
            </div>
            <span className="text-[#e85d04]/20 text-3xl">&#9670;</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}

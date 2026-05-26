export default function QuickStats() {
  const stats = [
    { number: '95', label: 'Topics', sublabel: 'Fully Implemented' },
    { number: '100%', label: 'Coverage', sublabel: 'Official Curriculum' },
    { number: 'Zero', label: 'Bloat', sublabel: 'Framework-Free Engine' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-standard p-6 shadow-sm text-center hover:shadow-md transition-shadow"
        >
          <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
          <p className="font-semibold text-text-main">{stat.label}</p>
          <p className="text-sm text-text-muted">{stat.sublabel}</p>
        </div>
      ))}
    </div>
  )
}

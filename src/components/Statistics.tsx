const stats = [
  { label: 'Toplam Not', value: 12345, colorClass:'bg-success-400' },
  { label: 'Toplam Üniversite', value: 2234, colorClass:'bg-info-400' },
  { label: 'Toplam Bölüm', value: 123, colorClass:'bg-warning-400' },
  { label: 'Toplam Ders', value: 324444, colorClass:'bg-primary-400' },
]
export function Statistics() {
  return (
    <section className="py-16 container mx-auto px-2">
      <h2 className="text-secondary-900 text-2xl font-semibold">
        Rakamlarla Notlar
      </h2>
      <div className="flex items-center justify-around mt-12 flex-wrap">
        {stats.map((stat) => (
          <div key={stat.label} className={stat.colorClass + ' stats-card w-64 h-32 rounded-lg p-4 pb-8 flex flex-col justify-between m-4'}>
            <h3 className="font-semibold">{stat.label}</h3>
            <h2 className="font-bold text-4xl">{stat.value}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

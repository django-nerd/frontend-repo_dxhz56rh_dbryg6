export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1593702295090-2907bebba56e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590540179855-cdc30ae28520?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621607512211-7485da4b7e51?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622286342621-5f146e9eead5?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598377451413-4afe59f0b2aa?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="galeria" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Galeria</h2>
          <p className="mt-3 text-white/70">Ambiente, detalhes e resultados que contam nossa história</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={src} alt="" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

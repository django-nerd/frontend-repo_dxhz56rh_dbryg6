import { useState } from 'react'
import { Menu, X, Phone, Scissors } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#avaliacoes', label: 'Avaliações' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/10" />
      <nav className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-[0_0_30px_rgba(251,191,36,0.35)]">
            <Scissors className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight tracking-wide">Maison Barber</p>
            <p className="text-xs text-white/60 -mt-0.5">Luxury Grooming</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#reserva" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-300 transition-colors">
            <Phone className="w-4 h-4" /> Reservar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#reserva" className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-3 rounded-lg font-semibold">
              <Phone className="w-4 h-4" /> Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

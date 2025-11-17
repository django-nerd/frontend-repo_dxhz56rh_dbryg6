import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full" />
        <div className="absolute top-40 right-0 w-[36rem] h-[36rem] bg-white/5 blur-3xl rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <CTA />
      </main>

      <footer id="contato" className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold">Maison Barber</h4>
            <p className="mt-2 text-white/60 text-sm">Rua Luxo, 123 - Jardim Europa, São Paulo</p>
            <p className="text-white/60 text-sm">Ter a Sáb: 10h - 20h</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contato</h4>
            <p className="mt-2 text-white/60 text-sm">(11) 99999-9999</p>
            <p className="text-white/60 text-sm">contato@maisonbarber.com</p>
          </div>
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Maison Barber. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

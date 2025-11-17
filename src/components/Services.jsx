import { Scissors, Sparkles, SprayCan, Crown, Bath, Beard } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Corte Premium', desc: 'Técnicas clássicas e modernas com acabamento impecável.' , price: 'R$ 150'},
  { icon: Beard, title: 'Barba de Luxo', desc: 'Ritual completo com toalha quente, óleos e modelagem.', price: 'R$ 120'},
  { icon: Bath, title: 'Hot Towel', desc: 'Relaxamento e preparo perfeito para barba ou corte.', price: 'R$ 80'},
  { icon: SprayCan, title: 'Camuflagem', desc: 'Cobertura sutil para fios brancos sem perder naturalidade.', price: 'R$ 110'},
  { icon: Sparkles, title: 'Tratamento Capilar', desc: 'Hidratação e cuidado profundo para couro e fios.', price: 'R$ 140'},
  { icon: Crown, title: 'Experiência VIP', desc: 'Atendimento exclusivo com bebidas e sala privativa.', price: 'R$ 390'},
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Serviços</h2>
          <p className="mt-3 text-white/70">Seleção curada de cuidados masculinos com padrão internacional</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-400/0 to-white/0 group-hover:from-amber-400/10 group-hover:to-white/10" />
              <div className="relative">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-white text-black shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-white/70 text-sm">{desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-white font-semibold">{price}</span>
                  <button className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-amber-300 transition-colors">Agendar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

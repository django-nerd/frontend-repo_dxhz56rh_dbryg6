export default function CTA() {
  return (
    <section id="reserva" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pronto para a sua melhor versão?</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Entre em contato e garanta um horário exclusivo com nossos mestres barbeiros. Atendimento personalizado do início ao fim.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+5511999999999" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-amber-300 transition-colors">Ligar agora</a>
          <a href="#" className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

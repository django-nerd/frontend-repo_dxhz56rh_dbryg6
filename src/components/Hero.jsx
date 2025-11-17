import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      <div className="absolute -right-1/3 -top-20 w-[900px] h-[900px] opacity-80 pointer-events-none">
        <Spline scene="https://prod.spline.design/f3b2dfrg1yiwDUYd/scene.splinecode" />
      </div>

      <div className="relative pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white"
            >
              Elegância clássica, experiência moderna
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg text-white/70 max-w-xl"
            >
              Um refúgio de alto padrão para homens que valorizam estilo, conforto e atendimento impecável. Reserve seu horário e eleve seu visual.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#reserva" className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-amber-300 transition-colors">Reservar agora</a>
              <a href="#servicos" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">Ver serviços</a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-400/20 to-white/5 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/20">
                  <Spline scene="https://prod.spline.design/DbM9wG1Idbjpqf6f/scene.splinecode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

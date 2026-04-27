import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 text-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-6 text-gold/30">
          <span>🪔</span>
          <svg width="60" height="2" viewBox="0 0 60 2">
            <line x1="0" y1="1" x2="60" y2="1" stroke="#D4A843" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <span className="text-2xl">🪷</span>
          <svg width="60" height="2" viewBox="0 0 60 2">
            <line x1="0" y1="1" x2="60" y2="1" stroke="#D4A843" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <span>🪔</span>
        </div>

        <p className="font-[family-name:var(--font-calligraphy)] text-3xl sm:text-4xl text-gold mb-3">
          Siddhant & Leena
        </p>
        <p className="text-gold/60 font-[family-name:var(--font-heading)] text-sm tracking-[0.3em] mb-6">
          20 JUNE 2026
        </p>

        <p className="text-ivory/30 font-[family-name:var(--font-serif)] text-sm italic mb-4">
          "May our union be blessed with love, joy, and togetherness forever."
        </p>

        <div className="text-gold/15 text-3xl mb-4">ॐ</div>

        <p className="text-ivory/20 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.2em] uppercase">
          Made with ❤️ for our special day
        </p>
      </motion.div>
    </footer>
  )
}

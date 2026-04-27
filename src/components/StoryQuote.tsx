import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StoryQuote() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 overflow-hidden" id="story">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212,168,67,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 70% 50%, rgba(212,168,67,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-4xl mb-6 text-gold/30"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🪷
          </motion.div>

          <h2 className="font-[family-name:var(--font-calligraphy)] text-4xl sm:text-5xl md:text-6xl text-gold mb-10">
            Our Love Story
          </h2>

          <div
            className="relative py-10 px-6 sm:px-12 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(91,10,26,0.3) 0%, rgba(26,0,8,0.4) 100%)',
              border: '1px solid rgba(212,168,67,0.12)',
            }}
          >
            <div className="absolute top-4 left-6 text-6xl text-gold/10 font-serif leading-none">“</div>
            <div className="absolute bottom-4 right-6 text-6xl text-gold/10 font-serif leading-none">”</div>

            <motion.p
              className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl md:text-3xl text-ivory/80 italic leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Two souls, one journey. In the garden of love, our hearts found each other —
              destined by the stars and blessed by the divine. What began as a chance meeting
              bloomed into a forever story.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-gold/30" />
                <span className="text-gold/40 text-sm">✦</span>
                <div className="w-8 h-[1px] bg-gold/30" />
              </div>

              <p className="font-[family-name:var(--font-serif)] text-lg text-ivory/50 italic">
                "Where there is love there is life."
              </p>
              <p className="text-gold/40 font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mt-2">
                — Mahatma Gandhi
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-gold/40 text-lg sm:text-xl font-[family-name:var(--font-serif)]">
              ॥ ओम् सह नाववतु, सह नौ भुनक्तु ॥
            </p>
            <p className="text-ivory/30 text-sm font-[family-name:var(--font-serif)] italic">
              May we be protected together, may we be nourished together
            </p>
          </motion.div>

          <motion.div
            className="mt-8 text-gold/15 text-5xl"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ॐ
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const events = [
  {
    title: 'Haldi Ceremony',
    icon: '🌼',
    date: '19 June 2026',
    time: '10:00 AM Onwards',
    venue: 'Family Residence',
    description: 'Blessings of turmeric for the couple',
  },
  {
    title: 'Wedding Ceremony',
    icon: '🔥',
    date: '20 June 2026',
    time: '7:30 PM — Muhurat Time',
    venue: 'Royal Palace Banquets, Mumbai',
    description: 'The sacred union of two souls',
    highlight: true,
  },
  {
    title: 'Reception',
    icon: '🎉',
    date: '20 June 2026',
    time: '8:30 PM Onwards',
    venue: 'Royal Palace Banquets, Mumbai',
    description: 'Dinner & celebrations',
  },
]

export default function EventDetails() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-4 overflow-hidden"
      id="events"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-gold/30 text-2xl mb-2">☙ ❦ ❧</div>
        <h2 className="font-[family-name:var(--font-calligraphy)] text-4xl sm:text-5xl md:text-6xl text-gold mb-4">
          Wedding Events
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold/50 font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase">
            20 June 2026
          </span>
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {events.map((evt, i) => (
          <motion.div
            key={evt.title}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <TiltCard
              className={`relative rounded-xl overflow-hidden h-full ${
                evt.highlight ? 'ring-2 ring-gold/40' : ''
              }`}
            >
              <div
                className="p-6 sm:p-8 h-full flex flex-col items-center text-center"
                style={{
                  background: evt.highlight
                    ? 'linear-gradient(135deg, rgba(91,10,26,0.8) 0%, rgba(139,26,43,0.6) 50%, rgba(91,10,26,0.8) 100%)'
                    : 'linear-gradient(135deg, rgba(91,10,26,0.4) 0%, rgba(26,0,8,0.6) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212,168,67,0.15)',
                }}
              >
                {evt.highlight && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-gold/20 text-gold text-[10px] font-[family-name:var(--font-heading)] tracking-wider uppercase px-3 py-1 rounded-full border border-gold/30">
                      Main Event
                    </span>
                  </div>
                )}

                <motion.div
                  className="text-4xl sm:text-5xl mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  {evt.icon}
                </motion.div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl text-gold mb-1 tracking-wider">
                  {evt.title}
                </h3>
                <p className="text-ivory/40 text-sm italic mb-5 font-[family-name:var(--font-serif)]">
                  {evt.description}
                </p>

                <div className="space-y-3 mt-auto w-full">
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-gold/60">📅</span>
                    <span className={`font-[family-name:var(--font-heading)] text-sm tracking-wider ${evt.highlight ? 'text-gold-light font-semibold text-base' : 'text-ivory/70'}`}>
                      {evt.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-gold/60">🕐</span>
                    <span className="text-ivory/70 font-[family-name:var(--font-heading)] text-sm tracking-wider">
                      {evt.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-gold/60">📍</span>
                    <span className="text-ivory/70 font-[family-name:var(--font-heading)] text-sm tracking-wider">
                      {evt.venue}
                    </span>
                  </div>
                </div>

                {evt.highlight && (
                  <div className="mt-5 text-gold/30 text-xl">🪔 &nbsp; ✦ &nbsp; 🪔</div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto mt-14 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div
          className="relative py-6 px-8 rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(212,168,67,0.1) 0%, rgba(184,134,11,0.05) 100%)',
            border: '1px solid rgba(212,168,67,0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212,168,67,0.3) 20px, rgba(212,168,67,0.3) 21px)`,
            }}
          />
          <p className="text-gold/50 font-[family-name:var(--font-heading)] text-xs tracking-[0.4em] uppercase mb-2 relative z-10">
            Mark Your Calendar
          </p>
          <p className="font-[family-name:var(--font-calligraphy)] text-3xl sm:text-4xl md:text-5xl text-gold relative z-10"
            style={{ textShadow: '0 0 30px rgba(212,168,67,0.2)' }}
          >
            Saturday, 20th June 2026
          </p>
          <p className="text-ivory/50 font-[family-name:var(--font-serif)] text-base mt-2 italic relative z-10">
            Royal Palace Banquets, Mumbai
          </p>
        </div>
      </motion.div>
    </section>
  )
}

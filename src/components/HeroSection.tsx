import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const COUPLE_IMG_1 = 'https://storage.googleapis.com/pod_public_files/67be9e3b44b82944b93db044/f82a932d-20be-44b2-9a3d-9be5e0762967.jpeg'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, rgba(91,10,26,0.3) 0%, rgba(26,0,8,0.8) 60%, rgba(13,0,4,0.95) 100%),
              radial-gradient(circle at 20% 30%, rgba(212,168,67,0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(212,168,67,0.06) 0%, transparent 40%)
            `,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="800" height="800" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#D4A843" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#D4A843" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="#D4A843" strokeWidth="0.3" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="5"
              x2="100"
              y2="195"
              stroke="#D4A843"
              strokeWidth="0.2"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={`e${i}`}
              cx="100"
              cy="30"
              rx="15"
              ry="25"
              fill="none"
              stroke="#D4A843"
              strokeWidth="0.3"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="hidden lg:block text-gold/20 text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg width="60" height="200" viewBox="0 0 60 200">
            <path d="M30 0 Q45 50 30 100 Q15 150 30 200" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.4" />
            <circle cx="30" cy="50" r="4" fill="#D4A843" opacity="0.3" />
            <circle cx="30" cy="100" r="6" fill="#D4A843" opacity="0.3" />
            <circle cx="30" cy="150" r="4" fill="#D4A843" opacity="0.3" />
          </svg>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-gold/60 font-[family-name:var(--font-heading)] text-xs sm:text-sm tracking-[0.4em] uppercase">
              || श्री गणेशाय नमः ||
            </p>
          </motion.div>

          <motion.div
            className="text-4xl sm:text-5xl text-gold/30 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            ॐ
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <TiltCard className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gold/40 shadow-2xl mx-auto">
              <img
                src={COUPLE_IMG_1}
                alt="Siddhant and Leena"
                className="w-full h-full object-cover"
              />
            </TiltCard>
          </motion.div>

          <motion.p
            className="text-gold/70 font-[family-name:var(--font-heading)] text-xs sm:text-sm tracking-[0.5em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Together with their families
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-calligraphy)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold leading-tight"
            style={{
              textShadow: '0 0 40px rgba(212,168,67,0.3), 0 0 80px rgba(212,168,67,0.1)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Siddhant{' '}
            <motion.span
              className="inline-block text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.span>{' '}
            Leena
          </motion.h1>

          <motion.div
            className="flex items-center gap-4 my-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
            <div className="text-gold/60 text-xl">🪷</div>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl md:text-2xl text-gold-light/80 tracking-[0.3em]">
              20 JUNE 2026
            </p>
            <p className="text-ivory/50 font-[family-name:var(--font-serif)] text-base sm:text-lg mt-1 italic">
              Saturday &middot; Save the Date
            </p>
          </motion.div>

          <motion.div
            className="mt-6 text-gold/20 text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            ✦ &nbsp; 🪷 &nbsp; ✦
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block text-gold/20 text-6xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg width="60" height="200" viewBox="0 0 60 200">
            <path d="M30 0 Q15 50 30 100 Q45 150 30 200" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.4" />
            <circle cx="30" cy="50" r="4" fill="#D4A843" opacity="0.3" />
            <circle cx="30" cy="100" r="6" fill="#D4A843" opacity="0.3" />
            <circle cx="30" cy="150" r="4" fill="#D4A843" opacity="0.3" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gold/40 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] uppercase">Scroll</p>
          <svg width="20" height="30" viewBox="0 0 20 30">
            <rect x="1" y="1" width="18" height="28" rx="9" fill="none" stroke="#D4A843" strokeWidth="1" opacity="0.4" />
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="#D4A843"
              opacity={0.6}
              animate={{ cy: [8, 18, 8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

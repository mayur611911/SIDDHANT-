import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'

interface EnvelopeScreenProps {
  onOpen: () => void
}

export default function EnvelopeScreen({ onOpen }: EnvelopeScreenProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleClick = useCallback(() => {
    if (isOpening) return
    setIsOpening(true)
    setTimeout(() => onOpen(), 2200)
  }, [isOpening, onOpen])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #2a0a15 0%, #1a0008 50%, #0d0004 100%)',
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: `rgba(212, 168, 67, ${Math.random() * 0.5 + 0.2})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute opacity-10 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          border: '2px solid #D4A843',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-4 border border-gold/30 rounded-full" />
        <div className="absolute inset-8 border border-gold/20 rounded-full" />
        <div className="absolute inset-12 border border-gold/10 rounded-full" />
      </motion.div>

      <motion.div
        className="relative cursor-pointer z-10"
        onClick={handleClick}
        initial={{ scale: 0.7, opacity: 0, rotateY: -20 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        whileHover={!isOpening ? { scale: 1.03, rotateY: 5 } : {}}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="absolute -inset-8 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={isOpening ? {
            opacity: [0.5, 1, 3],
            scale: [1, 1.5, 8],
          } : { opacity: [0.3, 0.6, 0.3] }}
          transition={isOpening
            ? { duration: 2.2, ease: 'easeIn' }
            : { duration: 3, repeat: Infinity }
          }
        />

        <div
          className="relative w-[420px] h-[280px] sm:w-[520px] sm:h-[340px]"
          style={{ perspective: 800 }}
        >
          <div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #8B6914 0%, #D4A843 25%, #F0D68A 50%, #D4A843 75%, #8B6914 100%)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <div className="absolute inset-3 border-2 border-[#5B0A1A]/40 rounded-md">
              <div className="absolute inset-2 border border-[#5B0A1A]/20 rounded-sm" />
            </div>

            {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-12 h-12 opacity-40`}>
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <path
                    d="M25 5 C25 5, 45 15, 45 25 C45 35, 25 45, 25 45 C25 45, 5 35, 5 25 C5 15, 25 5, 25 5Z"
                    fill="none"
                    stroke="#5B0A1A"
                    strokeWidth="1.5"
                  />
                  <circle cx="25" cy="25" r="3" fill="#5B0A1A" />
                </svg>
              </div>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-3xl mb-2 opacity-30 text-[#5B0A1A]">ॐ</div>
              <div className="text-[#5B0A1A] font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase opacity-60 mb-1">
                Wedding Invitation
              </div>
              <div className="text-[#5B0A1A] font-[family-name:var(--font-calligraphy)] text-4xl sm:text-5xl">
                S & L
              </div>
              <div className="text-[#5B0A1A] font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] mt-2 opacity-60">
                20 · 06 · 2026
              </div>
            </div>
          </div>

          <motion.div
            className="absolute top-0 left-0 right-0 origin-top"
            style={{
              height: '55%',
              transformStyle: 'preserve-3d',
              zIndex: isOpening ? 5 : 1,
            }}
            animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #B8860B 0%, #D4A843 40%, #F0D68A 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="absolute inset-0 opacity-20"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(91,10,26,0.15) 10px, rgba(91,10,26,0.15) 11px)`,
                }}
              />
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[#5B0A1A] opacity-30 text-2xl">
                🪷
              </div>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, #5B0A1A 0%, #8B1A2B 100%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden',
              }}
            />
          </motion.div>

          <motion.div
            className="absolute left-[10%] right-[10%] top-[15%] bottom-[8%] rounded-md overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFF8E7 0%, #FAECD4 100%)',
              zIndex: isOpening ? 3 : 0,
            }}
            animate={isOpening ? { y: -60, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex flex-col items-center justify-center h-full text-[#5B0A1A]">
              <div className="text-lg opacity-50 font-[family-name:var(--font-heading)] tracking-[0.2em]">
                || श्री गणेशाय नमः ||
              </div>
              <div className="font-[family-name:var(--font-calligraphy)] text-3xl sm:text-4xl mt-2 text-[#8B1A2B]">
                Siddhant & Leena
              </div>
              <div className="text-sm mt-2 opacity-60 font-[family-name:var(--font-heading)] tracking-widest">
                20 JUNE 2026
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          animate={isOpening ? { opacity: 0, y: 20 } : { opacity: [0.5, 1, 0.5] }}
          transition={isOpening ? { duration: 0.3 } : { duration: 2, repeat: Infinity }}
        >
          <p className="text-gold/80 font-[family-name:var(--font-heading)] text-sm tracking-[0.3em] uppercase">
            Click to Open
          </p>
          <motion.div
            className="mt-2 text-gold/50 text-xl"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

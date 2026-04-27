import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const photos = [
  {
    src: 'https://storage.googleapis.com/pod_public_files/67be9e3b44b82944b93db044/f82a932d-20be-44b2-9a3d-9be5e0762967.jpeg',
    alt: 'Siddhant & Leena - Together',
    caption: 'Our Beginning',
  },
  {
    src: 'https://storage.googleapis.com/pod_public_files/67be9e3b44b82944b93db044/c773950c-e274-4f11-827c-3f2eb309e394.jpeg',
    alt: 'Siddhant & Leena - Moments',
    caption: 'Our Journey',
  },
  {
    src: 'https://storage.googleapis.com/pod_public_files/67be9e3b44b82944b93db044/f228b32e-50ca-4c74-8789-f5382348a049.jpeg',
    alt: 'Siddhant & Leena - Love',
    caption: 'Our Forever',
  },
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 overflow-hidden" id="gallery">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-[family-name:var(--font-calligraphy)] text-4xl sm:text-5xl md:text-6xl text-gold mb-4">
          Our Moments
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold/40">🪷</span>
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <TiltCard className="group relative rounded-xl overflow-hidden cursor-pointer">
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{
                  border: '2px solid rgba(212,168,67,0.2)',
                  borderRadius: '0.75rem',
                }}
              >
                <div className="absolute inset-1 border border-gold/10 rounded-lg z-10 pointer-events-none" />
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <motion.p
                    className="font-[family-name:var(--font-calligraphy)] text-2xl sm:text-3xl text-gold"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                  >
                    {photo.caption}
                  </motion.p>
                </div>
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/30 rounded-tl-sm" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/30 rounded-tr-sm" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/30 rounded-bl-sm" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/30 rounded-br-sm" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

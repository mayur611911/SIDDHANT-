import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function RSVPSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="relative py-20 sm:py-28 px-4 overflow-hidden" id="rsvp">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-[family-name:var(--font-calligraphy)] text-4xl sm:text-5xl md:text-6xl text-gold mb-4">
          RSVP
        </h2>
        <p className="text-ivory/50 font-[family-name:var(--font-serif)] text-lg italic">
          We would be honored by your presence
        </p>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold/40 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em]">
            20 JUNE 2026
          </span>
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {submitted ? (
          <motion.div
            className="text-center py-12 px-8 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(91,10,26,0.4) 0%, rgba(26,0,8,0.5) 100%)',
              border: '1px solid rgba(212,168,67,0.2)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="text-5xl mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🙏
            </motion.div>
            <h3 className="font-[family-name:var(--font-calligraphy)] text-3xl text-gold mb-3">
              Thank You!
            </h3>
            <p className="text-ivory/60 font-[family-name:var(--font-serif)] text-lg">
              We are overjoyed that you'll be joining us on our special day.
            </p>
            <p className="text-gold/50 font-[family-name:var(--font-heading)] text-sm tracking-wider mt-4">
              See you on 20th June 2026! 🪷
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 sm:p-8 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(91,10,26,0.3) 0%, rgba(26,0,8,0.4) 100%)',
              border: '1px solid rgba(212,168,67,0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              <label className="block text-gold/70 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-maroon-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory/90 font-[family-name:var(--font-serif)] focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gold/70 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-maroon-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory/90 font-[family-name:var(--font-serif)] focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/20"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gold/70 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] uppercase mb-2">
                  Attending?
                </label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full bg-maroon-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory/90 font-[family-name:var(--font-serif)] focus:outline-none focus:border-gold/50 transition-colors"
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              <div>
                <label className="block text-gold/70 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] uppercase mb-2">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-maroon-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory/90 font-[family-name:var(--font-serif)] focus:outline-none focus:border-gold/50 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gold/70 font-[family-name:var(--font-heading)] text-xs tracking-[0.2em] uppercase mb-2">
                Message for the Couple
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-maroon-dark/50 border border-gold/20 rounded-lg px-4 py-3 text-ivory/90 font-[family-name:var(--font-serif)] focus:outline-none focus:border-gold/50 transition-colors resize-none placeholder:text-ivory/20"
                placeholder="Your blessings & wishes..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3.5 rounded-lg font-[family-name:var(--font-heading)] text-sm tracking-[0.3em] uppercase cursor-pointer transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D4A843 0%, #B8860B 50%, #D4A843 100%)',
                color: '#3D0611',
                boxShadow: '0 4px 20px rgba(212,168,67,0.3)',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 30px rgba(212,168,67,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send RSVP ✉️
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  )
}

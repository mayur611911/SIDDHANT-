import { motion } from 'framer-motion'
import FloatingParticles from './FloatingParticles'
import RosePetals from './RosePetals'
import HeroSection from './HeroSection'
import EventDetails from './EventDetails'
import Gallery from './Gallery'
import StoryQuote from './StoryQuote'
import RSVPSection from './RSVPSection'
import Footer from './Footer'

export default function MainInvitation() {
  return (
    <motion.div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 0%, rgba(91,10,26,0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 100%, rgba(91,10,26,0.4) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(26,0,8,1) 0%, rgba(13,0,4,1) 100%)
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent z-50" />
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent z-50" />
      <div className="fixed top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-transparent z-50" />
      <div className="fixed top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-transparent z-50" />

      <FloatingParticles />
      <RosePetals />

      <div className="relative z-10">
        <HeroSection />
        <EventDetails />
        <Gallery />
        <StoryQuote />
        <RSVPSection />
        <Footer />
      </div>
    </motion.div>
  )
}

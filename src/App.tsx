import { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import EnvelopeScreen from './components/EnvelopeScreen'
import MainInvitation from './components/MainInvitation'
import { Howl } from 'howler'

function App() {
  const [opened, setOpened] = useState(false)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'],
      loop: true,
      volume: 0.3,
      html5: true,
    })
    return () => {
      soundRef.current?.unload()
    }
  }, [])

  const handleOpen = () => {
    setOpened(true)
    try {
      soundRef.current?.play()
    } catch (_) { /* audio autoplay may be blocked */ }
  }

  return (
    <div className="min-h-screen bg-[#1a0008]">
      <AnimatePresence mode="wait">
        {!opened ? (
          <EnvelopeScreen key="envelope" onOpen={handleOpen} />
        ) : (
          <MainInvitation key="invitation" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function RosePetals() {
  const petals = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 18 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
      swayAmount: Math.random() * 100 + 40,
    })), [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[6] overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -30,
            width: p.size,
            height: p.size * 0.7,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, p.swayAmount, -p.swayAmount * 0.5, p.swayAmount * 0.3],
            rotate: [p.rotation, p.rotation + 360 + Math.random() * 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 30 20" className="w-full h-full">
            <ellipse
              cx="15"
              cy="10"
              rx="14"
              ry="9"
              fill={`hsl(${340 + Math.random() * 20}, ${70 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`}
              opacity={0.6 + Math.random() * 0.3}
            />
            <ellipse
              cx="12"
              cy="9"
              rx="6"
              ry="4"
              fill={`hsl(${345 + Math.random() * 15}, 80%, ${55 + Math.random() * 15}%)`}
              opacity={0.4}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

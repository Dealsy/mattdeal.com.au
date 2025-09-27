'use client'

import { motion } from 'motion/react'

export default function Motion() {
  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Motion Animation Showcase</h2>
        <p className="text-muted-foreground">Demonstrating various Motion capabilities</p>
      </div>

      {/* Basic Animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Animations</h3>
        <div className="flex gap-4 justify-center">
          <motion.div
            className="w-16 h-16 bg-blue-500 rounded-lg"
            animate={{
              x: [0, 100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-16 h-16 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              borderRadius: ['50%', '20%', '50%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      {/* Hover Interactions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hover Interactions</h3>
        <div className="flex gap-4 justify-center">
          <motion.button
            className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hover me!
          </motion.button>
          <motion.div
            className="w-20 h-20 bg-red-400 rounded-xl cursor-pointer"
            whileHover={{
              rotate: 45,
              backgroundColor: '#ef4444',
            }}
            whileTap={{
              scale: 0.9,
            }}
          />
        </div>
      </div>

      {/* Stagger Animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stagger Animation</h3>
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map(index => (
              <motion.div
                key={index}
                className="w-12 h-12 bg-yellow-400 rounded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-triggered Animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Scroll-triggered Animation</h3>
        <motion.div
          className="w-full h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            background: 'linear-gradient(45deg, #f472b6, #a855f7, #06b6d4)',
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-white font-bold text-xl">Scroll to animate!</span>
        </motion.div>
      </div>

      {/* Gesture-based Animation */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Gesture Animations</h3>
        <div className="flex justify-center">
          <motion.div
            className="w-24 h-24 bg-indigo-500 rounded-full cursor-grab"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileDrag={{
              scale: 1.1,
              rotate: 15,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  )
}

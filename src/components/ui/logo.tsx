import React from 'react'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <motion.a 
      href="/" 
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="text-[#FF5A1F]"
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Home size={24} strokeWidth={2} />
      </motion.div>
      <span className="text-lg font-semibold">
        Prime <span className="text-[#FF5A1F]">House</span>
      </span>
    </motion.a>
  )
}

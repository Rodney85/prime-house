import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "../../lib/utils"
import { Logo } from "./logo"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-white/20 backdrop-blur-md",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {items.map((item) => {
              const isActive = activeTab === item.name

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-gray-600 hover:text-[#FF5A1F]",
                    isActive && "bg-gray-100/80 text-[#FF5A1F]",
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-[#FF5A1F]/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FF5A1F] rounded-t-full">
                        <div className="absolute w-12 h-6 bg-[#FF5A1F]/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-[#FF5A1F]/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-[#FF5A1F]/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              )
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-[#FF5A1F] transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg md:hidden z-50 overflow-hidden"
              >
                <div className="py-2">
                  {items.map((item) => {
                    const isActive = activeTab === item.name

                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        onClick={() => {
                          setActiveTab(item.name)
                          setIsMenuOpen(false)
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors",
                          "text-gray-600 hover:text-[#FF5A1F] hover:bg-gray-50",
                          isActive && "text-[#FF5A1F] bg-gray-50"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Mail, Sparkles, Palette, Layers } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-32 lg:py-0">
      {/* Enhanced Background with ROYPG Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-primary-950/10"></div>
      
      {/* Animated Background Shapes with ROYPG Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary-400/40 via-secondary-400/30 to-accent-400/20 dark:from-primary-500/30 dark:via-secondary-500/20 dark:to-accent-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-parrot-400/40 via-green-400/30 to-green-500/20 dark:from-parrot-500/30 dark:via-green-500/20 dark:to-green-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-accent-400/30 via-parrot-400/20 to-green-400/15 dark:from-accent-500/20 dark:via-parrot-500/15 dark:to-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-lg font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 via-secondary-50 via-accent-50 via-parrot-50 to-green-50 dark:from-primary-900/30 dark:via-secondary-900/30 dark:via-accent-900/30 dark:via-parrot-900/30 dark:to-green-900/30 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-primary-500" />
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 via-accent-500 via-parrot-500 to-green-500 dark:from-primary-400 dark:via-secondary-400 dark:via-accent-400 dark:via-parrot-400 dark:to-green-400 bg-clip-text text-transparent">Creative Designer</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Crafting{' '}
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 to-parrot-500 bg-clip-text text-transparent">
                Beautiful
              </span>
              <br />
              Digital{' '}
              <span className="bg-gradient-to-r from-parrot-500 via-green-500 to-green-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Figma Expert | UI/UX Designer | Websites & Apps from Scratch | Website to App Conversion
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ChevronDown className="h-5 w-5" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span>Let's Connect</span>
              </motion.button>
            </motion.div>

            {/* Design Skills Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/80 to-primary-50/50 dark:from-gray-800/80 dark:to-primary-900/30 backdrop-blur-sm border-2 border-primary-200/50 dark:border-primary-800/50 shadow-lg">
                <Palette className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Designs</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/80 to-parrot-50/50 dark:from-gray-800/80 dark:to-parrot-900/30 backdrop-blur-sm border-2 border-parrot-200/50 dark:border-parrot-800/50 shadow-lg">
                <Layers className="h-8 w-8 text-parrot-500 mx-auto mb-2" />
                <div className="text-2xl font-bold bg-gradient-to-r from-parrot-600 via-parrot-500 to-green-500 bg-clip-text text-transparent">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/80 to-green-50/50 dark:from-gray-800/80 dark:to-green-900/30 backdrop-blur-sm border-2 border-green-200/50 dark:border-green-800/50 shadow-lg">
                <Sparkles className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Multi-layer Glow Effect with ROYPG Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 via-secondary-500/40 via-accent-500/35 via-parrot-500/30 to-green-500/40 rounded-3xl blur-3xl opacity-60 scale-110 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-green-500/40 via-parrot-500/30 via-accent-500/25 via-secondary-500/30 to-primary-500/40 rounded-3xl blur-2xl opacity-40 scale-105"></div>
              
              {/* Profile Image Container with Glass Morphism */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl bg-white dark:bg-gray-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-secondary-100/50 via-accent-100/50 via-parrot-100/50 to-green-100/50 dark:from-primary-900/30 dark:via-secondary-900/30 dark:via-accent-900/30 dark:via-parrot-900/30 dark:to-green-900/30"></div>
                
                <div className="relative w-full h-full z-10">
                  <Image
                    src="/profile.png"
                    alt="Ayesha Ali - UI/UX Designer"
                    fill
                    sizes="(max-width: 1024px) 320px, 420px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                
                {/* Design Badge Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-white/80 dark:border-gray-700/80 shadow-xl z-30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Ayesha Ali</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">UI/UX Designer</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Available for projects</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 dark:border-primary-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 rounded-full mt-2"
            />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


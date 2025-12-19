'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Briefcase, MessageCircle, User, Linkedin, Quote } from 'lucide-react'
import { testimonials, Testimonial } from '@/data/testimonials'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-play carousel
  useEffect(() => {
    if (!inView) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [inView])

  const getPlatformIcon = (platform: Testimonial['platform']) => {
    switch (platform) {
      case 'upwork':
        return <Briefcase className="h-5 w-5" />
      case 'fiverr':
        return <MessageCircle className="h-5 w-5" />
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />
      default:
        return <User className="h-5 w-5" />
    }
  }

  const getPlatformName = (platform: Testimonial['platform']) => {
    switch (platform) {
      case 'upwork':
        return 'Upwork'
      case 'fiverr':
        return 'Fiverr'
      case 'linkedin':
        return 'LinkedIn'
      default:
        return 'Direct'
    }
  }

  const getPlatformColor = (platform: Testimonial['platform']) => {
    switch (platform) {
      case 'upwork':
        return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
      case 'fiverr':
        return 'text-green-500 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      case 'linkedin':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
      default:
        return 'text-primary-500 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take my word for it. Here's what clients say about working with me on design projects.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center min-h-[450px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => {
                if (index !== currentIndex) return null

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full max-w-4xl mx-auto"
                  >
                    <div className="design-card p-10 sm:p-12">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500">
                          <Quote className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Header with Project, Platform, and Rating */}
                      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                              {testimonial.projectName}
                            </h3>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getPlatformColor(testimonial.platform)}`}>
                              {getPlatformIcon(testimonial.platform)}
                              <span className="text-xs font-semibold">{getPlatformName(testimonial.platform)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-6 w-6 ${
                                    i < testimonial.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                              {testimonial.rating}.0
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Client Info */}
                      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {testimonial.clientName}
                        </p>
                        {testimonial.clientRole && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {testimonial.clientRole}
                          </p>
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <div className="relative">
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                          {testimonial.testimonial}
                        </p>
                      </div>

                      {/* Date */}
                      {testimonial.date && (
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(testimonial.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-3 h-3 bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 shadow-glow'
                    : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


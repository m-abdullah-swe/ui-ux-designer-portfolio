'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Figma, Smartphone, Monitor, Palette, Maximize2, X, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { projects, Project } from '@/data/projects'

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web' | 'branding'>('mobile')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selected, setSelected] = useState<Project | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => project.category === activeTab)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile':
        return Smartphone
      case 'web':
        return Monitor
      case 'branding':
        return Palette
      default:
        return Sparkles
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

  const ProjectCard = ({ project }: { project: Project }) => {
    const CategoryIcon = getCategoryIcon(project.category)
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -8 }}
        className="design-card group cursor-pointer"
        onClick={() => setSelected(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Design Tools Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.designTools.slice(0, 2).map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow-lg"
              >
                {tool}
              </span>
            ))}
            {project.designTools.length > 2 && (
              <span className="px-3 py-1.5 bg-white/90 text-gray-900 text-xs font-medium rounded-full backdrop-blur-sm shadow-lg">
                +{project.designTools.length - 2}
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <div className="p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
              <CategoryIcon className="h-5 w-5 text-primary-500" />
            </div>
          </div>

          {/* View Details Hint */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <span className="text-sm text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View Design Details →
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <CategoryIcon className="h-5 w-5 text-primary-500" />
            <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Design Highlights */}
          {project.designHighlights && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.designHighlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full border border-primary-200 dark:border-primary-800"
                >
                  {highlight}
                </span>
              ))}
              {project.designHighlights.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                  +{project.designHighlights.length - 3} more
                </span>
              )}
            </div>
          )}

          <div className="text-sm text-primary-500 font-medium">Explore Design →</div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            Design Portfolio
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of design projects showcasing user-centered design, visual aesthetics, 
            and creative problem-solving across mobile, web, and branding.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative inline-flex gap-2 p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-200 dark:border-gray-700">
            {(['mobile', 'web', 'branding'] as const).map((tab) => {
              const Icon = getCategoryIcon(tab)
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-base font-semibold transition-all duration-300 rounded-xl flex items-center gap-2 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="capitalize">{tab}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 flex-shrink-0">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setFullscreenImage(selected.image)}
                  className="absolute bottom-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white hover:bg-white transition backdrop-blur-sm shadow-lg"
                  aria-label="Expand image"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = getCategoryIcon(selected.category)
                    return <Icon className="h-6 w-6 text-primary-500" />
                  })()}
                  <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">{selected.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line leading-relaxed">{selected.longDescription}</p>

                {/* Design Highlights */}
                {selected.designHighlights && (
                  <div className="mb-6">
                    <h4 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3">Design Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.designHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Media Gallery */}
                {selected.additionalImages && selected.additionalImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {selected.additionalImages.map((src, i) => (
                      <div key={i} className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden">
                        <Image src={src} alt={`${selected.title} design ${i+1}`} fill className="object-cover" />
                        <button
                          onClick={() => setFullscreenImage(src)}
                          className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/60 text-white hover:bg-black/75 transition backdrop-blur-sm"
                          aria-label="Expand image"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Video */}
                {selected.video && (
                  <div className="mb-6">
                    <video className="w-full rounded-xl" controls playsInline preload="metadata" muted>
                      <source src={selected.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {/* Design Tools */}
                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3">Design Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.designTools.map((tool, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-200 dark:border-primary-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-900 dark:text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[95vh]">
              <Image src={fullscreenImage} alt="Expanded design" fill className="object-contain" />
              <button
                onClick={(e) => { e.stopPropagation(); setFullscreenImage(null) }}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition backdrop-blur-sm"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects


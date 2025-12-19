'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Figma, Palette, Layers, Users, Zap, Target, Sparkles, Monitor, Smartphone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const designSkills = [
    { name: 'Figma', icon: Figma, color: 'text-parrot-500', description: 'Expert-level proficiency' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-parrot-600', description: 'Creating beautiful interfaces' },
    { name: 'Web Design', icon: Monitor, color: 'text-green-500', description: 'Websites from scratch' },
    { name: 'App Design', icon: Smartphone, color: 'text-green-600', description: 'Mobile apps from scratch' },
    { name: 'Website to App', icon: Zap, color: 'text-parrot-500', description: 'Converting websites to apps' },
    { name: 'Website Redesign', icon: Target, color: 'text-green-500', description: 'Modern redesigns' },
  ]

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
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
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
            About Me
          </motion.h2>
            <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a <strong className="text-gray-900 dark:text-white">Figma Expert & UI/UX Designer</strong> from Gujranwala, Pakistan. 
            I specialize in creating websites and mobile apps from scratch, converting websites into apps, 
            and redesigning existing websites—all with expert-level Figma skills and a focus on beautiful, functional design.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="design-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">My Design Philosophy</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a <strong className="text-gray-900 dark:text-white">Figma expert</strong> and design specialist who creates beautiful, functional digital experiences from the ground up. 
                I design websites and mobile apps from scratch, transform existing websites into native mobile applications, 
                and redesign websites to modern standards—all with a focus on user-centered design and pixel-perfect execution.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My expertise spans the entire design process: from initial concept and wireframing in Figma, 
                to creating comprehensive design systems, interactive prototypes, and production-ready designs. 
                I combine strategic thinking with creative execution to deliver designs that are both beautiful and functional.
              </p>
              <div className="bg-gradient-to-r from-parrot-50 to-green-50 dark:from-parrot-900/20 dark:to-green-900/20 p-4 rounded-xl border border-parrot-200 dark:border-parrot-800 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">What I Do:</strong> Create websites & apps from scratch • Convert websites to mobile apps • Redesign existing websites • Build design systems in Figma
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 w-fit"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </motion.button>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-6 design-card"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Designing</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center p-6 design-card"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent-600 via-accent-500 to-parrot-500 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Designs Created</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-6 design-card"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-parrot-600 via-green-500 to-green-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="design-card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-parrot-500 via-parrot-600 to-green-500 shadow-lg shadow-parrot-500/30">
                  <Figma className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                    Design Expertise
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Expert Designer & Figma Specialist</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-parrot-50 hover:to-green-50 dark:hover:from-parrot-900/20 dark:hover:to-green-900/20 transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-parrot-300 dark:hover:border-parrot-700"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-parrot-100 to-green-100 dark:from-parrot-900/30 dark:to-green-900/30 ${skill.color} shadow-sm`}>
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 dark:text-white font-bold mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 design-card p-6"
            >
              <h4 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4">
                My Design Process
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-parrot-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-900 dark:text-white">Figma Design:</strong> Creating pixel-perfect designs, components, and design systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-900 dark:text-white">From Scratch:</strong> Designing websites and mobile apps from concept to completion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-parrot-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-900 dark:text-white">Website to App:</strong> Converting existing websites into native mobile applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-gray-900 dark:text-white">Redesigns:</strong> Modernizing and redesigning websites for better UX and aesthetics</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About


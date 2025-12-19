'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Palette } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/m-abdullah-swe',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/m-abdullah-se',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:abdullah@codebeyond.site',
      color: 'hover:text-primary-500'
    }
  ]

  return (
    <footer className="bg-white text-gray-800 dark:bg-black dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Palette className="h-6 w-6 text-gradient-primary" />
              <h3 className="text-2xl font-heading font-bold text-gradient">
                Design Studio
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md leading-relaxed">
              Creating beautiful, user-centered digital experiences through thoughtful design 
              and creative problem-solving.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-full transition-all duration-200 ${social.color} shadow-soft`}
                title={social.name}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 btn-primary"
            >
              <ArrowUp className="h-5 w-5" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Muhammad Abdullah | Design Studio. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


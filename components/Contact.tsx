'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Briefcase, MessageCircle, Palette } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ayesha.ali@example.com',
      link: 'mailto:ayesha.ali@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 305 8880583',
      link: 'tel:+923058880583'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote / Global',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/ayesha-ali",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayesha-ali-1049s/",
      color: "hover:text-blue-600",
    },
    {
      icon: Briefcase,
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0119ffc6aac096a314?mp_source=share",
      color: "hover:text-emerald-500",
    },
    {
      icon: MessageCircle,
      name: "Fiverr",
      url: "https://fiverr.com/coding_james",
      color: "hover:text-green-500",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
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
            Let's Create Something Amazing Together ✨
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 via-parrot-500 to-green-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm open to design projects, collaborations, or just a friendly chat about design. 
            Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="design-card p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
                Send me a message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl text-green-700 dark:text-green-400"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl text-red-700 dark:text-red-400"
                >
                  Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="design-card p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-parrot-500 via-green-500 to-green-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
                  Get in touch
                </h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                      <info.icon className="h-6 w-6 text-primary-500 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="design-card p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500 via-parrot-500 to-green-500">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
                  Follow me
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 border border-gray-200 dark:border-gray-600 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="design-card p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Available for projects</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm currently available for design projects and collaborations. 
                Let's discuss your next design challenge!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact


import { portfolioData } from '../data/portfolioData'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.3,
    },
  },
}

const charVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.23,
      ease: 'easeOut',
    },
  },
}

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 1.4,
    },
  },
}

export default function Hero() {
  const name = portfolioData.name
  const characters = name.split('')

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-4xl mx-auto w-full px-6 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={heroImg}
              alt={portfolioData.name}
              fetchpriority="high"
              className="w-48 h-48 rounded-full object-cover ring-4 ring-slate-200 dark:ring-slate-700"
            />
          </motion.div>
          <div className="md:w-2/3">
            <div className="flex items-baseline">
              <h1 className="text-4xl md:text-5xl font-bold text-accent-2 mb-2">
                <motion.span
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-flex"
                >
                  {characters.map((char, index) => (
                    <motion.span
                      key={index}
                      variants={charVariants}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.span>
              </h1>
            </div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                {portfolioData.title}
              </p>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                {portfolioData.bio}
              </p>
              <div className="flex gap-4 mt-8">
                {portfolioData.social.map((social) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      aria-label={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

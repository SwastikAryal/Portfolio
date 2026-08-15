import { portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <Reveal id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-accent-2 mb-12 text-center">
          Tech Stack
        </h2>
        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {portfolioData.skills.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <h3 className="text-sm font-semibold text-accent-2 mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md dark:hover:shadow-white/20 hover:border-accent dark:hover:border-accent transition-all duration-200 ease-out cursor-default"
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <span className="font-mono text-sm text-slate-700 dark:text-slate-300 text-center block">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Reveal>
  )
}

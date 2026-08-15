import { portfolioData } from '../data/portfolioData'
import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { Braces, Server, Database, GitBranch, Code2 } from 'lucide-react'

const iconMap = {
  Frontend: Braces,
  Backend: Server,
  Database: Database,
  Tools: GitBranch,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {portfolioData.skills.map((category) => {
            const Icon = iconMap[category.category] || Code2
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-white/20 hover:border-accent dark:hover:border-accent transition-all duration-200 ease-out"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {category.category}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Reveal>
  )
}

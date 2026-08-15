import { portfolioData } from '../data/portfolioData'
import { GitHubIcon, ExternalIcon } from './Icons'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <Reveal id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-accent-2 mb-12 text-center">
          Projects
        </h2>
        <div className="space-y-8">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={project.title}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-white/20 hover:border-accent dark:hover:border-accent transition-all duration-200 ease-out"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                 transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
                 whileHover={{ y: -6 }}
               >
                 <div                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6`}>
                   <div className="lg:w-1/2 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                   </div>
                   <div className="lg:w-1/2 space-y-4 p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors"
                        >
                          <ExternalIcon className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-white hover:text-accent transition-colors"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}

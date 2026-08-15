import { portfolioData } from '../data/portfolioData'
import { GitHubIcon, ExternalIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="py-20 pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-accent-2 mb-12 text-center">
          Projects
        </h2>
        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <article
                key={project.title}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-6 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-lg bg-slate-200 dark:bg-slate-700"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4">
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
                        className="font-mono text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700"
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
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent transition-colors"
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
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent transition-colors"
                      >
                        <GitHubIcon className="w-4 h-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

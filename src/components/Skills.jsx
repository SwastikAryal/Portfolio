import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Tech Stack
        </h2>
        <div className="space-y-6">
          {portfolioData.skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 
                               text-slate-700 dark:text-slate-300 rounded-lg 
                               border border-slate-200 dark:border-slate-700 
                               hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

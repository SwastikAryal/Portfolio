import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">
          Skills
        </h2>
        <div className="space-y-10">
          {portfolioData.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700"
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

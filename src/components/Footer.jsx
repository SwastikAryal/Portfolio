import { GitHubIcon, LinkedInIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {portfolioData.social.map((social) => {
            if (social.icon === 'github' || social.icon === 'linkedin') {
              const Icon = social.icon === 'github' ? GitHubIcon : LinkedInIcon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            }
            return null
          })}
        </div>
      </div>
    </footer>
  )
}

import { portfolioData } from '../data/portfolioData'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 pt-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
          Interested in working together or just want to say hello? Reach out —
          I'm open to new opportunities and collaborations.
        </p>
        <div className="text-slate-900 dark:text-slate-100 font-medium mb-6">
          {portfolioData.email}
        </div>
        <div className="flex justify-center gap-4">
          {portfolioData.social.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                aria-label={social.name}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            )
          })}
        </div>
        <p className="mt-10 text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </section>
  )
}

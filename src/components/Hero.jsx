import { portfolioData } from '../data/portfolioData'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'
import heroImg from '../assets/hero.png'

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-4xl mx-auto w-full px-6 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={heroImg}
              alt={portfolioData.name}
              className="w-48 h-48 rounded-full object-cover ring-4 ring-slate-200 dark:ring-slate-700"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-2 mb-2">
              {portfolioData.name}
            </h1>
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
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

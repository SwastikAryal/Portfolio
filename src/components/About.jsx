import { portfolioData } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          About
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I'm Swastik Aryal, a Frontend Developer focused on building modern,
              responsive, and user-friendly web applications with React and JavaScript.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I enjoy turning ideas into clean, interactive interfaces using React,
              JavaScript, and Tailwind CSS, with a focus on reusable components,
              responsive layouts, and smooth user experiences. Alongside frontend
              development, I'm currently expanding my backend skills with Node.js
              and exploring backend development, APIs, and server-side technologies.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              Through projects like ShopSwift, FootyKit, and CoFound, I've gained
              practical experience building real-world applications and turning ideas
              into functional products. I'm continuously learning, improving my
              development skills, and exploring new ways to build better web experiences.
            </p>
          </div>
          <div className="md:w-1/3 text-slate-600 dark:text-slate-400">
            <dl className="space-y-2">
              <div>
                <dt className="font-medium text-slate-900 dark:text-slate-100">Email</dt>
                <dd>{portfolioData.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900 dark:text-slate-100">Location</dt>
                <dd>{portfolioData.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900 dark:text-slate-100">Status</dt>
                <dd>Open to opportunities</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

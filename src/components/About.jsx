import Reveal from './Reveal'
import aboutImg from '../assets/about.png'

export default function About() {
  return (
    <Reveal id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-accent-2 mb-12 text-center">
          About
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="lg:w-3/5 text-left">
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm Swastik Aryal, a Frontend Developer focused on building modern,
                responsive, and user-friendly web applications with React and JavaScript.
              </p>
              <p>
                I enjoy turning ideas into clean, interactive interfaces using React,
                JavaScript, and Tailwind CSS, with a focus on reusable components,
                responsive layouts, and smooth user experiences. Alongside frontend
                development, I'm currently expanding my backend skills with Node.js
                and exploring backend development, APIs, and server-side technologies.
              </p>
              <p>
                Through projects like ShopSwift, FootyKit, and CoFound, I've gained
                practical experience building real-world applications and turning ideas
                into functional products. I'm continuously learning, improving my
                development skills, and exploring new ways to build better web experiences.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
              <img
                src={aboutImg}
                alt="About"
                className="w-full h-32 object-cover rounded-lg mb-6"
              />
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Frontend Development
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Building modern, responsive, and reusable React websites with a focus on clean interfaces and smooth user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Currently expanding my full-stack skills, with a focus on learning Node.js for backend development, APIs, and connecting frontend applications with backend services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

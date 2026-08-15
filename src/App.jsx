import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App

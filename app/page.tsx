import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  )
}

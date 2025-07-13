"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Cloud, Wrench } from "lucide-react"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C/C++", "JavaScript", "SQL (Postgres)", "HTML/CSS", "R"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [
        "React",
        "Node.js",
        "Flask",
        "JUnit",
        "WordPress",
        "Material-UI",
        "FastAPI",
        "pandas",
        "NumPy",
        "Matplotlib",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "Docker", "TravisCI", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      skills: ["Google Cloud Platform", "MongoDB", "PostgreSQL", "Linux", "Windows"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg border border-white/20 hover:border-purple-400/50 hover:text-white transition-all duration-300 cursor-default"
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

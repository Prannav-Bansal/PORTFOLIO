"use client"

import { useEffect, useRef } from "react"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="/image.png?height=300&width=300"
              alt="Pranav Bansal"
              className="rounded-full w-64 h-64 object-cover border-4 border-purple-500 shadow-lg animate-fade-in"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start">
              ⚡ 👨‍💻 About Me — A Developer with a Vision!
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              🎓 I’m a B.Tech CSE (AI/DS) sophomore on a mission to blend intelligence with creativity.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              🚀 I love pushing boundaries by solving real-world problems using cutting-edge tech.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">💡 I Build:</h4>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                <li>⚙️ Full-stack web apps with MERN stack</li>
                <li>🧫 AI/ML solutions for real-world problems</li>
                <li>🧠 Intelligent agents using LLMs + RAG pipelines</li>
                <li>🔐 Secure backends with JWT, Auth, Microservices</li>
              </ul>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              ⚡ Fun Fact: I enjoy connecting theoretical concepts with practical applications—whether it’s crafting AI
              solutions or developing websites that simplify life. I am from Delhi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

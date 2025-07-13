"use client"

import { useEffect, useRef } from "react"
import { Trophy, Target, Zap, Users } from "lucide-react"

export default function Achievements() {
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

  const achievements = [
    {
      title: "Top 5 in Ideathon at IIT Delhi",
      description:
        "Proposed a Women Safety App during the Tryst event and secured a top 5 position among hundreds of participants.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      category: "Innovation",
    },
    {
      title: "Dalal Street Competition Finalist",
      description:
        "Cleared prelims and advanced to the final round of this prestigious stock trading competition, focusing on portfolio maximization strategies.",
      icon: Target,
      color: "from-green-500 to-teal-500",
      category: "Finance",
    },
    {
      title: "Top 10 in Speedathon",
      description:
        "Ranked in the Top 10 in this rapid development competition after successfully clearing the preliminary rounds.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      category: "Development",
    },
    {
      title: "National Social Summit Recognition",
      description:
        "Received appreciation for contributions during the National Social Summit at IIT Roorkee in the Model United Nations (Lok Sabha).",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      category: "Leadership",
    },
  ]

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Achievements &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Recognition
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="text-white" size={28} />
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} text-white`}
                  >
                    {achievement.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {achievement.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

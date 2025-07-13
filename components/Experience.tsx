"use client"

import { useEffect, useRef } from "react"
import { Trophy, Users, Calendar, Award } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Code for Bharat Hackathon",
      organization: "Microsoft Office",
      period: "Feb 2025",
      description:
        "Participated in the Code for Bharat Hackathon held at Microsoft Office, competing against 300+ teams. Cleared Round 1 by presenting a detailed PPT and a functional prototype during the online presentation.",
      achievement: "Secured a position among the top 20 teams and achieved a top 10 finish in the finals.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Google Developer Student Clubs (GDSC)",
      organization: "Graphic Era University",
      period: "Aug 2024",
      description:
        "Completed the Gen AI Study Jam Program, earning badges in Introduction to Generative AI and Level 3: GenAIus Registries. Successfully completed the Develop GenAI Apps with Gemini and Streamlit lab.",
      achievement: "Received SWAGS and recognition for outstanding participation.",
      icon: Users,
      color: "from-blue-500 to-purple-500",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Experience &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Involvement
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center`}
                  >
                    <exp.icon className="text-white" size={28} />
                  </div>
                </div>

                <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-purple-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 mb-2 font-medium">{exp.organization}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex items-start space-x-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <Award className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-green-400 font-medium">{exp.achievement}</p>
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

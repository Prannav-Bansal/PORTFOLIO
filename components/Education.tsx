"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
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

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Graphic Era University, Dehradun",
      period: "Aug 2023 - Present",
      status: "Currently Pursuing",
    },
    {
      degree: "12th Grade (C.B.S.E)",
      institution: "Ramakrishna Sr. Sec. School, New Delhi",
      period: "2023",
      status: "Completed",
    },
    {
      degree: "10th Grade (C.B.S.E)",
      institution: "Ramakrishna Sr. Sec. School, New Delhi",
      period: "2021",
      status: "Completed",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Educational{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Journey</span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>

                <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-purple-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === "Currently Pursuing"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

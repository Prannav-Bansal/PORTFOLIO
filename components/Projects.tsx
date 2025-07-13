"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
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

  const projects = [
    {
      title: "Advanced Ensemble Malware Detection Framework",
      period: "April 2025",
      description:
        "Engineered a high-performance malware detection system using ensemble learning (XGBoost, Extra-Trees, Random Forest) to identify obfuscated threats across Windows, Android, and IoT platforms. Achieved 90-95% detection accuracy on four real-world cybersecurity datasets.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      highlights: ["90-95% Detection Accuracy", "Multi-platform Support", "Advanced Feature Selection"],
      category: "AI/ML",
    },
    {
      title: "Full Stack To-Do App Website",
      period: "Jan-Feb 2025",
      description:
        "Designed and implemented a full-stack to-do application for task management with CRUD functionality. Enabled users to add, edit, delete, and mark tasks as completed, ensuring a seamless user experience.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      highlights: ["Complete CRUD Operations", "Responsive Design", "Real-time Updates"],
      category: "Full Stack",
    },
    {
      title: "Full Stack Finance Management Tracker",
      period: "Dec 2024-Jan 2025",
      description:
        "Developed a web-based finance tracker that enables users to manage budgets, add expenses dynamically, and visualize spending trends through pictorial graphs. Integrated financial advice module and chatbot assistance.",
      tech: ["MongoDB", "HTML", "CSS", "JavaScript", "Chart.js"],
      highlights: ["PDF Report Generation", "Data Visualization", "AI Chatbot Integration"],
      category: "Full Stack",
    },
    {
      title: "Breast Cancer Detection Using Deep Learning",
      period: "Nov-Dec 2024",
      description:
        "Developed a deep learning model based on InceptionV3 to classify MRI images as benign or malignant, aiding early diagnosis of breast cancer. Fine-tuned using transfer learning techniques.",
      tech: ["Python", "TensorFlow", "InceptionV3", "Transfer Learning"],
      highlights: ["Medical Image Classification", "Transfer Learning", "High Accuracy"],
      category: "AI/ML",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "from-purple-500 to-pink-500"
      case "Full Stack":
        return "from-blue-500 to-cyan-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}
                >
                  {project.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {project.period}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Zap className="mr-2 text-yellow-400" size={18} />
                  Key Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  <Github className="mr-2" size={16} />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

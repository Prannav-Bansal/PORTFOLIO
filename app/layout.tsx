import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// Import the new Navbar component
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranav Bansal - Full Stack Developer & AI Enthusiast",
  description:
    "Computer Science student passionate about cybersecurity, machine learning, and building innovative solutions. Currently pursuing B.Tech at Graphic Era University with expertise in full-stack development and AI.",
  keywords:
    "Pranav Bansal, Full Stack Developer, AI, Machine Learning, Cybersecurity, Computer Science, React, Node.js, Python",
  authors: [{ name: "Pranav Bansal" }],
  creator: "Pranav Bansal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranavbansal.dev",
    title: "Pranav Bansal - Full Stack Developer & AI Enthusiast",
    description:
      "Computer Science student passionate about cybersecurity, machine learning, and building innovative solutions.",
    siteName: "Pranav Bansal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Bansal - Full Stack Developer & AI Enthusiast",
    description:
      "Computer Science student passionate about cybersecurity, machine learning, and building innovative solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
     icons: {
    icon: "public/image.png", // Change this to your favicon file path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Add the Navbar component to the RootLayout */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}

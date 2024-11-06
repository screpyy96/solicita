'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Search, Code, BarChart } from 'lucide-react'

const TechWorkProcess = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Analiză de piață și Strategie",
      description: "Începem cu o analiză detaliată a afacerii tale și dezvoltăm o strategie personalizată pentru serviciile de SEO, dezvoltare web și mobilă, și publicitate online.",
      color: "bg-blue-600",
      icon: Search
    },
    {
      number: 2,
      title: "Implementare și Dezvoltare",
      description: "Echipa noastră de experți implementează strategiile SEO, dezvoltă site-ul web sau aplicația mobilă, și lansează campaniile de publicitate online conform planului stabilit.",
      color: "bg-purple-600",
      icon: Code
    },
    {
      number: 3,
      title: "Monitorizare și Optimizare",
      description: "Monitorizăm constant performanța tuturor serviciilor, făcând ajustări și optimizări pentru a asigura cele mai bune rezultate pentru afacerea ta.",
      color: "bg-pink-600",
      icon: BarChart
    }
  ]

  useEffect(() => {
    const canvas = document.getElementById('tech-background')
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      })
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'

      particles.forEach((particle, i) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(drawParticles)
    }

    drawParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="py-24 md:py-36 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
      <canvas id="tech-background" className="absolute inset-0" />
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="mb-20 text-4xl xl:text-5xl text-white text-center font-bold">
          Cum Lucrăm
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="p-8 lg:p-16 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10">
            <div className="flex flex-wrap -mx-4 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                  <motion.button
                    className={`w-full p-6 rounded-xl transition-all duration-300 ${
                      activeStep === index ? `${step.color} shadow-lg` : 'bg-white/10 hover:bg-white/20'
                    }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl text-white font-bold">{step.number}</span>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-2">{step.title}</h3>
                  </motion.button>
                </div>
              ))}
            </div>
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl text-white font-bold mb-4">{steps[activeStep].title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">{steps[activeStep].description}</p>
              <motion.a
                href="#contact"
                className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Începe Procesul <ChevronRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechWorkProcess
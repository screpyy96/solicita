'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const TechHero = () => {
  const canvasRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

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

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } })
  }, [controls])

  const services = [
    { title: 'Servicii SEO', description: 'Optimizare pentru motoarele de căutare', icon: '🔍' },
    { title: 'Dezvoltare Web', description: 'Site-uri web personalizate și eficiente', icon: '💻' },
    { title: 'Dezvoltare Mobilă', description: 'Aplicații native și cross-platform', icon: '📱' },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTIwIDM1YzguMjg0IDAgMTUtNi43MTYgMTUtMTUgMC04LjI4NC06LjcxNi0xNS0xNS0xNS04LjI4NCAwLTE1IDYuNzE2LTE1IDE1IDAgOC4yODQgNi43MTYgMTUgMTUgMTV6bTAtNWM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMC0xMCA0LjQ3Ny0xMCAxMCA0LjQ3NyAxMCAxMCAxMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="mb-6 text-4xl md:text-5xl xl:text-6xl font-bold text-white">
            Soluții Digitale
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pentru Afacerea Ta
            </span>
          </h1>
          <p className="mb-8 text-xl text-white font-medium leading-relaxed">
            Expertiză în SEO, Dezvoltare Web și Aplicații Mobile pentru a-ți impulsiona prezența digitală.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/20 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Începe Acum
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  )
}

export default TechHero
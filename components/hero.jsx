'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Code, Search, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function TechAgencyHero() {
  const canvasRef = useRef(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

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

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.connections = []
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 200, 255, 0.7)'
        ctx.fill()
      }

      connect() {
        this.connections = particles.filter(
          particle => 
            particle !== this && 
            Math.hypot(this.x - particle.x, this.y - particle.y) < 100
        ).slice(0, 3)

        this.connections.forEach(particle => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.strokeStyle = 'rgba(100, 200, 255, 0.2)'
          ctx.lineWidth = 0.5
          ctx.stroke()
        })
      }
    }

    const particles = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
        particle.connect()
      })
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const services = [
    { title: 'Servicii SEO', description: 'Optimizare pentru motoarele de căutare', icon: Search },
    { title: 'Dezvoltare Web', description: 'Site-uri web personalizate și eficiente', icon: Code },
    { title: 'Dezvoltare Mobilă', description: 'Aplicații native și cross-platform', icon: Smartphone },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="mb-6 text-4xl md:text-5xl xl:text-6xl font-bold text-white">
            Inovație Digitală
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Pentru Succesul Tău Online
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mb-8 text-xl text-white font-medium leading-relaxed">
            Expertiză în SEO, Dezvoltare Web și Aplicații Mobile pentru a-ți transforma viziunea în realitate digitală.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/20 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <a href="#contact">
              Începe Acum
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, Share2, BarChart, Mail, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalMarketingPage() {
  const services = [
    { title: 'SEO', description: 'Optimizare pentru motoarele de căutare', icon: Search },
    { title: 'Social Media', description: 'Strategii de social media marketing', icon: Share2 },
    { title: 'Analiză și Raportare', description: 'Măsurarea și optimizarea performanței', icon: BarChart },
    { title: 'Email Marketing', description: 'Campanii de email personalizate', icon: Mail },
    { title: 'Marketing Mobile', description: 'Strategii pentru dispozitive mobile', icon: Smartphone },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <header className="py-20 text-center">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Marketing Digital
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Strategii inovatoare pentru a-ți crește prezența online și a atrage mai mulți clienți
        </motion.p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            De ce Marketing Digital?
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {['Vizibilitate Crescută', 'Targetare Precisă', 'Costuri Reduse', 'Măsurabil și Adaptabil'].map((title, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white/10 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300">Beneficiile marketingului digital pentru afacerea ta, explicate pe scurt.</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Serviciile Noastre
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/10 border-none hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-blue-400" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Pregătit să-ți Transformi Prezența Online?
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transition-transform transform hover:scale-105">
              <a href="/contact" className="flex items-center">
                Contactează-ne Acum
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

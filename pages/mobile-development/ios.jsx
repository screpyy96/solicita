'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Shield, Zap, Globe, Code, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: 'Dezvoltare Aplicații iOS | Servicii Profesionale | solicita.ro',
  description: 'Servicii profesionale de dezvoltare aplicații iOS pentru iPhone și iPad. Expertiză în Swift, SwiftUI și integrare cu ecosistemul Apple.',
  keywords: 'dezvoltare iOS, aplicații iPhone, dezvoltare iPad, Swift, SwiftUI, dezvoltare aplicații mobile, iOS developer',
  openGraph: {
    title: 'Dezvoltare Aplicații iOS | Servicii Profesionale | solicita.ro',
    description: 'Servicii profesionale de dezvoltare aplicații iOS pentru iPhone și iPad. Expertiză în Swift, SwiftUI și integrare cu ecosistemul Apple.',
    url: 'https://solicita.ro/mobile-development/ios',
    siteName: 'solicita.ro',
    images: [
      {
        url: 'https://solicita.ro/images/mobile.jpg', // Înlocuiește cu imaginea ta
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezvoltare Aplicații iOS | Servicii Profesionale | solicita.ro',
    description: 'Servicii profesionale de dezvoltare aplicații iOS pentru iPhone și iPad. Expertiză în Swift, SwiftUI și integrare cu ecosistemul Apple.',
    images: ['https://solicita.ro/images/mobile.jpg'], // Înlocuiește cu imaginea ta
  },
  alternates: {
    canonical: 'https://solicita.ro/mobile-development/ios',
  },
};

export default function IOSDevelopmentPage() {
  const features = [
    { title: 'Design Intuitiv', description: 'Interfețe elegante și ușor de utilizat, specifice iOS', icon: Smartphone },
    { title: 'Securitate Avansată', description: 'Protecție robustă a datelor utilizatorilor', icon: Shield },
    { title: 'Performanță Optimizată', description: 'Aplicații rapide și eficiente pentru dispozitivele Apple', icon: Zap },
    { title: 'Integrare cu Ecosistemul Apple', description: 'Funcționalitate perfectă cu alte servicii și dispozitive Apple', icon: Globe },
    { title: 'Cod de Înaltă Calitate', description: 'Dezvoltare folosind cele mai recente tehnologii iOS', icon: Code },
    { title: 'Suport Local', description: 'Asistență în limba română și înțelegere a pieței locale', icon: Users },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          Dezvoltare Aplicații iOS
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Creăm aplicații iOS inovatoare și performante pentru piața din România
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
            De ce să Alegi Dezvoltarea iOS?
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Utilizatori de Calitate</h3>
              <p>Deși Android domină piața din România, utilizatorii iOS tind să fie mai angajați și să cheltuiască mai mult în aplicații.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Standarde Înalte de Design</h3>
              <p>Aplicațiile iOS sunt cunoscute pentru interfețele lor elegante și intuitive, oferind o experiență premium utilizatorilor.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Securitate Robustă</h3>
              <p>iOS oferă un mediu sigur pentru aplicații, crucial pentru companiile din România care gestionează date sensibile.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integrare cu Ecosistemul Apple</h3>
              <p>Dezvoltă aplicații care se integrează perfect cu alte dispozitive și servicii Apple populare în România.</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Caracteristicile Serviciului Nostru
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/10 border-none hover:bg-white/20 transition-colors duration-300">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
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
            Procesul Nostru de Dezvoltare
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">1. Analiză și Planificare</h3>
              <p>Înțelegem nevoile afacerii tale și ale utilizatorilor din România pentru a crea o strategie eficientă.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2. Design UX/UI</h3>
              <p>Creăm interfețe intuitive și atractive, adaptate preferințelor utilizatorilor români de iOS.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">3. Dezvoltare</h3>
              <p>Folosim cele mai recente tehnologii iOS pentru a construi aplicații robuste și performante.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">4. Testare și Optimizare</h3>
              <p>Asigurăm calitatea și performanța aplicației pe diferite dispozitive iOS populare în România.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">5. Lansare și Mentenanță</h3>
              <p>Gestionăm procesul de lansare în App Store și oferim suport continuu post-lansare.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">6. Analiză și Îmbunătățire</h3>
              <p>Monitorizăm performanța aplicației și implementăm îmbunătățiri bazate pe feedback-ul utilizatorilor români.</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Pregătit să Lansezi Următoarea Ta Aplicație iOS în România?
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="/contact">
                Contactează-ne pentru o Consultație Gratuită
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
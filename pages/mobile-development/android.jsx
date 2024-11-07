'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Shield, Zap, Globe, Code, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function AndroidDevelopmentPage() {
  const features = [
    { title: 'Design Material', description: 'Interfețe moderne conform standardelor Material Design', icon: Smartphone },
    { title: 'Securitate Robustă', description: 'Protecție avansată a datelor utilizatorilor', icon: Shield },
    { title: 'Performanță Optimă', description: 'Aplicații rapide pentru toate dispozitivele Android', icon: Zap },
    { title: 'Compatibilitate Extinsă', description: 'Funcționare pe multiple versiuni Android și device-uri', icon: Globe },
    { title: 'Cod Optimizat', description: 'Dezvoltare folosind cele mai bune practici Android', icon: Code },
    { title: 'Suport Local', description: 'Asistență în română și înțelegerea pieței locale', icon: Users },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
      <header className="py-20 text-center">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Dezvoltare Aplicații Android
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Dezvoltăm aplicații Android performante pentru piața din România
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
            De ce să Alegi Dezvoltarea Android?
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Piață Dominantă</h3>
              <p>Android deține peste 70% din piața de smartphone-uri din România, oferind acces la un public vast.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Flexibilitate în Design</h3>
              <p>Material Design oferă libertate creativă în dezvoltarea interfețelor moderne și intuitive.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cost Eficient</h3>
              <p>Dezvoltarea pentru Android oferă un raport excelent cost-beneficiu pentru piața din România.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Distribuție Flexibilă</h3>
              <p>Multiple canale de distribuție, inclusiv Google Play și magazine alternative.</p>
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
                    <feature.icon className="w-12 h-12 mb-4 text-green-400" />
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
              <h3 className="text-xl font-semibold mb-4">1. Analiză și Strategie</h3>
              <p>Evaluăm nevoile proiectului și definim strategia optimă pentru piața Android din România.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">2. Design UX/UI</h3>
              <p>Creăm interfețe intuitive conform principiilor Material Design și preferințelor locale.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">3. Dezvoltare</h3>
              <p>Implementăm aplicația folosind cele mai recente tehnologii și practici Android.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">4. Testare</h3>
              <p>Testăm extensiv pe multiple dispozitive și versiuni Android populare în România.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">5. Lansare</h3>
              <p>Gestionăm procesul de publicare în Google Play și oferim suport post-lansare.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">6. Mentenanță</h3>
              <p>Asigurăm actualizări regulate și optimizări bazate pe feedback-ul utilizatorilor.</p>
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
            Pregătit să Dezvolți o Aplicație Android de Succes?
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/contact">
                Solicită o Consultație Gratuită
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export const metadata = {
  title: 'Dezvoltare Aplicații Android | Servicii Profesionale | solicita.ro',
  description: 'Servicii complete de dezvoltare aplicații Android. Expertiză în Kotlin, Java și integrare cu ecosistemul Google Play.',
  keywords: 'dezvoltare android, aplicații android, kotlin, java, google play, dezvoltare aplicații mobile, android developer',
  openGraph: {
    title: 'Dezvoltare Aplicații Android | Servicii Profesionale | solicita.ro',
    description: 'Servicii complete de dezvoltare aplicații Android. Expertiză în Kotlin, Java și integrare cu ecosistemul Google Play.',
    url: 'https://solicita.ro/mobile-development/android',
    siteName: 'solicita.ro',
    images: [
      {
        url: 'https://solicita.ro/images/mobile.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezvoltare Aplicații Android | Servicii Profesionale | solicita.ro',
    description: 'Servicii complete de dezvoltare aplicații Android. Expertiză în Kotlin, Java și integrare cu ecosistemul Google Play.',
    images: ['https://solicita.ro/images/mobile.jpg'],
  },
  alternates: {
    canonical: 'https://solicita.ro/mobile-development/android',
  },
};

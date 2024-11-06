'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Server, Globe } from 'lucide-react'

const TechPricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Pentru utilizatori individuali și proiecte mici",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Tracking timp nelimitat",
        "Facturi nelimitate",
        "Proiecte (limitat la 3)"
      ],
      icon: Zap,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Business",
      description: "Pentru echipe și afaceri în creștere",
      price: { monthly: 52, yearly: 620 },
      features: [
        "Clienți nelimitați",
        "Sarcini nelimitate",
        "Șabloane de proiect"
      ],
      icon: Server,
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Enterprise",
      description: "Pentru corporații și echipe mari",
      price: { monthly: 104, yearly: 1240 },
      features: [
        "Programare & încărcare angajați",
        "Onboarding & training gratuit",
        "Managementul concediilor angajaților"
      ],
      icon: Globe,
      color: "from-green-400 to-green-600"
    }
  ]

  return (
    <section className="py-24 md:py-40 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="mb-10 text-4xl md:text-5xl font-bold text-white">Planuri de Prețuri Complete</h2>
          <p className="mb-12 text-xl text-gray-300">
            Alegeți planul perfect pentru nevoile dvs. de dezvoltare și scalare.
          </p>
          <div className="inline-flex items-center p-1 bg-gray-800 rounded-full">
            <button
              className={`py-2 px-4 rounded-full transition-all duration-300 ${
                !isYearly ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Lunar
            </button>
            <button
              className={`py-2 px-4 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-blue-600 text-white' : 'text-gray-300'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Anual
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="w-full md:w-1/3 p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-6 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-gray-400">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">
                    RON {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-400">
                    {isYearly ? '/an' : '/lună'}
                  </span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-4 rounded-full bg-gradient-to-r ${plan.color} text-white font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Alege Planul
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechPricing
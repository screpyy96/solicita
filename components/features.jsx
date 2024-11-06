import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Globe, Smartphone } from 'lucide-react';

const DigitalImpact = () => {
  const impactData = [
    { 
      title: "Creștere în Trafic Organic", 
      value: "+150%", 
      description: "Creștere medie în traficul organic pentru clienții noștri în primele 6 luni.",
      icon: Globe,
      color: "from-blue-400 to-cyan-400"
    },
    { 
      title: "Rata de Conversie Îmbunătățită", 
      value: "+75%", 
      description: "Creștere în rata de conversie pentru site-urile web optimizate de noi.",
      icon: BarChart2,
      color: "from-purple-400 to-pink-400"
    },
    { 
      title: "Retenție Utilizatori Aplicații", 
      value: "85%", 
      description: "Rata de retenție a utilizatorilor pentru aplicațiile mobile dezvoltate.",
      icon: Smartphone,
      color: "from-indigo-400 to-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 via-gray-900 to-gray-900 relative">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Impact Măsurabil
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Rezultate concrete care transformă investiția ta în creștere reală
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 block`}>
                  {item.value}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <a href="#" 
                   className="inline-flex items-center text-white font-semibold hover:opacity-80 transition-opacity">
                  Vezi detalii <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" 
             className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Programează o Consultație Gratuită
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalImpact;
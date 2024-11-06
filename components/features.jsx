import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart2, Globe, Smartphone } from 'lucide-react';

const DigitalImpact = () => {
  const impactData = [
    { 
      title: "Creștere în Trafic Organic", 
      value: "+150%", 
      description: "Creștere medie în traficul organic pentru clienții noștri în primele 6 luni.",
      icon: Globe
    },
    { 
      title: "Rata de Conversie Îmbunătățită", 
      value: "+75%", 
      description: "Creștere în rata de conversie pentru site-urile web optimizate de noi.",
      icon: BarChart2
    },
    { 
      title: "Retenție Utilizatori Aplicații", 
      value: "85%", 
      description: "Rata de retenție a utilizatorilor pentru aplicațiile mobile dezvoltate.",
      icon: Smartphone
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="mb-10 text-4xl md:text-5xl text-white text-center font-bold">
          Impactul Soluțiilor Noastre Digitale
        </h2>
        <p className="mb-20 text-xl text-white text-center max-w-3xl mx-auto">
          Descoperă cum soluțiile noastre transformă afacerile online, aducând rezultate măsurabile și creștere sustenabilă.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <item.icon className="w-12 h-12 text-blue-400" />
                <span className="text-4xl font-bold text-white">{item.value}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                Află mai multe <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-100 transition-colors duration-300">
            Descoperă Potențialul Tău Digital
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalImpact;
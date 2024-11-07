import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PlatformCard = ({ title, description, imageSrc }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105"
  >
    <Image src={imageSrc} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const CrossPlatformServices = () => {
  const platforms = [
    {
      title: "Dezvoltare Web",
      description: "Site-uri web responsive optimizate pentru toate browserele și dispozitivele.",
      imageSrc: "/images/web.png"
    },
    {
      title: "Aplicații Mobile",
      description: "Aplicații native și hibride pentru platformele iOS și Android.",
      imageSrc: "/images/mobile.jpg"
    },
    {
      title: "Aplicații Desktop",
      description: "Software performant pentru Windows, macOS și Linux.",
      imageSrc: "/images/desktop.webp"
    },
    {
      title: "Aplicații Smart TV",
      description: "Aplicații interactive pentru televizoare smart și dispozitive de streaming.",
      imageSrc: "/images/smart-tv.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,50,255,0.2),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(150,50,255,0.2),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Excelență Cross-Platform</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Serviciile noastre de marketing digital, SEO, dezvoltare web și aplicații acoperă toate platformele majore, 
              asigurând prezența brandului tău oriunde se află audiența ta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <PlatformCard key={index} {...platform} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">De Ce Să Alegi Serviciile Noastre Cross-Platform?</h3>
            <ul className="text-left max-w-2xl mx-auto space-y-6 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-bold">✓</span>
                Experiență de brand consistentă pe toate dispozitivele și platformele
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-bold">✓</span>
                Performanță și experiență utilizator optimizate pentru fiecare platformă
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-bold">✓</span>
                Strategii SEO integrate pentru vizibilitate maximă
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400 font-bold">✓</span>
                Proces de dezvoltare eficient pentru lansare rapidă pe piață
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              href="/contact" 
              className="inline-block bg-purple-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-purple-700 transition duration-300 text-lg"
            >
              Începe cu Soluții Cross-Platform
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CrossPlatformServices;

export const metadata = {
  title: 'Dezvoltare Aplicații Cross-Platform | React Native & Flutter | solicita.ro',
  description: 'Servicii de dezvoltare aplicații cross-platform folosind React Native și Flutter. Soluții eficiente pentru iOS și Android cu un singur cod sursă.',
  keywords: 'cross-platform, react native, flutter, dezvoltare aplicații mobile, ios, android, dezvoltare hibridă',
  openGraph: {
    title: 'Dezvoltare Aplicații Cross-Platform | React Native & Flutter | solicita.ro',
    description: 'Servicii de dezvoltare aplicații cross-platform folosind React Native și Flutter. Soluții eficiente pentru iOS și Android cu un singur cod sursă.',
    url: 'https://solicita.ro/mobile-development/cross-platform',
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
    title: 'Dezvoltare Aplicații Cross-Platform | React Native & Flutter | solicita.ro',
    description: 'Servicii de dezvoltare aplicații cross-platform folosind React Native și Flutter. Soluții eficiente pentru iOS și Android cu un singur cod sursă.',
    images: ['https://solicita.ro/images/mobile.jpg'],
  },
  alternates: {
    canonical: 'https://solicita.ro/mobile-development/cross-platform',
  },
};
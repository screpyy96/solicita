import Head from 'next/head';
import { FaAd, FaChartLine, FaBullseye, FaUsers, FaMobileAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Ads() {
    const services = [
        {
            icon: <FaAd className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Google Ads",
            description: "Campanii PPC optimizate pentru maximizarea conversiilor și ROI-ului"
        },
        {
            icon: <FaUsers className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Social Media Ads",
            description: "Publicitate targetată pe Facebook, Instagram și TikTok"
        },
        {
            icon: <FaBullseye className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Remarketing",
            description: "Recapturează vizitatorii și transformă-i în clienți fideli"
        },
        {
            icon: <FaChartLine className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Analiză & Optimizare",
            description: "Monitorizare constantă și îmbunătățirea performanței"
        }
    ];

    const stats = [
        { number: "200%", text: "ROI Mediu" },
        { number: "1M+", text: "Buget Administrat" },
        { number: "50+", text: "Clienți Mulțumiți" },
        { number: "24/7", text: "Monitorizare" }
    ];

    return (
        <>
            <Head>
                <title>Publicitate Online | Solicita.ro</title>
                <meta name="description" content="Creștem afaceri prin publicitate online inteligentă. Campanii Google Ads, Social Media și Remarketing optimizate pentru rezultate." />
            </Head>

            {/* Hero Section - Actualizat */}
            <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-[800px] py-20">
                        <div className="w-full lg:w-1/2 text-white">
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Publicitate care <br/>
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                    Generează Rezultate
                                </span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-300 mb-8">
                                Transformăm bugetul tău de marketing în vânzări și clienți fideli prin campanii de publicitate optimizate și targetate strategic.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-4">
                                <a href="#contact" 
                                   className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                                    Solicită o Ofertă
                                </a>
                                <a href="#services" 
                                   className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all">
                                    Vezi Serviciile
                                </a>
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                src="/images/ads-hero.png"
                                alt="Publicitate Online"
                                className="w-full h-auto max-w-2xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Servicii Complete de Publicitate Online
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-200">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Pregătit să Crești?</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                        Hai să discutăm despre cum putem transforma bugetul tău de publicitate în profit
                    </p>
                    <a href="#contact" 
                       className="inline-block px-12 py-5 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
                        Contactează-ne Acum
                    </a>
                </div>
            </div>
        </>
    );
} 
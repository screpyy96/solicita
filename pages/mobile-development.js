import Head from 'next/head';
import { FaMobileAlt, FaTabletAlt, FaCode, FaRocket, FaCheckCircle, FaCogs, FaApple, FaAndroid, FaUsers, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MobileDevelopment() {
    const services = [
        {
            icon: <FaMobileAlt className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Aplicații Native",
            description: "Dezvoltăm aplicații native pentru iOS și Android cu performanță și funcționalitate optimă"
        },
        {
            icon: <FaTabletAlt className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Aplicații Cross-Platform",
            description: "Soluții eficiente care funcționează perfect pe toate platformele mobile"
        },
        {
            icon: <FaCode className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Progressive Web Apps",
            description: "Aplicații web moderne care oferă experiență nativă pe orice dispozitiv"
        },
        {
            icon: <FaCogs className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Integrare & API",
            description: "Conectăm aplicația ta cu orice sistem sau serviciu extern necesar"
        }
    ];

    const platforms = [
        {
            icon: <FaApple className="w-16 h-16" />,
            name: "iOS",
            features: ["Swift", "SwiftUI", "Objective-C", "TestFlight", "App Store"]
        },
        {
            icon: <FaAndroid className="w-16 h-16" />,
            name: "Android",
            features: ["Kotlin", "Java", "Material Design", "Google Play", "Firebase"]
        }
    ];

    const stats = [
        { number: "50+", text: "Aplicații Lansate" },
        { number: "99%", text: "Rata de Satisfacție" },
        { number: "1M+", text: "Descărcări" },
        { number: "4.8", text: "Rating Mediu" }
    ];

    return (
        <>
            <Head>
                <title>Dezvoltare Aplicații Mobile | Solicita.ro</title>
                <meta name="description" content="Transformăm ideile tale în aplicații mobile de succes. Dezvoltare nativă și cross-platform pentru iOS și Android." />
            </Head>

            {/* Hero Section */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl text-white pt-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Dezvoltare <br/>
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                                Aplicații Mobile
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-gray-300">
                            Transformăm viziunea ta într-o aplicație mobilă de succes, folosind cele mai noi tehnologii și cele mai bune practici de dezvoltare
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" 
                               className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all text-center">
                                Solicită Ofertă
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Servicii Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Serviciile Noastre</h2>
                        <p className="text-xl text-gray-600">Soluții complete pentru prezența ta în mobile</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 bg-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{service.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-200">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Platforme Suportate</h2>
                        <p className="text-xl text-gray-600">Dezvoltăm pentru toate platformele majore</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="p-8 bg-gray-50 rounded-xl"
                            >
                                <div className="flex items-center mb-6">
                                    {platform.icon}
                                    <h3 className="text-2xl font-bold ml-4">{platform.name}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {platform.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center">
                                            <FaCheckCircle className="text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="text-gray-300">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Pregătit să-ți transformi ideea în realitate?
                    </h2>
                    <a href="#contact" 
                       className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                        Discută cu Experții Noștri
                    </a>
                </div>
            </section>
        </>
    );
} 
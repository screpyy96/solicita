import Head from 'next/head';
import { FaSearch, FaChartLine, FaLink, FaCheckCircle, FaMobileAlt, FaCogs } from 'react-icons/fa';
import { NextSeo } from 'next-seo';

export default function SEO() {
    const services = [
        {
            icon: <FaSearch className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Audit SEO Complet",
            description: "Analiză detaliată a site-ului tău pentru identificarea oportunităților de optimizare"
        },
        {
            icon: <FaChartLine className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Creștere Organică",
            description: "Strategii pentru creșterea vizibilității în motoarele de căutare"
        },
        {
            icon: <FaLink className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Link Building",
            description: "Construirea de legături relevante pentru creșterea autorității domeniului"
        },
        {
            icon: <FaMobileAlt className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300" />,
            title: "Optimizare Mobile",
            description: "Asigurăm experiență perfectă pe toate dispozitivele mobile"
        }
    ];

    const stats = [
        { number: "150%", text: "Creștere Trafic" },
        { number: "80+", text: "Clienți Mulțumiți" },
        { number: "5000+", text: "Cuvinte Cheie" },
        { number: "#1", text: "Poziții Google" }
    ];

    return (
        <>
            <NextSeo
                title="Servicii SEO Premium | Agenție SEO București | Solicita.ro"
                description="Creștem vizibilitatea afacerii tale online prin servicii SEO premium și strategii personalizate de optimizare pentru motoarele de căutare. Experți în SEO din București."
                canonical="https://solicita.ro/seo"
                openGraph={{
                    url: 'https://solicita.ro/seo',
                    title: 'Servicii SEO Premium | Agenție SEO București | Solicita.ro',
                    description: 'Servicii complete de optimizare SEO pentru afaceri. Creștem traficul organic și vizibilitatea online a business-ului tău.',
                    images: [
                        {
                            url: 'https://solicita.ro/images/seo-services-og.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'Servicii SEO Premium Solicita.ro',
                            type: 'image/jpeg',
                        }
                    ],
                    siteName: 'Solicita.ro',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'servicii seo, optimizare seo, agenție seo bucurești, seo romania, marketing digital, audit seo, consultanță seo'
                    },
                    {
                        name: 'robots',
                        content: 'index, follow'
                    },
                    {
                        property: 'article:modified_time',
                        content: new Date().toISOString()
                    }
                ]}
            />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
                <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">
                            Domină Prima Pagină <br/>
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                                din Google
                            </span>
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Servicii SEO premium care aduc rezultate măsurabile și trafic organic relevant pentru afacerea ta
                        </p>
                        <div className="flex gap-4">
                            <a href="#audit" 
                               className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                                Solicită Audit Gratuit
                            </a>
                            <a href="#services" 
                               className="px-8 py-4 border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                                Vezi Serviciile
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
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
            <div id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Servicii Complete de Optimizare
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} 
                                 className="group bg-white p-8 rounded-2xl shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-200">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Pregătit să Crești Online?</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                        Hai să discutăm despre cum putem îmbunătăți prezența ta în mediul online
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
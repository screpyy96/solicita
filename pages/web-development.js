import Head from 'next/head';
import { FaLaptopCode, FaShoppingCart, FaMobile, FaCog, FaRocket, FaChartLine } from 'react-icons/fa';

export default function WebDevelopment() {
    const services = [
        {
            title: "Design & Dezvoltare Website",
            description: "Site-uri web personalizate, construite cu tehnologii moderne, optimizate pentru toate dispozitivele",
            icon: <FaLaptopCode className="w-12 h-12 text-blue-500" />
        },
        {
            title: "Soluții E-commerce",
            description: "Magazine online performante cu procesare sigură a plăților și gestionare eficientă a stocurilor",
            icon: <FaShoppingCart className="w-12 h-12 text-blue-500" />
        },
        {
            title: "Aplicații Web",
            description: "Aplicații web complexe care vă ajută să vă eficientizați procesele de business",
            icon: <FaMobile className="w-12 h-12 text-blue-500" />
        },
        {
            title: "Mentenanță Website",
            description: "Suport continuu și actualizări pentru a menține site-ul dvs. securizat și performant",
            icon: <FaCog className="w-12 h-12 text-blue-500" />
        }
    ];

    const benefits = [
        {
            title: "Performanță Ridicată",
            description: "Site-uri rapide și optimizate pentru motoarele de căutare",
            icon: <FaRocket className="w-8 h-8 text-blue-500" />
        },
        {
            title: "Rezultate Măsurabile",
            description: "Monitorizare și raportare detaliată a performanței",
            icon: <FaChartLine className="w-8 h-8 text-blue-500" />
        }
    ];

    return (
        <>
            <Head>
                <title>Servicii Dezvoltare Web | Solicita.ro</title>
                <meta name="description" content="Transformăm prezența dvs. digitală cu servicii profesionale de dezvoltare web. Soluții personalizate, design modern și performanță optimă." />
            </Head>

            {/* Hero Section - Cu Gradient Modern */}
            <div className="relative min-h-[600px] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl text-white pt-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Transformăm Ideile în <br/>
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                                Realitate Digitală
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-gray-200">
                            Creăm site-uri web și aplicații care aduc rezultate concrete pentru afacerea dvs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" 
                               className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all text-center">
                                Solicită Ofertă
                            </a>
                            <a href="#services" 
                               className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-center">
                                Vezi Serviciile
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Servicii Complete de Dezvoltare Web
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} 
                                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16">De Ce Să Ne Alegeți</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Pregătiți pentru Următorul Pas?</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">
                        Hai să discutăm despre cum putem transforma viziunea ta într-o prezență digitală de succes
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
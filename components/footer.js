import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Despre Noi */}
          <div>
            <h3 className="text-xl font-bold mb-6">Despre Noi</h3>
            <p className="text-gray-300 mb-6">
              Transformăm viziunea ta în realitate digitală. Expertiza noastră în dezvoltare web, 
              mobile și marketing digital aduce rezultate măsurabile pentru afacerea ta.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h3 className="text-xl font-bold mb-6">Servicii</h3>
            <ul className="space-y-3">
              <li>
                <a href="/web-development" className="text-gray-300 hover:text-white transition-colors">
                  Dezvoltare Web
                </a>
              </li>
              <li>
                <a href="/mobile-development" className="text-gray-300 hover:text-white transition-colors">
                  Dezvoltare Mobile
                </a>
              </li>
              <li>
                <a href="/digital-marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="/seo" className="text-gray-300 hover:text-white transition-colors">
                  Optimizare SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Rapid */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Rapid</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+40 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contact@solicita.ro" className="text-gray-300 hover:text-white transition-colors">
                  contact@solicita.ro
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">București, România</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonează-te pentru noutăți și sfaturi despre tehnologie și marketing digital.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Abonează-te
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 mt-16 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Solicita.ro. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/termeni" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termeni și Condiții
              </a>
              <a href="/confidentialitate" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politica de Confidențialitate
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Description */}
          <div>
            <p className="text-gray-300 mb-6">
              Revolucionando la práctica legal en Chile a través de la tecnología y la innovación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-primary transition-colors">Beneficios</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#sobre-nosotros" className="text-gray-300 hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/102780296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/procufycl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Procufy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
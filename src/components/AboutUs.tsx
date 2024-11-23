import { CheckCircle } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-8">
              Sobre <span className="text-emerald-500">Nosotros</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              En Procufy, estamos comprometidos a revolucionar la práctica legal, haciendo que los servicios legales sean más accesibles, eficientes y democratizados.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                <span>Más de 1000 profesionales conectados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                <span>Presencia en todo Chile</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                <span>Tecnología de última generación</span>
              </div>
            </div>
            <button className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
              Contáctanos
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Equipo de Procufy"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
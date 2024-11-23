import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Revoluciona tu Práctica Legal con{' '}
            <span className="text-emerald-500">Procufy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Conecta con ayudantes y pasantes de derecho al instante.
          </p>
          <a
            href="#unete"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors duration-300"
          >
            Comienza Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
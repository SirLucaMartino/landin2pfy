import { Zap, Users, Briefcase, Lock } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-emerald-500" />,
      title: "Acceso Inmediato",
      description: "Encuentra el apoyo legal que necesitas, cuando lo necesitas."
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-500" />,
      title: "Tecnología Innovadora",
      description: "Nuestra plataforma utiliza tecnología de punta para facilitar tu trabajo."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-emerald-500" />,
      title: "Alianzas Estratégicas",
      description: "Colaboramos con líderes en legaltech para ofrecerte más."
    },
    {
      icon: <Lock className="w-12 h-12 text-emerald-500" />,
      title: "Flexibilidad y Control",
      description: "Tú decides cómo y con quién trabajar."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          ¿Por Qué Elegir <span className="text-emerald-500">Procufy</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
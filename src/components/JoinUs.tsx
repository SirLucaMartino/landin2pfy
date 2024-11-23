import { UserCircle, Users, Building2 } from 'lucide-react';

export function JoinUs() {
  const profiles = [
    {
      icon: <UserCircle className="w-16 h-16 text-emerald-500" />,
      title: "Abogado",
      description: "Forma parte de nuestra red de abogados que colaboran para mejorar la eficiencia y calidad de los servicios legales.",
      buttonText: "Registrarse como Abogado"
    },
    {
      icon: <Users className="w-16 h-16 text-emerald-500" />,
      title: "Procurador",
      description: "Conecta con abogados y procura los mejores servicios legales para tus clientes.",
      buttonText: "Registrarse como Procurador"
    },
    {
      icon: <Building2 className="w-16 h-16 text-emerald-500" />,
      title: "Empresa",
      description: "Encuentra soluciones legales rápidas y eficientes para tu empresa.",
      buttonText: "Registrarse como Empresa"
    }
  ];

  return (
    <section id="unete" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Únete a <span className="text-emerald-500">Procufy</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Elige el perfil que mejor se adapte a tu actividad y únete a nuestra red de profesionales del derecho.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="flex justify-center mb-6">{profile.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{profile.title}</h3>
              <p className="text-gray-600 mb-8">{profile.description}</p>
              <button className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors">
                {profile.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
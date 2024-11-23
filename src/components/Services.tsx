import { FileText, Users, CreditCard, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-emerald-500" />,
      title: "Servicio On-Demand",
      description: "Servicios legales rápidos y puntuales a través de nuestra app."
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-500" />,
      title: "Outsourcing Legal",
      description: "Proyectos legales externalizados para fiscalías corporativas."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-500" />,
      title: "Cobranza Masiva",
      description: "Recopilamos documentos en grandes volúmenes para procesos de cobranza."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-emerald-500" />,
      title: "Marketing Jurídico P2P",
      description: "Facilitamos la referenciación entre abogados en un modelo P2P."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Nuestros <span className="text-emerald-500">Servicios</span>
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="text-center">
                <a
                  href="#contacto"
                  className="inline-flex px-6 py-2 border-2 border-gray-800 rounded-full hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors duration-300"
                >
                  Más Información
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const API_URL = import.meta.env.PROD 
  ? 'https://api.procufy.cl/api/contact'
  : 'http://localhost:3000/api/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptContact: false,
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      toast.success('¡Mensaje enviado con éxito!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        acceptContact: false,
        acceptTerms: false
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intente nuevamente.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-secondary">
            Consulta o Solicitud Especial
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Envíanos tu consulta o solicitud y te responderemos a la brevedad.
          </p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo: *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico: *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono: (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje o Consulta: *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptContact"
                name="acceptContact"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                checked={formData.acceptContact}
                onChange={(e) => setFormData({ ...formData, acceptContact: e.target.checked })}
              />
              <label htmlFor="acceptContact" className="ml-2 text-sm text-gray-600">
                Acepto ser contactado por el equipo de Procufy.
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                required
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              />
              <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
                Acepto los{' '}
                <a 
                  href="https://drive.google.com/file/d/1z5QlphToSXGfDprWhU-uij0C5jxVmJFs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  Términos y Condiciones
                </a>{' '}
                y la{' '}
                <a 
                  href="https://drive.google.com/file/d/1bXamS4j9UwLZQvRXJRqAWdisgtJMSx8e/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Política de Privacidad
                </a>.
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-primary text-secondary font-semibold rounded-full hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
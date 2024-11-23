import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              <NavLinks mobile setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLinks({ mobile = false, setIsOpen = () => {} }: { mobile?: boolean, setIsOpen?: (value: boolean) => void }) {
  const handleClick = () => {
    if (mobile) {
      setIsOpen(false);
    }
  };

  const baseStyles = mobile
    ? "block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
    : "text-secondary hover:text-primary transition-colors";

  const buttonStyles = mobile
    ? "block w-full text-center px-3 py-2 text-base font-medium text-secondary bg-primary hover:bg-primary-hover rounded-md transition-colors"
    : "inline-flex items-center px-4 py-2 text-sm font-medium text-secondary bg-primary hover:bg-primary-hover rounded-md transition-colors";

  return (
    <>
      <a href="#inicio" className={baseStyles} onClick={handleClick}>Inicio</a>
      <a href="#beneficios" className={baseStyles} onClick={handleClick}>Beneficios</a>
      <a href="#servicios" className={baseStyles} onClick={handleClick}>Servicios</a>
      <a href="#sobre-nosotros" className={baseStyles} onClick={handleClick}>Sobre Nosotros</a>
      <a href="#contacto" className={baseStyles} onClick={handleClick}>Contacto</a>
      <a
        href="https://procufy-landing-c9lrkw.flutterflow.app"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
        onClick={handleClick}
      >
        Registrarse
      </a>
    </>
  );
}
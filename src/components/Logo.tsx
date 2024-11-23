import { motion } from 'framer-motion';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <img src="/logo.svg" alt="Procufy Logo" className="h-8 w-8" />
      <div className="ml-2 flex flex-col">
        <span className="text-xl font-bold text-secondary">Procufy</span>
        <span className="text-xs text-primary">Link to Law</span>
      </div>
    </motion.div>
  );
}
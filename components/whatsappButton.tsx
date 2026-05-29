import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/51999999999?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20proyectos", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="group fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl transition-all"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 -z-10 animate-ping bg-[#25D366] opacity-75 rounded-full" />

      {/* Tooltip */}
      <span className="group-hover:opacity-100 group-hover:translate-x-0 absolute right-full mr-3 opacity-0 translate-x-2 whitespace-nowrap bg-gray-900 px-3 py-2 rounded-lg font-medium text-sm text-white transition-all pointer-events-none">
        ¡Escríbenos por WhatsApp!
      </span>
    </motion.button>
  );
}

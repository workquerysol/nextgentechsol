import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918188941304";
const DEFAULT_MESSAGE = "Hi! I'm interested in your web development services. Can we discuss my project?";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="white" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.004 3.2C9.054 3.2 3.4 8.854 3.4 15.804c0 2.222.58 4.39 1.682 6.302L3.2 28.8l6.89-1.808A12.55 12.55 0 0 0 16.004 28.4c6.95 0 12.596-5.646 12.596-12.596S22.954 3.2 16.004 3.2zm0 22.996a10.36 10.36 0 0 1-5.292-1.45l-.38-.226-3.934 1.032 1.05-3.836-.248-.394A10.35 10.35 0 0 1 5.6 15.804c0-5.738 4.67-10.408 10.404-10.408 5.738 0 10.4 4.67 10.4 10.408 0 5.738-4.662 10.392-10.4 10.392zm5.706-7.794c-.312-.156-1.852-.914-2.14-1.018-.286-.106-.496-.156-.704.156-.208.312-.81 1.018-.994 1.228-.182.208-.366.234-.678.078-.312-.156-1.318-.486-2.512-1.548-.928-.826-1.554-1.848-1.736-2.16-.182-.312-.02-.48.136-.636.142-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.704-1.696-.964-2.32-.254-.61-.512-.528-.704-.538l-.6-.01c-.208 0-.546.078-.832.39-.286.312-1.092 1.068-1.092 2.604s1.118 3.02 1.274 3.228c.156.208 2.2 3.358 5.33 4.71.744.322 1.326.514 1.778.658.748.238 1.428.204 1.966.124.6-.09 1.852-.758 2.114-1.49.262-.73.262-1.356.182-1.488-.078-.13-.286-.208-.598-.364z" />
  </svg>
);

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </motion.a>
  );
};

export default WhatsAppButton;

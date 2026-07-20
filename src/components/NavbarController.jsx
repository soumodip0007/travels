import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function NavbarController({
  showNavbar,
  setShowNavbar,
}) {
  const [showArrow, setShowArrow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120 && showNavbar) {
        setShowNavbar(false);
        setShowArrow(true);
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNavbar]);

  return (
    <AnimatePresence>
      {showArrow && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-1/2 top-5 z-[9999] -translate-x-1/2"
        >
          {!showButton ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowButton(true)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl"
            >
              <ChevronDown className="text-sky-600" size={30} />
            </motion.button>
          ) : (
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setShowNavbar(true);
                setShowArrow(false);
                setShowButton(false);
              }}
              className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white shadow-xl"
            >
              Open Navbar
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
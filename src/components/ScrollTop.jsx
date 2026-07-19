import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className={`fixed bottom-8 right-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-orange-500 text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-[0_15px_40px_rgba(14,165,233,0.45)]
      ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <ChevronUp size={28} strokeWidth={2.5} />
    </button>
  );
}
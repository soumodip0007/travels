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
      className={`fixed bottom-6 left-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full text-white border border-white/10 transition-all duration-500 hover:scale-110
      ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #3B1E7A 0%, #6957DF 45%, #A855F7 100%)",
        boxShadow:
          "0 14px 38px rgba(105,87,223,0.38), inset 0 1px 1px rgba(255,255,255,0.18)",
      }}
    >
      <div
        className="absolute inset-0 rounded-full blur-md opacity-50"
        style={{
          background:
            "linear-gradient(135deg, #7C3AED, #C084FC)",
        }}
      />

      <ChevronUp
        size={38}
        strokeWidth={2.6}
        className="relative z-10"
      />
    </button>
  );
}
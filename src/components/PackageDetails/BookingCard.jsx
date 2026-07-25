import { useEffect, useRef, useState } from "react";
import {
  IndianRupee,
  MapPin,
  Star,
  Phone,
  Clock3,
  Check,
} from "lucide-react";

/* Inline WhatsApp mark — kept dependency-free instead of react-icons */
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.27.62 4.4 1.7 6.23L4 29l7.94-1.66A11.94 11.94 0 0 0 16.02 27C22.65 27 28.03 21.62 28.03 15S22.65 3 16.02 3Zm0 21.7c-1.95 0-3.77-.55-5.32-1.5l-.38-.23-4.4.92.94-4.28-.25-.4a9.6 9.6 0 0 1-1.57-5.2c0-5.36 4.37-9.72 9.98-9.72 5.6 0 9.97 4.36 9.97 9.72s-4.37 9.7-9.97 9.7Zm5.46-7.27c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.26-.24-.6-.5-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

const DEMO_TOUR = {
  rating: 4.8,
  duration: "5 Days / 4 Nights",
  location: "Jaipur, Rajasthan",
  packages: {
    standard: { price: 18999, duration: "5 Days / 4 Nights" },
    deluxe: { price: 24999, duration: "6 Days / 5 Nights" },
  },
};

export default function BookingCard({ tour = DEMO_TOUR, selectedPackage = "standard" }) {
  const currentPackage = tour?.packages?.[selectedPackage];

  const targetPrice =
    currentPackage?.price ??
    Math.min(
      ...Object.values(tour.packages || {})
        .filter((pkg) => pkg?.price)
        .map((pkg) => pkg.price)
    );

  const displayDuration = currentPackage?.duration || tour.duration;

  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const from = 0;

    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(from + (targetPrice - from) * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetPrice]);

  function handleBook() {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 2200);
  }

  return (
    <div className="flex items-center justify-center bg-[#F3EFE6] p-8 font-[Inter,sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .bc-root { font-family: 'Inter', sans-serif; }
        .bc-serif { font-family: 'Fraunces', serif; font-variant-numeric: tabular-nums; }

        @keyframes bc-rise {
          from { opacity: 0; transform: translateY(26px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .bc-mounted { animation: bc-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes bc-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15, 110, 102, 0.35); }
          50% { box-shadow: 0 0 0 6px rgba(15, 110, 102, 0); }
        }
        .bc-badge { animation: bc-glow 2.4s ease-in-out infinite; }

        .bc-notch {
          background: #F3EFE6;
        }

        .bc-cta {
          position: relative;
          overflow: hidden;
        }
        .bc-cta::after {
          content: "";
          position: absolute;
          top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .bc-cta:hover::after { left: 130%; }

        .bc-icon-btn {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, border-color 0.25s ease;
        }
        .bc-icon-btn:hover { transform: translateY(-3px); }

        .bc-row { transition: background-color 0.25s ease, transform 0.25s ease; }
        .bc-row:hover { transform: translateX(2px); }

        @keyframes bc-pop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .bc-check { animation: bc-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
      `}</style>

      <div
        className={`bc-root w-full max-w-sm ${mounted ? "bc-mounted" : "opacity-0"}`}
      >
        <div className="relative rounded-[28px] bg-white shadow-[0_20px_50px_-15px_rgba(30,42,71,0.25)]">
          {/* ===== Top: stub header ===== */}
          <div className="px-7 pt-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A9078]">
                  Boarding Pass · Tour
                </p>
                <h3 className="mt-1 text-[15px] font-bold text-[#1E2A47]">
                  {tour.location}
                </h3>
              </div>

              <div className="bc-badge flex items-center gap-1.5 rounded-full bg-[#0F6E66] px-3.5 py-1.5 text-sm font-bold text-white">
                <Star size={14} className="fill-[#E3A23D] text-[#E3A23D]" />
                {tour.rating}
              </div>
            </div>

            {/* Price — the "denomination" */}
            <div className="mt-6 mb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A9078]">
                Fare · Per Person
              </p>
              <div className="mt-1 flex items-baseline">
                <IndianRupee size={26} strokeWidth={2.5} className="mb-1 mr-0.5 text-[#1E2A47]" />
                <span className="bc-serif text-5xl font-bold leading-none text-[#1E2A47]">
                  {count.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          {/* ===== Perforated tear line ===== */}
          <div className="relative my-2 h-0">
            <div className="bc-notch absolute -left-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" />
            <div className="bc-notch absolute -right-3.5 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full" />
            <div className="mx-7 border-t-2 border-dashed border-[#E4DFD1]" />
          </div>

          {/* ===== Bottom: details + CTA ===== */}
          <div className="px-7 pb-7 pt-5">
            <div className="space-y-2.5">
              <div className="bc-row flex items-center gap-3 rounded-2xl bg-[#F7F4EC] p-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#E3A23D]">
                  <Clock3 size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#9A9078]">
                    Duration
                  </p>
                  <p className="text-sm font-bold text-[#1E2A47]">{displayDuration}</p>
                </div>
              </div>

              <div className="bc-row flex items-center gap-3 rounded-2xl bg-[#F7F4EC] p-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#C2185B]">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-[#9A9078]">
                    Destination
                  </p>
                  <p className="text-sm font-bold text-[#1E2A47]">{tour.location}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleBook}
              className="bc-cta mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E3A23D] to-[#C2185B] py-4 text-base font-bold text-white shadow-lg shadow-[#C2185B]/25 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {confirmed ? (
                <span className="bc-check flex items-center gap-2">
                  <Check size={19} strokeWidth={3} /> Booking Confirmed
                </span>
              ) : (
                "Book Now"
              )}
            </button>

            {/* Quick contact */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <span className="text-xs font-medium text-[#9A9078]">Need help?</span>
              <a
                href="tel:+910000000000"
                aria-label="Call to book"
                className="bc-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-[#E4DFD1] text-[#1E2A47] hover:border-[#1E2A47]"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://wa.me/910000000000"
                aria-label="Chat on WhatsApp"
                className="bc-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-[#E4DFD1] text-[#25D366] hover:border-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
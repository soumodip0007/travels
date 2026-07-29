import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-white/10 bg-gradient-to-r from-[#12071F] via-[#1B1033] to-[#12071F]">

      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-5 py-6 text-sm md:flex-row">

        {/* Left */}

        <div className="text-center text-slate-400 md:text-left">

          © {year}{" "}
          <span className="font-semibold text-white">
            Riya Travels
          </span>
          . All Rights Reserved.

        </div>

        {/* Center */}

        <div className="flex flex-wrap items-center justify-center gap-6">

          <Link
            to="/privacy-policy"
            className="text-slate-400 transition duration-300 hover:text-[#C084FC]"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-and-conditions"
            className="text-slate-400 transition duration-300 hover:text-[#C084FC]"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/refund-policy"
            className="text-slate-400 transition duration-300 hover:text-[#C084FC]"
          >
            Refund Policy
          </Link>

        </div>

        {/* Right */}

        <div className="flex items-center gap-2 text-slate-400">

          <span>Designed with</span>

          <Heart
            size={16}
            className="fill-[#EC4899] text-[#EC4899]"
          />

          <span>
            by{" "}
            <span className="font-semibold bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">
              Riya Travels
            </span>
          </span>

        </div>

      </div>

    </div>
  );
}
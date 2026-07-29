import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

export default function FooterLinks() {
  return (
    <div>

      {/* Heading */}

      <h3 className="relative inline-block text-2xl font-bold text-white">

        Quick Links

        <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7]"></span>

      </h3>

      {/* Links */}

      <ul className="mt-8">

        {links.map((link) => (
          <li key={link.title}>

            <Link
              to={link.path}
              className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-slate-300 transition-all duration-300 hover:translate-x-2 hover:border-purple-300/20 hover:bg-white/[0.04] hover:text-[#C084FC] hover:shadow-[0_10px_25px_rgba(147,51,234,0.12)]"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7] text-white shadow-[0_8px_18px_rgba(147,51,234,0.22)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_26px_rgba(147,51,234,0.32)]">

                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

              </div>

              <span className="font-medium">{link.title}</span>

            </Link>

          </li>
        ))}

      </ul>

    </div>
  );
}
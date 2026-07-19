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

        <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-orange-500"></span>

      </h3>

      {/* Links */}

      <ul className="mt-8 space-y-4">

        {links.map((link) => (
          <li key={link.title}>

            <Link
              to={link.path}
              className="group flex items-center gap-3 text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-orange-400"
            >

              <ChevronRight
                size={18}
                className="text-sky-500 transition-transform duration-300 group-hover:text-orange-400 group-hover:translate-x-1"
              />

              <span>{link.title}</span>

            </Link>

          </li>
        ))}

      </ul>

    </div>
  );
}
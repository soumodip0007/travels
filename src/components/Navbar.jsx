import { useState } from "react";
import { Menu, X, MapPinned, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl shadow-md border-b border-blue-100">

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-orange-400/10 to-blue-400/10"></div>

          <div className="relative mx-auto flex w-[95%] max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-400 blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center shadow-xl group-hover:rotate-12 transition duration-500">
                  <Plane className="text-white group-hover:-rotate-12 transition duration-500" size={28} />
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-orange-500 bg-clip-text text-transparent">
                  TravelX
                </h1>
                <p className="text-xs text-gray-500 tracking-widest uppercase">
                  Explore the World
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="relative text-gray-700 font-semibold group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-2 w-0 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute inset-0 rounded-xl scale-0 bg-blue-50 group-hover:scale-100 -z-10 transition duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="group flex items-center gap-2 border border-blue-200 rounded-full px-5 py-2 hover:border-orange-400 transition duration-300">
                <MapPinned className="text-blue-600 group-hover:text-orange-500 transition" size={18} />
                <span className="font-medium text-gray-700">Explore</span>
              </button>

              <button className="relative overflow-hidden rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:scale-105 transition duration-500 shadow-xl">
                <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition duration-500"></span>
                Book Now
              </button>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-blue-700">
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Animated Bottom Accent */}
          <div className="relative h-[3px] w-full overflow-hidden">
            <div className="absolute inset-x-0 -top-1 h-3 blur-md opacity-70 bg-[length:300%_100%] animate-flow bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500"></div>
            <div className="absolute inset-0 bg-[length:300%_100%] animate-flow bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500"></div>
            <div className="absolute inset-y-0 w-1/4 animate-comet bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-40 transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 mt-24">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block border-b py-4 text-lg font-semibold text-gray-700 transition hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full mt-8 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 font-bold shadow-xl hover:scale-105 transition">
            Book Your Trip
          </button>
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        .animate-flow {
          animation: flow 6s linear infinite;
        }

        @keyframes comet {
          0% { left: -25%; }
          100% { left: 100%; }
        }
        .animate-comet {
          animation: comet 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
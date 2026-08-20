import { useState } from "react";
import {
  Menu,
  X,
  MapPinned,
  Plane,
  Home,
  Info,
  Image as ImageIcon,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEnquiry } from "../context/EnquiryContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openEnquiry } = useEnquiry();

  const navigate = useNavigate();
  const location = useLocation();

  const handleExplore = () => {
    if (location.pathname === "/") {
      // Already on home page
      document.getElementById("tours")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Go to home page first, then scroll
      navigate("/#tours");
    }
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=JetBrains+Mono:wght@500&display=swap');

        .nav-display {
          font-family: 'Fraunces', serif;
          font-optical-sizing: auto;
        }

        .nav-mono {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.14em;
        }
      `}</style>

      <nav className="fixed top-0 z-50 w-full border-b border-purple-100 bg-white/85 backdrop-blur-xl">
        <div className="relative">

          {/* Background Wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#6957DF]/[0.04] via-transparent to-[#9F7AEA]/[0.04]" />

          <div className="relative mx-auto flex w-[95%] max-w-7xl items-center justify-between px-4 py-4 sm:py-3 lg:px-8 lg:py-2.5">

            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6957DF] to-[#9F7AEA] opacity-0 blur-md transition duration-500 group-hover:opacity-50"></div>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6957DF] to-[#9F7AEA] shadow-[0_10px_25px_rgba(105,87,223,0.35)] ring-2 ring-white transition duration-500 group-hover:rotate-12">
                  <Plane
                    size={22}
                    className="text-white transition duration-500 group-hover:-rotate-12"
                  />
                </div>
              </div>

              <div>
                <h1 className="nav-display text-[22px] leading-none text-[#241c4b]">
                  Travel<span className="text-[#6957DF]">X</span>
                </h1>

                <p className="nav-mono mt-1 text-[9px] uppercase text-slate-400">
                  Explore the World
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="group relative rounded-full px-4 py-2 text-[15px] font-semibold text-slate-600 transition-colors duration-300 hover:text-[#6957DF]"
                >
                  <span className="relative z-10">{item.name}</span>

                  <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-purple-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] transition-all duration-300 group-hover:w-5"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <style>{`
  .cta-shimmer {
    position: relative;
    overflow: hidden;
  }

  .cta-shimmer::before {
    content: "";
    position: absolute;
    top: 0;
    left: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
    transform: skewX(-20deg);
    transition: left 700ms ease;
  }

  .cta-shimmer:hover::before {
    left: 130%;
  }

  /* Reversed theme: light base, dark sweep, opposite sweep direction */
  .cta-shimmer-reverse {
    position: relative;
    overflow: hidden;
  }

  .cta-shimmer-reverse::before {
    content: "";
    position: absolute;
    top: 0;
    right: -60%;
    width: 40%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(105,87,223,0.30), transparent);
    transform: skewX(-20deg);
    transition: right 700ms ease;
  }

  .cta-shimmer-reverse:hover::before {
    right: 130%;
  }
`}</style>

            <div className="hidden lg:flex items-center gap-4">
              {/* Explore Button — reversed theme */}
              <button
                onClick={handleExplore}
                className="cta-shimmer-reverse group flex items-center gap-2 rounded-full border-2 border-[#6957DF] px-5 py-2 font-semibold text-[#6957DF] shadow-[0_10px_30px_rgba(105,87,223,0.18)] transition-all duration-500 hover:scale-95 hover:border-transparent hover:bg-gradient-to-l hover:from-[#6957DF] hover:to-[#9F7AEA] hover:text-white hover:shadow-[0_20px_45px_rgba(105,87,223,0.40)]"
              >
                <MapPinned
                  className="text-[#6957DF] transition-all duration-300 group-hover:scale-90 group-hover:text-white"
                  size={18}
                />
                <span>Explore</span>
              </button>

              {/* Enquiry Button — unchanged */}
              <button
                onClick={() => openEnquiry()}
                className="cta-shimmer rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-7 py-3 font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-1.5 text-[#6957DF] transition hover:bg-purple-50 lg:hidden"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Animated Bottom Border */}
          <div className="relative h-[3px] w-full overflow-hidden">
            <div className="absolute inset-x-0 -top-1 h-3 blur-md opacity-70 bg-[length:300%_100%] animate-flow bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600"></div>

            <div className="absolute inset-0 bg-[length:300%_100%] animate-flow bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600"></div>

            <div className="absolute inset-y-0 w-1/4 animate-comet bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-30 bg-[#241c4b]/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen w-[300px] overflow-y-auto bg-gradient-to-b from-purple-50 via-white to-white shadow-[-40px_0px_80px_rgba(105,87,223,0.25)] transition-transform duration-500 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#9F7AEA]/25 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-32 -left-10 h-40 w-40 rounded-full bg-[#6957DF]/15 blur-[80px]" />

        <div className="relative flex h-full flex-col p-6">

          {/* Panel Header */}
          <div className="mb-6 flex items-center justify-between">

            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] shadow-md">
                <Plane size={18} className="text-white" />
              </div>
              <div>
                <p className="text-lg font-extrabold bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] bg-clip-text text-transparent">
                  TravelX
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">
                  Explore the World
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-full p-2 text-[#6957DF] transition hover:bg-purple-100"
            >
              <X size={20} />
            </button>

          </div>

          <div className="mb-2 h-px w-full bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

          {/* Nav Links */}
          <div className="mt-4 flex flex-col gap-2">
            {navItems.map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    transitionDelay: mobileOpen ? `${index * 80 + 100}ms` : "0ms",
                  }}
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold text-gray-700 transition-all duration-500 hover:bg-purple-50 hover:text-[#6957DF] ${mobileOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                    }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-[#6957DF] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#6957DF] group-hover:to-[#9F7AEA] group-hover:text-white">
                    <ItemIcon size={16} />
                  </span>

                  <span className="flex-1">{item.name}</span>

                  <ChevronRight
                    size={16}
                    className="text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6957DF]"
                  />
                </Link>
              );
            })}
          </div>

          {/* Spacer pushes CTA to bottom */}
          <div className="flex-1" />

          <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

          <style>{`
              .cta-shimmer {
                position: relative;
                overflow: hidden;
              }

              .cta-shimmer::before {
                content: "";
                position: absolute;
                top: 0;
                left: -60%;
                width: 40%;
                height: 100%;
                background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
                transform: skewX(-20deg);
                transition: left 700ms ease;
              }

              .cta-shimmer:hover::before {
                left: 130%;
              }
          `}</style>

          <button className="cta-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] py-3 font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]">
            <MapPinned size={18} />
            Explore
          </button>

        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        .animate-flow {
          animation: flow 6s linear infinite;
        }

        @keyframes comet {
          0% {
            left: -25%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-comet {
          animation: comet 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Navigation,
  Sparkles,
  Plane,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9163569695",
    href: "tel:+919163569695",
    description: "Call us for travel assistance",
  },
  {
    icon: Mail,
    label: "Email",
    value: "riyatourtravels01@gmail.com",
    href: "mailto:riyatourtravels01@gmail.com",
    description: "Send us your travel requirements",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value:
      "57A, Mahanirban Rd, Dover Terrace, Gariahat, near City Mart, Ballygunge, Kolkata, West Bengal 700029",
    description: "Visit our Kolkata travel office",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat : 10:00 AM - 08:00 PM",
    description: "We're here to help you plan",
  },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf9ff]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      {/* Decorative background glows */}

      <div className="pointer-events-none fixed -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#6957DF]/10 blur-[140px]" />

      <div className="pointer-events-none fixed -right-40 top-[55%] h-[500px] w-[500px] rounded-full bg-[#9F7AEA]/10 blur-[140px]" />

      <section className="relative z-10">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@500&display=swap');

          .contact-display {
            font-family: 'Fraunces', serif;
            font-optical-sizing: auto;
          }

          .contact-mono {
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0.12em;
          }

          @keyframes contactFadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatingPlane {
            0% {
              transform: translateY(0) rotate(-8deg);
            }

            50% {
              transform: translateY(-12px) rotate(-4deg);
            }

            100% {
              transform: translateY(0) rotate(-8deg);
            }
          }

          @keyframes pulseGlow {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(1);
            }

            50% {
              opacity: 0.65;
              transform: scale(1.08);
            }
          }

          @keyframes shine {
            0% {
              transform: translateX(-120%);
            }

            100% {
              transform: translateX(120%);
            }
          }

          .contact-fade-up {
            animation: contactFadeUp 0.7s ease-out both;
          }

          .floating-plane {
            animation: floatingPlane 4s ease-in-out infinite;
          }

          .pulse-glow {
            animation: pulseGlow 3s ease-in-out infinite;
          }

          .contact-card {
            transition:
              transform 350ms ease,
              box-shadow 350ms ease,
              border-color 350ms ease;
          }

          .contact-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 60px rgba(105, 87, 223, 0.16);
            border-color: rgba(105, 87, 223, 0.25);
          }

          .icon-box {
            transition:
              transform 400ms ease,
              background 400ms ease,
              color 400ms ease,
              box-shadow 400ms ease;
          }

          .contact-card:hover .icon-box {
            transform: rotate(-6deg) scale(1.08);
            color: white;
            background: linear-gradient(
              135deg,
              #6957DF,
              #9F7AEA
            );
            box-shadow:
              0 12px 30px rgba(105, 87, 223, 0.35);
          }

          .map-overlay {
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
          }

          .hero-shine {
            position: absolute;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
          }

          .hero-shine::after {
            content: "";
            position: absolute;
            top: 0;
            left: -30%;
            width: 25%;
            height: 100%;
            background: linear-gradient(
              100deg,
              transparent,
              rgba(255,255,255,0.10),
              transparent
            );
            transform: skewX(-18deg);
            animation: shine 6s ease-in-out infinite;
          }
        `}</style>

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="relative overflow-hidden bg-gradient-to-br from-[#6957DF] via-[#5845C6] to-[#3D2E77] px-6 pb-36 pt-28 text-white">

          <div className="hero-shine" />

          {/* Glow */}

          <div className="pointer-events-none absolute -left-20 -top-32 h-[450px] w-[450px] rounded-full bg-white/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#B794F4]/20 blur-[130px]" />

          {/* Decorative circles */}

          <div className="pointer-events-none absolute left-[8%] top-[25%] h-3 w-3 rounded-full bg-white/50 shadow-[0_0_25px_rgba(255,255,255,0.8)]" />

          <div className="pointer-events-none absolute right-[14%] top-[32%] h-2 w-2 rounded-full bg-white/60 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />

          <div className="pointer-events-none absolute bottom-[22%] left-[22%] h-2 w-2 rounded-full bg-white/40" />

          {/* Floating plane */}

          <div className="floating-plane absolute right-[8%] top-[18%] hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:block">

            <Plane
              size={28}
              className="rotate-[-10deg] text-white/80"
            />

          </div>

          {/* Hero content */}

          <div className="contact-fade-up relative mx-auto max-w-5xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

              <Sparkles size={15} />

              <span className="contact-mono text-[10px] uppercase tracking-[0.18em]">
                We're Here For You
              </span>

            </div>

            <h1 className="contact-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">

              Let's Plan Your
              <br />

              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
                Next Journey
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">

              Have questions about our tour packages?
              Need a customized itinerary?
              <br className="hidden sm:block" />

              Get in touch with our travel experts and
              let us make your journey unforgettable.

            </p>

          </div>

        </div>

        {/* =====================================================
            CONTACT INFORMATION
        ====================================================== */}

        <div className="relative mx-auto -mt-20 w-[92%] max-w-6xl pb-20">

          {/* Main glass card */}

          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_35px_100px_rgba(63,48,119,0.16)] backdrop-blur-xl sm:p-8 md:p-10">

            {/* Decorative glow inside card */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#6957DF]/8 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#9F7AEA]/8 blur-[80px]" />

            {/* Heading */}

            <div className="relative mb-10 text-center">

              <div className="contact-mono mb-3 text-[10px] uppercase text-[#6957DF]/70">
                Reach Us
              </div>

              <h2 className="contact-display text-3xl font-semibold text-slate-800 sm:text-4xl">
                Contact Information
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Whether you need help choosing a destination,
                planning your itinerary, or booking your next adventure,
                we're just a message away.
              </p>

            </div>

            {/* Contact grid */}

            <div className="relative grid gap-5 md:grid-cols-2">

              {contactDetails.map(
                ({ icon: Icon, label, value, href, description }, index) => (
                  <div
                    key={index}
                    className="contact-card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6"
                  >

                    {/* Card glow */}

                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#6957DF]/5 blur-2xl transition-all duration-500 group-hover:bg-[#6957DF]/10" />

                    <div className="relative flex gap-5">

                      {/* Icon */}

                      <div className="icon-box flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#6957DF]/15 bg-[#6957DF]/5 text-[#6957DF]">

                        <Icon size={22} strokeWidth={1.8} />

                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="mb-1 flex items-center justify-between gap-2">

                          <h3 className="font-semibold text-slate-800">
                            {label}
                          </h3>

                          {href && (
                            <ArrowUpRight
                              size={16}
                              className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6957DF]"
                            />
                          )}

                        </div>

                        <p className="mb-2 text-xs text-slate-400">
                          {description}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            className="break-words text-sm font-medium leading-6 text-slate-600 transition-colors hover:text-[#6957DF]"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="break-words text-sm font-medium leading-6 text-slate-600">
                            {value}
                          </p>
                        )}

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

            {/* Bottom travel badge */}

            <div className="relative mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#6957DF]/5 via-[#9F7AEA]/5 to-[#6957DF]/5 px-6 py-5 sm:flex-row">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6957DF] text-white shadow-lg shadow-[#6957DF]/25">

                  <Navigation size={18} />

                </div>

                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    Planning a trip?
                  </p>

                  <p className="text-xs text-slate-500">
                    Let our travel experts guide you.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#6957DF]">

                <span className="h-2 w-2 rounded-full bg-[#6957DF] shadow-[0_0_10px_rgba(105,87,223,0.7)]" />

                Available Mon - Sat

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            MAP
        ====================================================== */}

        <div className="mx-auto mb-24 w-[92%] max-w-7xl">

          <div className="mb-6 text-center">

            <p className="contact-mono text-[10px] uppercase text-[#6957DF]/70">
              Find Us
            </p>

            <h2 className="contact-display mt-2 text-3xl font-semibold text-slate-800 sm:text-4xl">
              Visit Our Office
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
              Come visit us in Kolkata and let's start planning your
              next adventure together.
            </p>

          </div>

          <div className="group relative overflow-hidden rounded-[32px] border border-white bg-white p-2 shadow-[0_30px_80px_rgba(105,87,223,0.15)]">

            {/* Map */}

            <div className="relative overflow-hidden rounded-[26px]">

              <iframe
                title="Riya Tours and Travels Location"
                src="https://www.google.com/maps?q=Riya+Tours+and+Travels&z=17&output=embed"
                className="h-[400px] w-full border-0 grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 md:h-[450px]"
                loading="lazy"
              />

              {/* Floating map badge */}

              <div className="map-overlay absolute bottom-5 left-5 flex max-w-[calc(100%-40px)] items-center gap-3 rounded-2xl border border-white/50 bg-white/85 px-4 py-3 shadow-xl">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6957DF] text-white">

                  <MapPin size={18} />

                </div>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-slate-800">
                    Riya Tours & Travels
                  </p>

                  <p className="truncate text-xs text-slate-500">
                    Ballygunge, Kolkata
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;

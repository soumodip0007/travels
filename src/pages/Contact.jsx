import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9163569695",
    description: "Speak directly with our travel experts",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "riyatourtravels01@gmail.com",
    description: "We'll get back to you shortly",
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    value:
      "57A, Mahanirban Rd, Dover Terrace, Gariahat, near City Mart, Ballygunge, Kolkata, West Bengal 700029",
    description: "Come and plan your journey with us",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat : 10:00 AM - 08:00 PM",
    description: "We're available to assist you",
  },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">

      {/* ================= Background ================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      <section className="relative">

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

          .contact-fade-up {
            animation: contactFadeUp 0.8s ease-out both;
          }

          @keyframes contactFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-10px);
            }
          }

          .contact-float {
            animation: contactFloat 5s ease-in-out infinite;
          }
        `}</style>

        {/* ================= HERO ================= */}

        <div className="relative overflow-hidden bg-gradient-to-br from-[#6957DF] via-[#5B45C6] to-[#30245F] py-28 text-white md:py-36">

          {/* Background Glow */}

          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#A855F7]/30 blur-[130px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 blur-[100px]" />

          {/* Decorative Rings */}

          <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-10 top-30 h-44 w-44 rounded-full border border-white/10" />

          <div className="contact-fade-up relative mx-auto w-[92%] max-w-5xl text-center">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md">

              <MessageCircle size={16} />

              <span className="contact-mono text-[10px] uppercase tracking-[0.2em]">
                Let's Connect
              </span>

            </div>

            <h1 className="contact-display text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl">

              Let's Plan Your

              <br />

              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                Next Journey
              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">

              Have questions about our tour packages or looking for a
              customized itinerary? Our travel experts are here to turn your
              travel dreams into unforgettable experiences.

            </p>

          </div>

        </div>

        {/* ================= CONTACT CARDS ================= */}

        <div className="relative z-10 mx-auto -mt-16 w-[92%] max-w-6xl">

          <div className="grid gap-5 md:grid-cols-2">

            {contactDetails.map(
              ({ icon: Icon, label, value, description }, index) => (

                <div
                  key={index}
                  className="contact-fade-up group relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-7 shadow-[0_25px_70px_rgba(105,87,223,0.12)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(105,87,223,0.22)]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  {/* Card Glow */}

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-100/60 blur-3xl transition-all duration-700 group-hover:bg-purple-200/80" />

                  {/* Number */}

                  <span className="absolute right-7 top-6 text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-purple-100">
                    0{index + 1}
                  </span>

                  <div className="relative flex gap-5">

                    {/* Icon */}

                    <div
                      className="
                        flex h-16 w-16 shrink-0 items-center justify-center
                        rounded-2xl
                        border border-purple-100
                        bg-gradient-to-br from-purple-50 to-white
                        text-[#6957DF]
                        shadow-sm
                        transition-all duration-700
                        group-hover:scale-110
                        group-hover:rotate-6
                        group-hover:border-transparent
                        group-hover:bg-gradient-to-br
                        group-hover:from-[#6957DF]
                        group-hover:to-[#9F7AEA]
                        group-hover:text-white
                        group-hover:shadow-[0_15px_30px_rgba(105,87,223,0.3)]
                      "
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">

                      <p className="contact-mono text-[10px] uppercase text-[#6957DF]">
                        {label}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-slate-800">
                        {value}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {description}
                      </p>

                    </div>

                  </div>

                  {/* Bottom Line */}

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#6957DF] to-[#A855F7] transition-all duration-700 group-hover:w-full" />

                </div>

              )
            )}

          </div>

        </div>

        {/* ================= CTA ================= */}

        <div className="mx-auto w-[92%] max-w-6xl py-24">

          <div className="contact-float relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6957DF] via-[#5B45C6] to-[#30245F] px-8 py-14 text-center text-white shadow-[0_30px_90px_rgba(105,87,223,0.25)] md:px-16 md:py-20">

            {/* Decorative Elements */}

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">

                <Phone size={27} />

              </div>

              <h2 className="contact-display mt-7 text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                Talk to our travel experts and let us help you create a
                memorable trip tailored perfectly to your needs.
              </p>

              <a
                href="tel:+919163569695"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#6957DF] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
              >
                Call Us Now
                <ArrowUpRight size={19} />
              </a>

            </div>

          </div>

        </div>

        {/* ================= MAP HEADING ================= */}

        <div className="mx-auto mb-10 w-[92%] max-w-7xl">

          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="contact-mono text-[10px] uppercase text-[#6957DF]">
                Find Us
              </p>

              <h2 className="contact-display mt-2 text-4xl text-slate-800 md:text-5xl">
                Visit Our Office
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 md:text-right">
              Come visit us at our Kolkata office and let us help you plan
              your next unforgettable adventure.
            </p>

          </div>

        </div>

        {/* ================= GOOGLE MAP ================= */}

        <div className="contact-fade-up mx-auto mb-24 w-[92%] max-w-7xl overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_30px_90px_rgba(105,87,223,0.16)]">

          <div className="overflow-hidden rounded-[1.6rem]">

            <iframe
              title="Riya Tours and Travels Location"
              src="https://www.google.com/maps?q=Riya+Tours+and+Travels&z=17&output=embed"
              className="h-[400px] w-full border-0 md:h-[500px]"
              loading="lazy"
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Tag,
  PlaneTakeoff,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9163569695",
  },
  {
    icon: Mail,
    label: "Email",
    value: "riyatourtravels01@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "57A, Mahanirban Rd, Dover Terrace, Gariahat, near City Mart, Ballygunge, Kolkata, West Bengal 700029",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat : 10:00 AM - 08:00 PM",
  },
];

const Contact = () => {
  // Purely decorative reference tag, mirrors the enquiry ticket motif
  const refCode = `CX-${new Date().getFullYear().toString().slice(2)}${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}`;

  return (
    <div className="relative z-0">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      <section className="relative z-10">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@500&display=swap');

          .contact-display {
            font-family: 'Fraunces', serif;
            font-optical-sizing: auto;
          }

          .contact-mono {
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0.08em;
          }

          .contact-input {
            transition: border-color 200ms ease, box-shadow 200ms ease;
          }

          .contact-input:focus {
            box-shadow: 0 0 0 4px rgba(105, 87, 223, 0.14);
          }

          .contact-submit {
            position: relative;
            overflow: hidden;
          }

          .contact-submit::before {
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

          .contact-submit:hover::before {
            left: 130%;
          }

          @keyframes contactFadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .contact-fade-up {
            animation: contactFadeUp 0.6s ease-out both;
          }
        `}</style>

        {/* ================= Hero ================= */}

        <div className="relative overflow-hidden bg-gradient-to-br from-[#6957DF] to-[#3D2E77] py-24 text-white">

          <div className="pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#9F7AEA]/30 blur-[100px]" />

          <div className="contact-fade-up relative mx-auto w-[92%] max-w-7xl text-center">

            <h1 className="contact-display mt-7 text-5xl leading-tight md:text-6xl">
              Let's Plan Your<br className="hidden md:block" /> Next Journey
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
              Have questions about our tour packages? Need a customized itinerary?
              Get in touch with our travel experts today.
            </p>

          </div>

        </div>

        {/* ================= Content ================= */}

        <div className="mx-auto -mt-14 grid w-[92%] max-w-7xl gap-10 pb-20 lg:grid-cols-5">

          {/* Left */}

          <div className="contact-fade-up space-y-6 lg:col-span-2">

            <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_30px_80px_rgba(105,87,223,0.14)]">

              <p className="contact-mono text-[11px] uppercase text-[#6957DF]/70">
                Reach Us
              </p>
              <h2 className="contact-display mt-2 mb-8 text-3xl text-slate-800">
                Contact Information
              </h2>

              <div className="space-y-6">

                {contactDetails.map(({ icon: Icon, label, value }, index) => (
                  <div key={index} className="group flex gap-5">

                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                      border-2 border-[#6957DF]
                      bg-white
                      text-[#6957DF]
                      shadow-sm
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:border-transparent
                      group-hover:bg-gradient-to-br
                      group-hover:from-[#6957DF]
                      group-hover:to-[#9F7AEA]
                      group-hover:text-white"
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {label}
                      </h3>
                      <p className="text-gray-600">
                        {value}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="contact-fade-up rounded-3xl border border-purple-100 bg-white p-10 shadow-[0_30px_80px_rgba(105,87,223,0.14)] lg:col-span-3">

            <p className="contact-mono text-[11px] uppercase text-[#6957DF]/70">
              Drop A Line
            </p>
            <h2 className="contact-display mt-2 mb-8 text-3xl text-slate-800">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div className="relative">
                  <User
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input w-full rounded-xl border border-slate-200 px-5 py-4 pl-11 outline-none focus:border-[#6957DF]"
                  />
                </div>

                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="contact-input w-full rounded-xl border border-slate-200 px-5 py-4 pl-11 outline-none focus:border-[#6957DF]"
                  />
                </div>

              </div>

              <div className="relative">
                <Tag
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#6957DF]/50"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="contact-input w-full rounded-xl border border-slate-200 px-5 py-4 pl-11 outline-none focus:border-[#6957DF]"
                />
              </div>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="pointer-events-none absolute left-4 top-4 text-[#6957DF]/50"
                />
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="contact-input w-full rounded-xl border border-slate-200 px-5 py-4 pl-11 outline-none focus:border-[#6957DF]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-8 py-4 font-semibold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* ================= Google Map ================= */}

        <div className="contact-fade-up mx-auto mb-20 w-[92%] max-w-7xl overflow-hidden rounded-3xl border border-purple-100 shadow-[0_30px_80px_rgba(105,87,223,0.14)]">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Riya+Tours+and+Travels&z=17&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
};

export default Contact;
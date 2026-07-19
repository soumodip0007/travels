import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-white">

      {/* ================= Hero ================= */}

      <div className="bg-gradient-to-r from-sky-700 to-sky-500 py-20 text-white">

        <div className="mx-auto w-[92%] max-w-7xl text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Let's Plan Your Next Journey
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-sky-100">
            Have questions about our tour packages? Need a customized itinerary?
            Get in touch with our travel experts today.
          </p>

        </div>

      </div>

      {/* ================= Content ================= */}

      <div className="mx-auto -mt-14 grid w-[92%] max-w-7xl gap-10 pb-20 lg:grid-cols-5">

        {/* Left */}

        <div className="space-y-6 lg:col-span-2">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="mb-8 text-3xl font-bold text-slate-800">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Phone />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Mail />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@travelx.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <MapPin />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Office
                  </h3>
                  <p className="text-gray-600">
                    Kolkata, West Bengal, India
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Clock />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-white p-10 shadow-xl lg:col-span-3">

          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            Send Us A Message
          </h2>

          <form className="space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
            ></textarea>

            <button
              type="submit"
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-600 to-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* ================= Google Map ================= */}

      <div className="mx-auto mb-20 w-[92%] max-w-7xl overflow-hidden rounded-3xl shadow-xl">

        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[450px] w-full border-0"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
};

export default Contact;
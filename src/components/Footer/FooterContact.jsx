import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Globe,
} from "lucide-react";

export default function FooterContact() {
  return (
    <div>

      {/* Heading */}

      <h3 className="relative inline-block text-2xl font-bold text-white">
        Contact Us

        <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-orange-500"></span>
      </h3>

      {/* Contact List */}

      <div className="mt-8 space-y-6">

        {/* Address */}

        <div className="group flex items-start gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg transition-all duration-300 group-hover:bg-orange-500 group-hover:rotate-6">

            <MapPin size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Office Address
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-300">
              123 Park Street,
              <br />
              Kolkata, West Bengal 700016,
              <br />
              India
            </p>

          </div>

        </div>

        {/* Phone */}

        <div className="group flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg transition-all duration-300 group-hover:bg-orange-500 group-hover:rotate-6">

            <Phone size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Phone
            </h4>

            <a
              href="tel:+919999999999"
              className="text-sm text-slate-300 transition hover:text-orange-400"
            >
              +91 99999 99999
            </a>

          </div>

        </div>

        {/* Email */}

        <div className="group flex items-center gap-4">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg transition-all duration-300 group-hover:bg-orange-500 group-hover:rotate-6">

            <Mail size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Email
            </h4>

            <a
              href="mailto:info@riyatravels.com"
              className="text-sm text-slate-300 transition hover:text-orange-400"
            >
              info@riyatravels.com
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}
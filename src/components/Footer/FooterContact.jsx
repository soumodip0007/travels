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

        <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7]"></span>
      </h3>

      {/* Contact List */}

      <div className="mt-8 space-y-6">

        {/* Address */}

        <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-300/20 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(147,51,234,0.12)]">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7] text-white shadow-[0_12px_28px_rgba(147,51,234,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_18px_40px_rgba(147,51,234,0.38)]">

            <MapPin size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Office Address
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-300">
              57A, Mahanirban Rd, Dover Terrace, Gariahat, near City Mart, Ballygunge,
              <br />
              Kolkata, West Bengal 700029
            </p>

          </div>

        </div>

        {/* Phone */}

        <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-300/20 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(147,51,234,0.12)]">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7] text-white shadow-[0_12px_28px_rgba(147,51,234,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_18px_40px_rgba(147,51,234,0.38)]">

            <Phone size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Phone
            </h4>

            <a
              href="tel:+919163569695"
              className="text-sm text-slate-300 transition hover:text-[#C084FC]"
            >
              +91 9163569695
            </a>

          </div>

        </div>

        {/* Email */}

        <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-300/20 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(147,51,234,0.12)]">

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7] text-white shadow-[0_12px_28px_rgba(147,51,234,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_18px_40px_rgba(147,51,234,0.38)]">

            <Mail size={20} />

          </div>

          <div>

            <h4 className="font-semibold text-white">
              Email
            </h4>

            <a
              href="mailto:riyatourtravels01@gmail.com"
              className="text-sm text-slate-300 transition hover:text-[#C084FC]"
            >
              riyatourtravels01@gmail.com
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}
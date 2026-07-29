import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function FooterBrand() {
  return (
    <div>

      {/* Logo */}

      <img
        src="/logo.png"
        alt="Travel Logo"
        className="h-24 w-auto rounded-2xl border border-white/10 bg-white p-3 shadow-[0_20px_45px_rgba(105,87,223,0.25)]"
      />

      {/* Description */}

      <p className="mt-8 text-[16px] leading-8 text-slate-300">
        Discover the world's most beautiful destinations with premium travel
        experiences, customized holiday packages, luxury stays, and memorable
        adventures crafted especially for you.
      </p>

      {/* Social Icons */}

      <div className="mt-8 flex items-center gap-3">

        {/* Facebook */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]
          text-white
          shadow-[0_14px_30px_rgba(147,51,234,0.28)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-105
          hover:shadow-[0_20px_40px_rgba(147,51,234,0.42)]"
        >
          <FaFacebookF
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* X */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]
          text-white
          shadow-[0_14px_30px_rgba(147,51,234,0.28)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-105
          hover:shadow-[0_20px_40px_rgba(147,51,234,0.42)]"
        >
          <FaXTwitter
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Instagram */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]
          text-white
          shadow-[0_14px_30px_rgba(147,51,234,0.28)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-105
          hover:shadow-[0_20px_40px_rgba(147,51,234,0.42)]"
        >
          <FaInstagram
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* LinkedIn */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]
          text-white
          shadow-[0_14px_30px_rgba(147,51,234,0.28)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-105
          hover:shadow-[0_20px_40px_rgba(147,51,234,0.42)]"
        >
          <FaLinkedinIn
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* YouTube */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-2xl
          border border-white/10
          bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]
          text-white
          shadow-[0_14px_30px_rgba(147,51,234,0.28)]
          transition-all duration-300
          hover:-translate-y-1 hover:scale-105
          hover:shadow-[0_20px_40px_rgba(147,51,234,0.42)]"
        >
          <FaYoutube
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

      </div>

    </div>
  );
}
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
        src="/logo.png" // Replace with your logo
        alt="Travel Logo"
        className="h-24 w-auto rounded-lg bg-white p-2 shadow-lg"
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
          className="group flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <FaFacebookF
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* X */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <FaXTwitter
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* Instagram */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <FaInstagram
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* LinkedIn */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <FaLinkedinIn
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        {/* YouTube */}

        <a
          href="#"
          className="group flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
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
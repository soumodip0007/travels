import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-28
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-6
        hover:shadow-[0_20px_40px_rgba(37,211,102,.45)]
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}
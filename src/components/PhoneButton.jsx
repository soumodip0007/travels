import { Phone } from "lucide-react";

export default function PhoneButton() {
  return (
    <a
      href="tel:+919999999999"
      className="
        fixed
        bottom-50
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#6957DF]
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:-rotate-6
        hover:shadow-[0_20px_40px_rgba(105,87,223,.45)]
      "
    >
      <Phone size={30} />
    </a>
  );
}
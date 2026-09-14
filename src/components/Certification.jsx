import cer1 from "../assets/certificates/cer1.webp";
import cer2 from "../assets/certificates/cer2.webp";
import cer3 from "../assets/certificates/cer3.webp";
import cer4 from "../assets/certificates/cer4.webp";
import cer5 from "../assets/certificates/cer5.webp";
import cer6 from "../assets/certificates/cer6.webp";
import cer7 from "../assets/certificates/cer7.webp";

const clientsData = [
  { id: 1, url: cer1, name: "Certificate 1" },
  { id: 2, url: cer2, name: "Certificate 2" },
  { id: 3, url: cer3, name: "Certificate 3" },
  { id: 4, url: cer4, name: "Certificate 4" },
  { id: 5, url: cer5, name: "Certificate 5" },
  { id: 6, url: cer6, name: "Certificate 6" },
  { id: 7, url: cer7, name: "Certificate 7" },
];

function LogoCard({ item }) {
  return (
    <div className="group/card relative mx-4 flex h-32 w-56 shrink-0 items-center justify-center bg-[#FBF7EE] p-4 shadow-[0_10px_25px_rgba(11,29,58,0.12)] transition-all duration-500 hover:shadow-[0_18px_40px_rgba(117,49,234,0.35)]">
      {/* Perforated ticket edge, top & bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-2 h-4 bg-[radial-gradient(circle,_#0B1D3A_2.5px,_transparent_2.5px)] bg-[length:14px_14px] bg-repeat-x opacity-90"
        style={{ backgroundPosition: "0 100%" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-2 h-4 bg-[radial-gradient(circle,_#0B1D3A_2.5px,_transparent_2.5px)] bg-[length:14px_14px] bg-repeat-x opacity-90"
        style={{ backgroundPosition: "0 0" }}
      />

      <img
        src={item.url}
        alt={item.name}
        className="h-full w-full object-contain grayscale-[15%] transition duration-500 group-hover/card:grayscale-0"
      />

      {/* Wax-seal badge */}
      <div className="absolute -right-3 -top-3 flex h-9 w-9 rotate-12 items-center justify-center rounded-full border-2 border-[#FBF7EE] bg-[#B8934A] text-[#0B1D3A] shadow-md transition-transform duration-500 group-hover/card:rotate-[24deg]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2l2.4 6.6L21 9l-5 4.3L17.4 20 12 16.3 6.6 20 8 13.3 3 9l6.6-.4z" />
        </svg>
      </div>
    </div>
  );
}

export default function Partnerships() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#5b2bd6] via-[#8450ff] to-[#a855f7] py-8">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2
            className="mt-3 text-5xl font-semibold text-[#fff]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Certifications
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#fff]">
            Our certifications reflect our commitment to quality, professionalism,
            and excellence in every travel experience.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="group relative overflow-hidden py-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...clientsData, ...clientsData].map((item, i) => (
              <LogoCard key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
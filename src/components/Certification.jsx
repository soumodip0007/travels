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
    <div className="mx-5 flex h-28 w-52 shrink-0 items-center justify-center rounded-xl border border-purple-200 bg-white/90 p-3 backdrop-blur-sm shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#6957DF] hover:shadow-[0_15px_35px_rgba(105,87,223,0.35)]">
      <img
        src={item.url}
        alt={item.name}
        className="h-full w-full object-contain transition duration-300"
      />
    </div>
  );
}

export default function Partnerships() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20">
      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-black text-slate-800">
            <span className="bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 backdrop-blur-xs">
            Our certifications reflect our commitment to quality, professionalism,
            and excellence in every travel experience.
          </p>
        </div>

        {/* Marquee */}
        <div className="group relative overflow-hidden rounded-2xl border border-sky-200 bg-white py-6 shadow-xl">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Certificates */}
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[...clientsData, ...clientsData].map((item, i) => (
              <LogoCard
                key={`${item.id}-${i}`}
                item={item}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
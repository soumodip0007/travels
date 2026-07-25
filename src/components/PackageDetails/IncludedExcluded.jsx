import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function IncludedExcluded({ tour }) {
  return (
    <section className="ie-root bg-[#FBF8F2] py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .ie-root { font-family: 'Inter', sans-serif; }
        .ie-serif { font-family: 'Fraunces', serif; }

        @keyframes ie-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(227, 162, 61, 0.35); }
          50% { box-shadow: 0 0 0 6px rgba(227, 162, 61, 0); }
        }
        .ie-eyebrow { animation: ie-glow 2.6s ease-in-out infinite; }

        @keyframes ie-slide-left {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes ie-slide-right {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ie-card-left  { animation: ie-slide-left 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .ie-card-right { animation: ie-slide-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both; }

        @keyframes ie-row-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ie-row { animation: ie-row-in 0.45s ease both; }
      `}</style>

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="ie-eyebrow inline-flex rounded-full bg-[#E3A23D] px-4 py-2 text-sm font-semibold text-white">
            Package Details
          </span>

          <h2 className="ie-serif mt-4 text-4xl font-bold text-[#1E2A47]">
            Included & Excluded
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Please review what is included in your package and what is not.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= Included ================= */}

          <div className="ie-card-left rounded-3xl border border-green-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

                <CheckCircle2
                  size={30}
                  className="text-green-600"
                />

              </div>

              <div>

                <h3 className="ie-serif text-2xl font-bold text-green-700">
                  Included
                </h3>

                <p className="text-gray-500">
                  Services covered in this package
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {tour.included.map((item, index) => (

                <div
                  key={index}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className="ie-row flex items-start gap-4 rounded-2xl bg-green-50 p-4 transition hover:bg-green-100"
                >

                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-green-600"
                  />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ================= Excluded ================= */}

          <div className="ie-card-right rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">

                <XCircle
                  size={30}
                  className="text-red-600"
                />

              </div>

              <div>

                <h3 className="ie-serif text-2xl font-bold text-red-600">
                  Excluded
                </h3>

                <p className="text-gray-500">
                  Not covered in this package
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {tour.excluded.map((item, index) => (

                <div
                  key={index}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className="ie-row flex items-start gap-4 rounded-2xl bg-red-50 p-4 transition hover:bg-red-100"
                >

                  <XCircle
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-red-600"
                  />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
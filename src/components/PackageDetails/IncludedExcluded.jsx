import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function IncludedExcluded({ tour }) {
  return (
    <section className="rounded-[36px]
              border
              border-white/70
              bg-white/80
              backdrop-blur-1xl
              shadow-[0_25px_60px_rgba(105,87,223,0.12)]
              mt-12
              p-8
              md:p-10
              ">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6957DF]">
            Package Details
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Included & Excluded
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Please review what is included in your package and what is not.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= Included ================= */}

          <div className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_20px_60px_rgba(105,87,223,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(105,87,223,0.16)]">

            <div className="mb-8 flex items-center gap-4">

              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                border-2 border-green-500
                bg-white
                text-green-600
                shadow-sm
                transition-all duration-500
                group-hover:scale-110
                group-hover:rotate-6
                group-hover:border-transparent
                group-hover:bg-gradient-to-br
                group-hover:from-green-500
                group-hover:to-emerald-400
                group-hover:text-white
                group-hover:shadow-[0_15px_30px_rgba(34,197,94,0.35)]"
              >

                <CheckCircle2 size={28} />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-green-700">
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
                  className="flex items-start gap-4 rounded-2xl bg-green-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-100 hover:shadow-md"
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

          <div className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_20px_60px_rgba(105,87,223,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(105,87,223,0.16)]">

            <div className="mb-8 flex items-center gap-4">

              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                border-2 border-red-500
                bg-white
                text-red-600
                shadow-sm
                transition-all duration-500
                group-hover:scale-110
                group-hover:rotate-6
                group-hover:border-transparent
                group-hover:bg-gradient-to-br
                group-hover:from-red-500
                group-hover:to-rose-400
                group-hover:text-white
                group-hover:shadow-[0_15px_30px_rgba(239,68,68,0.35)]"
              >

                <XCircle size={28} />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-red-600">
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
                  className="flex items-start gap-4 rounded-2xl bg-red-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-100 hover:shadow-md"
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
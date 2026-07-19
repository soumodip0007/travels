import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function IncludedExcluded({ tour }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
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

          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

                <CheckCircle2
                  size={30}
                  className="text-green-600"
                />

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
                  className="flex items-start gap-4 rounded-2xl bg-green-50 p-4 transition hover:bg-green-100"
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

          <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">

                <XCircle
                  size={30}
                  className="text-red-600"
                />

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
                  className="flex items-start gap-4 rounded-2xl bg-red-50 p-4 transition hover:bg-red-100"
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
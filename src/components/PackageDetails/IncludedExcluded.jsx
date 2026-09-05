import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function IncludedExcluded({ tour }) {
  return (
    <section className="overflow-hidden rounded-[36px]
              border
              border-purple-100
              bg-gradient-to-br from-purple-50/80 via-fuchsia-50/70 to-purple-100/80
              shadow-lg
              transition-all
              duration-300
              hover:shadow-2xl
              mt-12
              ">

      <div
  className="
    relative
    overflow-hidden
    rounded-t-[36px]
    border-b border-white/20
    bg-gradient-to-r
    from-[#6D28D9]
    via-[#9333EA]
    to-[#C026D3]
    px-8 py-7
    md:px-12 md:py-9
  "
>
  {/* Decorative Glow */}
  <div
    className="
      pointer-events-none
      absolute
      -right-20
      -top-24
      h-64
      w-64
      rounded-full
      bg-fuchsia-300/30
      blur-3xl
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-28
      left-1/3
      h-56
      w-56
      rounded-full
      bg-purple-300/25
      blur-3xl
    "
  />

  {/* Header Content */}
  <div
    className="
      relative
      mx-auto
      flex
      max-w-7xl
      items-center
      justify-between
      gap-6
    "
  >
    {/* Left Content */}
    <div className="min-w-0">

      {/* Main Heading */}
      <h2
        className="
          mt-3
          font-serif
          text-4xl
          font-bold
          tracking-tight
          text-white
          drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
          md:text-5xl
        "
      >
        Included & Excluded
      </h2>

      {/* Description */}
      <p
        className="
          mt-2
          max-w-2xl
          text-sm
          font-medium
          text-white/85
          md:text-base
        "
      >
        Please review what is included in your package and what is not.
      </p>
    </div>

    {/* Right Badge */}
    <div
      className="
        hidden
        shrink-0
        rounded-full
        border
        border-white/40
        bg-white/95
        px-5 py-2.5
        text-sm
        font-bold
        text-[#7C3AED]
        shadow-lg
        md:block
      "
    >
      Package Details
    </div>
  </div>
</div>

      {/* Body */}

      <div className="p-8 md:p-10">
        <div className="mx-auto w-[92%] max-w-7xl">

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
      </div>
    </section>
  );
}
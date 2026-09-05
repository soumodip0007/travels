import {
  Star,
  IndianRupee,
  Clock3,
  MapPin,
} from "lucide-react";

export default function PackageOverview({
  tour,
  selectedPackage,
}) {
  // Current selected package
  const currentPackage = tour?.packages?.[selectedPackage];

  // Fallback to first available package
  const firstAvailablePackage = Object.values(tour?.packages || {}).find(
    (pkg) => pkg?.price
  );

  const displayPrice =
    currentPackage?.price ??
    firstAvailablePackage?.price ??
    0;

  const displayDuration =
    currentPackage?.duration ??
    firstAvailablePackage?.duration ??
    tour?.duration;

  return (
    <section
      className="
        overflow-hidden
        rounded-[36px]
        border border-purple-200/60
        bg-gradient-to-br
        from-purple-50/80
        via-fuchsia-50/70
        to-purple-100/80
        shadow-[0_20px_60px_rgba(109,40,217,0.18)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:shadow-[0_25px_70px_rgba(109,40,217,0.25)]
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          overflow-hidden
          border-b border-white/20
          bg-gradient-to-r
          from-[#6D28D9]
          via-[#9333EA]
          to-[#C026D3]
          px-8
          py-7
          md:px-10
          md:py-9
        "
      >

        {/* Decorative Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
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
            bg-purple-300/30
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
          "
        >

          <div>

            {/* Small Label */}
            <span
              className="
                inline-block
                rounded-full
                border
                border-white/40
                bg-white/20
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
              "
            >
              Tour Overview
            </span>

            {/* Tour Title */}
            <h2
              className="
                mt-3
                text-4xl
                font-black
                tracking-tight
                text-white
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
                md:text-5xl
              "
            >
              {tour?.title}
            </h2>

          </div>

          {/* Duration Badge */}
          {displayDuration && (
            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/40
                bg-white/95
                px-5
                py-2.5
                text-sm
                font-bold
                text-[#7C3AED]
                shadow-lg
                md:flex
              "
            >
              <Clock3 size={17} />
              {displayDuration}
            </div>
          )}

        </div>
      </div>


      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="p-8 md:p-10">

        <div className="mx-auto w-[92%] max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Overview */}
            <div className="lg:col-span-3">

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-purple-100
                  bg-[#9262F7]
                  px-8
                  py-6
                  shadow-[0_10px_30px_rgba(109,40,217,0.10)]
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_40px_rgba(109,40,217,0.16)]
                "
              >

                {/* Decorative Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-purple-200/40
                    blur-2xl
                  "
                />

                <h3
                  className="
                    relative
                    text-2xl
                    font-bold
                    text-[#fff]
                  "
                >
                  Overview
                </h3>

                <p
                  className="
                    relative
                    mt-2
                    leading-8
                    text-[#fff]
                  "
                >
                  {tour?.overview}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    title: "Meghalaya",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80",
    slug: "/packages/magical-meghalaya",
  },
  {
    id: 2,
    title: "Darjeeling",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    slug: "/packages/darjeeling",
  },
  {
    id: 3,
    title: "Gangtok",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    slug: "/packages/gangtok",
  },
  {
    id: 4,
    title: "Goa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    slug: "/packages/goa",
  },
  {
    id: 5,
    title: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    slug: "/packages/kashmir",
  },
  {
    id: 6,
    title: "Kerala",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    slug: "/packages/kerala",
  },
];

export default function FooterGallery() {
  return (
    <div>

      {/* Heading */}

      <h3 className="relative mb-8 inline-block text-2xl font-bold text-white">
        Popular Destinations

        <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7]"></span>
      </h3>

      {/* Gallery */}

      <div className="grid grid-cols-3 gap-3">

        {destinations.map((place) => (

          <Link
            key={place.id}
            to={place.slug}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:shadow-[0_18px_40px_rgba(147,51,234,0.18)]"
          >

            {/* Image */}

            <img
              src={place.image}
              alt={place.title}
              className="h-24 w-full object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#12071F]/80 via-[#2A1150]/25 to-transparent transition-all duration-300 group-hover:from-[#7C3AED]/75"></div>

            {/* Destination Name */}

            <div className="absolute inset-0 flex items-end justify-center p-2">

              <span className="text-center text-xs font-semibold text-white transition-all duration-300 group-hover:-translate-y-0.5">
                {place.title}
              </span>

            </div>

          </Link>

        ))}

      </div>

      {/* Explore Button */}

      <Link
        to="/#tours"
        className="mt-6 flex h-11 items-center justify-center rounded-full border border-purple-200 bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] font-semibold text-white shadow-[0_14px_30px_rgba(147,51,234,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(147,51,234,0.38)]"
      >
        Explore All Packages
      </Link>

    </div>
  );
}
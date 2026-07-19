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

        <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-orange-500"></span>
      </h3>

      {/* Gallery */}

      <div className="grid grid-cols-3 gap-3">

        {destinations.map((place) => (
          <Link
            key={place.id}
            to={place.slug}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            {/* Image */}

            <img
              src={place.image}
              alt={place.title}
              className="h-24 w-full object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-orange-600/80"></div>

            {/* Destination Name */}

            <div className="absolute inset-0 flex items-end justify-center p-2">

              <span className="text-center text-xs font-semibold text-white transition-all duration-300 group-hover:translate-y-[-2px]">
                {place.title}
              </span>

            </div>

          </Link>
        ))}

      </div>

      {/* Explore Button */}

      <Link
        to="/packages"
        className="mt-6 flex h-11 items-center justify-center rounded-full border border-sky-500 bg-sky-600 font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
      >
        Explore All Packages
      </Link>
    </div>
  );
}
import {
  Camera,
  MapPin,
} from "lucide-react";

import gallery from '../data/gallery'

const Gallery = () => {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            <Camera size={16} />
            Travel Memories
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-slate-800">
            Our Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Every destination has a story. Explore breathtaking mountains,
            crystal-clear lakes, pristine beaches, lush forests, and unforgettable
            travel moments captured from our most popular tour packages.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100"></div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="translate-y-5 transition duration-500 group-hover:translate-y-0">

                  <div className="mb-3 inline-flex rounded-full bg-white/20 p-3 backdrop-blur">
                    <Camera
                      size={20}
                      className="text-white"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-white/90">

                    <MapPin size={16} />

                    <span>Explore Destination</span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;
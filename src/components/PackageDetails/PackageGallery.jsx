import { useState } from "react";
import { X } from "lucide-react";

export default function PackageGallery({ tour }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-10">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explore Beautiful Destinations
          </h2>

          <p className="mt-2 text-gray-600">
            A glimpse of the amazing places you'll visit during this tour.
          </p>
        </div>

        {/* Gallery */}

        <div className="grid gap-5 lg:grid-cols-2">

          {/* Large Image */}

          <div
            className="group cursor-pointer overflow-hidden rounded-3xl"
            onClick={() => setSelectedImage(tour.image)}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Right Images */}

          <div className="grid grid-cols-2 gap-5">

            {tour.gallery.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-3xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}

          </div>

        </div>

        {/* Image Modal */}

        {selectedImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-6">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-8 top-8 rounded-full bg-white p-3 transition hover:bg-orange-500 hover:text-white"
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />

          </div>
        )}

      </div>
    </section>
  );
}
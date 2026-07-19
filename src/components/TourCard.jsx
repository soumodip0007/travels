import { Link } from "react-router-dom";

import {
    Share2,
    Clock3,
    MapPin,
    IndianRupee,
    Eye,
    Send,
    Phone,
    Star,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function TourCard({ tour }) {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* ================= Image ================= */}

            <div className="relative overflow-hidden">

                <img
                    src={tour.image}
                    alt={tour.title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}

                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 shadow-lg">
                    <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                    />
                    {tour.rating}
                </div>

                {/* Share Button */}

                <button
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-700 shadow-lg transition-all duration-300 hover:rotate-12 hover:bg-sky-600 hover:text-white"
                    onClick={() => navigator.share?.({
                        title: tour.title,
                        text: tour.title,
                        url: `${window.location.origin}/packages/${tour.slug}`,
                    })}
                >
                    <Share2 size={16} />
                </button>

            </div>

            {/* ================= Content ================= */}

            <div className="p-4">

                {/* Tour Title */}

                <h3 className="text-xl font-bold text-sky-700 transition group-hover:text-orange-500">
                    {tour.title}
                </h3>

                {/* Price */}

                <div className="mt-2 flex items-end gap-2">

                    <div className="flex items-center text-2xl font-black text-slate-900">

                        <IndianRupee
                            size={20}
                            className="mr-1"
                        />

                        {tour.price.toLocaleString()}

                    </div>

                    <span className="pb-1 text-sm text-gray-500">
                        / Per Person
                    </span>

                </div>

                {/* Duration & Location */}

                <div className="mt-3 flex items-center justify-between text-sm">

                    <div className="flex items-center gap-2">

                        <Clock3
                            size={18}
                            className="text-orange-500"
                        />

                        <span className="font-medium">
                            {tour.duration}
                        </span>

                    </div>

                    <div className="flex items-center gap-2">

                        <MapPin
                            size={18}
                            className="text-sky-600"
                        />

                        <span className="font-medium truncate max-w-[150px]">
                            {tour.location}
                        </span>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-4 h-px w-full bg-gray-200"></div>
                {/* ================= Facilities ================= */}

                <div className="my-4 flex items-center justify-between">

                    {tour.facilities.slice(0, 5).map((facility) => {
                        const Icon = facility.icon;

                        return (
                            <div
                                key={facility.id}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-sky-200 text-sky-600 shadow-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-md"
                            >
                                <Icon size={26} />
                            </div>
                        );
                    })}

                </div>

                {/* ================= Buttons ================= */}

                <div className="mt-4 flex items-center gap-3">

                    {/* View Details */}
                    <Link
                        to={`/packages/${tour.slug}`}
                        className="flex-grow flex h-12 items-center justify-center gap-2 rounded-full border border-orange-500 bg-white px-4 text-sm font-semibold text-orange-500 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-lg"
                    >
                        <Eye size={16} />
                        <span className="whitespace-nowrap">View Details</span>
                    </Link>

                    {/* Enquiry */}
                    <Link
                        to={`/packages/${tour.slug}`}
                        className="flex-grow flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <Send size={16} />
                        <span>Enquiry</span>
                    </Link>

                    {/* WhatsApp */}
                    <a
                        href={tour.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
                    >
                        <FaWhatsapp size={22} />
                    </a>

                    {/* Call */}
                    <a
                        href={tour.phone}
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-sky-800"
                    >
                        <Phone size={20} />
                    </a>

                </div>

            </div>

        </div>
    );
}
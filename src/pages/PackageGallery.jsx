import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    Camera,
    Maximize2,
    Minimize2,
    X,
    MapPin,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import packages from "../data/packages";
import ParticlesBackground from "../components/ParticlesBackground";

const PackageGallery = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const [isMaximized, setIsMaximized] = useState(false);

    const packageData = packages.find(
        (item) => item.slug === slug
    );

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    if (!packageData) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">

                    <h1 className="text-3xl font-bold text-slate-800">
                        Package Not Found
                    </h1>

                    <button
                        onClick={() => navigate("/gallery")}
                        className="mt-5 rounded-full bg-[#6957DF] px-6 py-3 font-semibold text-white"
                    >
                        Back to Gallery
                    </button>

                </div>
            </div>
        );
    }

    const images = (packageData.gallery || []).filter(Boolean);

    const openImage = (image) => {
        setSelectedImage(image);
        setIsMaximized(false);
    };

    const closeImage = () => {
        setSelectedImage(null);
        setIsMaximized(false);
    };

    return (
        <div className="relative z-0 min-h-screen">

            <div className="fixed inset-0 -z-10 overflow-hidden">
                <ParticlesBackground />
            </div>

            <section className="relative px-6 py-10 pt-28">

                <div className="mx-auto w-[92%] max-w-7xl">

                    {/* Back Button */}

                    <button
            onClick={() => navigate("/gallery")}
            className="group mb-10 flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-md ring-1 ring-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:bg-[#6957DF] hover:text-white hover:shadow-lg"
        >
            <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to Gallery
        </button>

                    {/* Header */}

                    <div className="mb-14 text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE] px-5 py-2 text-sm font-semibold text-[#6957DF]">
                            <Camera size={16} />
                            {packageData.category}
                        </span>

                        <h1 className="mt-5 text-4xl font-extrabold text-slate-800 md:text-5xl">
                            {packageData.title}
                        </h1>

                        {packageData.location && (
                            <div className="mt-4 flex items-center justify-center gap-2 text-slate-600">
                                <MapPin size={17} />
                                <span>
                                    {packageData.location}
                                </span>
                            </div>
                        )}

                        <p className="mt-4 text-slate-500">
                            {images.length} memorable moments
                        </p>

                    </div>

                    {/* Images */}

                    {images.length > 0 ? (

                        <motion.div
                            layout
                            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >

                            {images.map((image, index) => (

                                <motion.div
                                    key={`${image}-${index}`}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.03,
                                    }}
                                    onClick={() => openImage(image)}
                                    className="group relative h-72 cursor-pointer overflow-hidden rounded-3xl shadow-lg"
                                >

                                    <img
                                        src={image}
                                        alt={`${packageData.title} ${index + 1}`}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                    {/* Maximize Button */}

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openImage(image);
                                        }}
                                        aria-label="Zoom image"
                                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition duration-300 hover:bg-[#6957DF] group-hover:opacity-100"
                                    >
                                        <Maximize2 size={16} />
                                    </button>

                                    {/* Image Number */}

                                    <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                                        Image {index + 1}
                                    </div>

                                </motion.div>

                            ))}

                        </motion.div>

                    ) : (

                        <div className="rounded-3xl bg-white/80 px-6 py-20 text-center shadow-lg">

                            <Camera
                                size={45}
                                className="mx-auto text-[#6957DF]"
                            />

                            <h2 className="mt-5 text-2xl font-bold text-slate-800">
                                No Gallery Images
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Images for this package will be available soon.
                            </p>

                        </div>

                    )}

                </div>

            </section>

            {/* Lightbox */}

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeImage}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{
                                opacity: 0,
                                scale: 0.85,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                width: isMaximized ? "95vw" : "70vw",
                                height: isMaximized ? "88vh" : "70vh",
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.85,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className="relative mx-auto my-auto overflow-hidden rounded-2xl bg-black shadow-2xl"
                        >

                            {/* Controls */}
                            <div className="absolute right-4 top-4 z-[100] flex gap-2">

                                <button
                                    onClick={() => setIsMaximized(true)}
                                    disabled={isMaximized}
                                    aria-label="Maximize"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-white backdrop-blur-md transition hover:bg-[#6957DF] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <Maximize2 size={18} />
                                </button>

                                <button
                                    onClick={() => setIsMaximized(false)}
                                    disabled={!isMaximized}
                                    aria-label="Minimize"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-white backdrop-blur-md transition hover:bg-[#A855F7] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <Minimize2 size={18} />
                                </button>

                                <button
                                    onClick={closeImage}
                                    aria-label="Close"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/90 text-white backdrop-blur-md transition hover:bg-red-600"
                                >
                                    <X size={18} />
                                </button>

                            </div>

                            {/* Selected Image */}
                            <img
                                src={selectedImage}
                                alt={packageData.title}
                                className="h-full w-full object-contain"
                            />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-xl font-bold text-white">
                                    {packageData.title}
                                </h3>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default PackageGallery;
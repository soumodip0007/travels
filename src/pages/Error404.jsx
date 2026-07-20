import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane,
  Compass,
  MapPinned,
  Home,
} from "lucide-react";

export default function Error404() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-orange-500 px-6">

      {/* Background Blurs */}

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white/15 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl"></div>

      {/* Floating Plane */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-12 top-20 hidden lg:block"
      >
        <Plane
          size={80}
          className="text-white/20"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-20 hidden lg:block"
      >
        <Compass
          size={70}
          className="text-white/20"
        />
      </motion.div>

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative max-w-2xl rounded-[35px] border border-white/20 bg-white/15 p-12 text-center shadow-2xl backdrop-blur-xl"
      >

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl"
        >
          <MapPinned
            size={55}
            className="text-sky-600"
          />
        </motion.div>

        <h1 className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-black text-white">
          Destination Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
          Oops! It looks like the destination you're trying to explore has
          wandered off the map. Let's get you back to planning your next
          unforgettable journey.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-sky-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
        >
          <Home size={22} />
          Back to Home
        </Link>

      </motion.div>
    </section>
  );
}
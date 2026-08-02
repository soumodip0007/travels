import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane,
  Compass,
  MapPinned,
  Home,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Error404() {
  return (

    <div className="relative z-0">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      <style>{`
        .error-cta {
          position: relative;
          overflow: hidden;
        }

        .error-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: left 700ms ease;
        }

        .error-cta:hover::before {
          left: 130%;
        }
      `}</style>

      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6">

        {/* Background Blurs */}

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#9F7AEA]/25 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#6957DF]/20 blur-3xl"></div>

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
            className="text-[#6957DF]/20"
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
            className="text-[#6957DF]/20"
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
          className="relative max-w-2xl rounded-[55px] border border-purple-100 bg-transparent/60 p-10 text-center shadow-[0_30px_90px_rgba(105,87,223,0.25)] backdrop-blur-xs"
        >

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mx-auto mb-2 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#6957DF] to-[#9F7AEA] shadow-[0_20px_45px_rgba(105,87,223,0.35)]"
          >
            <MapPinned
              size={55}
              className="text-white"
            />
          </motion.div>

          <h1 className="bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] bg-clip-text text-8xl font-black text-transparent">
            404
          </h1>

          <h2 className="text-4xl font-black text-slate-800">
            Destination Not Found
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-slate-500">
            Oops! It looks like the destination you're trying to explore has
            wandered off the map. Let's get you back to planning your next
            unforgettable journey.
          </p>

          <Link
            to="/"
            className="error-cta mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-8 py-4 text-lg font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]"
          >
            <Home size={22} />
            Back to Home
          </Link>

        </motion.div>
      </section>
    </div>

  );
}
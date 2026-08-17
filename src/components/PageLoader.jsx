import { AnimatePresence, motion } from "framer-motion";
import travelVideo from "../assets/loadingVideo.mp4";

export default function PageLoader({ loading, onComplete }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <video
            src={travelVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={onComplete}
            className="h-xl w-xl object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

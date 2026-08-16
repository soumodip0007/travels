import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import travelVideo from "../assets/loadingVideo.mp4";

export default function PageLoader({ loading }) {
  const videoRef = useRef(null);

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    const onSeeked = () => {
      video.play();
      video.removeEventListener("seeked", onSeeked);
    };

    video.addEventListener("seeked", onSeeked);
    video.currentTime = 0;
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center overflow-hidden bg-[#FFF]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <video
            ref={videoRef}
            src={travelVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
            className="h-xl w-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { useEffect, useRef, useState } from "react";

/* ===========================================================
   VANTA WAVES BACKGROUND
   Loads three.js + vanta.waves from cdnjs at runtime (they
   aren't npm-importable in this environment), then mounts the
   effect onto a full-bleed div. Falls back to a flat lavender
   fill while the scripts are loading.

   Color kept in the light-purple family: #AF91C0
=========================================================== */

const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_WAVES_SRC = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.waves.min.js";

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
    });
}

export default function TravelBackground() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function init() {
            try {
                if (!window.THREE) {
                    await loadScript(THREE_SRC);
                }
                if (!window.VANTA || !window.VANTA.WAVES) {
                    await loadScript(VANTA_WAVES_SRC);
                }
                if (cancelled || !vantaRef.current || effectRef.current) return;

                effectRef.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    THREE: window.THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 50.00,
                    minWidth: 50.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xb78bf9,
                    waveHeight: 40.00,
                    zoom: 0.99
                });

                setLoaded(true);
            } catch (err) {
                console.error("Vanta WAVES failed to load:", err);
            }
        }

        init();

        return () => {
            cancelled = true;
            if (effectRef.current) {
                effectRef.current.destroy();
                effectRef.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0"
            style={{
                background: "#F5F1FC",
                transition: "opacity 0.6s ease",
                opacity: loaded ? 1 : 0.85,
            }}
        />
    );
}
import { Plane } from "lucide-react";
import { useState } from "react";

export default function BotAvatar({ size = "normal" }) {
  const isSmall = size === "small";
  const [hovered, setHovered] = useState(false);

  const wrap = isSmall ? 58 : 82;
  const core = isSmall ? 40 : 56;
  const iconSize = isSmall ? 18 : 26;

  const R = 46;
  const CIRC = 2 * Math.PI * R;
  const cometLen = CIRC * 0.16;
  const cometGap = CIRC - cometLen;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center justify-center"
      style={{ width: wrap, height: wrap }}
    >
      <style>{`
        @keyframes ba-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes ba-orbit {
          to { transform: rotate(360deg); }
        }
        @keyframes ba-beacon-ping {
          0% { transform: scale(0.9); opacity: 0.55; }
          80%, 100% { transform: scale(2.1); opacity: 0; }
        }
        @keyframes ba-glow-breathe {
          0%, 100% { opacity: 0.38; }
          50% { opacity: 0.62; }
        }
        .ba-orbit-group {
          transform-origin: 50% 50%;
          animation: ba-orbit linear infinite;
          animation-duration: ${hovered ? "1.4s" : "3.6s"};
          transition: animation-duration 0.3s ease;
        }
      `}</style>

      {/* Whole avatar gently bobs */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: wrap, height: wrap, animation: "ba-float 2.4s ease-in-out infinite" }}
      >
        {/* Flight-path halo (signature element) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0"
          style={{ width: wrap, height: wrap }}
        >
          {/* faint static track */}
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="#C4B5FD"
            strokeOpacity="0.22"
            strokeWidth="1.4"
            strokeDasharray="1.5 5"
          />
          {/* cardinal ticks — real bearing markers, not decoration */}
          {[0, 90, 180, 270].map((deg) => (
            <line
              key={deg}
              x1="50"
              y1="2.5"
              x2="50"
              y2="6.5"
              stroke="#EDE9FE"
              strokeOpacity="0.55"
              strokeWidth="1.6"
              strokeLinecap="round"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          {/* comet sweep */}
          <g className="ba-orbit-group">
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="url(#ba-comet-gradient)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray={`${cometLen} ${cometGap}`}
            />
          </g>
          <defs>
            <linearGradient id="ba-comet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
              <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F0F9FF" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Core avatar */}
        <div
          className="relative flex items-center justify-center rounded-full transition-transform duration-300"
          style={{
            width: core,
            height: core,
            transform: hovered ? "scale(1.07)" : "scale(1)",
            background: "linear-gradient(135deg, #3B1E7A 0%, #7C3AED 45%, #22D3EE 100%)",
            boxShadow: "0 12px 30px rgba(124,58,237,0.4), inset 0 1px 1px rgba(255,255,255,0.25)",
          }}
        >
          {/* breathing glow */}
          <div
            className="absolute inset-0 rounded-full blur-md"
            style={{
              background: "linear-gradient(135deg, #A855F7, #67E8F9)",
              animation: "ba-glow-breathe 2.4s ease-in-out infinite",
            }}
          />

          {/* Icon with bank on hover */}
          <Plane
            className="relative z-10 text-white transition-transform duration-300 ease-out"
            size={iconSize}
            style={{
              transform: `rotate(${hovered ? -58 : -45}deg)`,
              filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
            }}
          />

          {/* Beacon status light */}
          <span
            className="absolute rounded-full"
            style={{
              bottom: -1,
              right: -1,
              width: isSmall ? 11 : 14,
              height: isSmall ? 11 : 14,
              background: "#34D399",
              border: "2px solid white",
              boxShadow: "0 0 6px rgba(52,211,153,0.8)",
            }}
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "#34D399",
                animation: "ba-beacon-ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
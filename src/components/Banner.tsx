"use client";

const BANNER_SEGMENTS = [
  { text: "TOGURO APRESENTA", color: "#EF4444" },
  { text: "✦", color: "#ffffff20" },
  { text: "LINHA SUPER", color: "#ffffff" },
  { text: "✦", color: "#ffffff20" },
  { text: "SABOOOOR", color: "#D97706" },
  { text: "✦", color: "#ffffff20" },
  { text: "72H PROTEÇÃO", color: "#22C55E" },
  { text: "✦", color: "#ffffff20" },
  { text: "0% ALUMÍNIO", color: "#3B82F6" },
  { text: "✦", color: "#ffffff20" },
  { text: "4 SABORES", color: "#ffffff" },
  { text: "✦", color: "#ffffff20" },
];

const DOUBLED_SEGMENTS = [...BANNER_SEGMENTS, ...BANNER_SEGMENTS];

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-[#111]">
      {/* Subtle gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#EF4444]/[0.05] via-transparent to-[#3B82F6]/[0.05]" />

      <div className="animate-marquee flex w-max items-center gap-6 py-3">
        {DOUBLED_SEGMENTS.map(({ text, color }, index) => (
          <span
            key={index}
            className="text-xs font-black tracking-widest whitespace-nowrap uppercase transition-all"
            style={{
              color,
              textShadow: color !== "#ffffff20" && color !== "#ffffff"
                ? `0 0 20px ${color}40`
                : "none",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

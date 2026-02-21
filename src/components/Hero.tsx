"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import SprayDots from "./SprayDots";

const PRODUCT_LAYOUT = [
  { left: "5%", top: "2%", delay: 0, rotate: -8, floatDuration: 3 },
  { left: "55%", top: "0%", delay: 0.25, rotate: 6, floatDuration: 3.5 },
  { left: "10%", top: "50%", delay: 0.5, rotate: -4, floatDuration: 4 },
  { left: "58%", top: "52%", delay: 0.75, rotate: 5, floatDuration: 3.3 },
];

function GeometricShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large rotating ring */}
      <div
        className="animate-spin-slow absolute -right-32 top-1/4 h-96 w-96 rounded-full border-[3px] border-dashed opacity-[0.04]"
        style={{ borderColor: "#EF4444" }}
      />

      {/* Orbiting dot */}
      <div className="absolute right-1/3 top-20">
        <div
          className="animate-orbit h-3 w-3 rounded-full bg-[#D97706]/20"
          style={{ "--orbit-radius": "80px", "--orbit-duration": "12s" } as React.CSSProperties}
        />
      </div>

      {/* Morphing blob */}
      <div className="animate-morph absolute -right-10 top-1/3 h-72 w-72 bg-gradient-to-br from-[#EF4444]/[0.06] via-[#D97706]/[0.04] to-[#3B82F6]/[0.06]" />

      {/* Spinning diamond */}
      <motion.div
        className="absolute left-[60%] top-[15%] h-8 w-8 rotate-45 rounded-sm border-2 border-[#22C55E]/10"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Small floating circles */}
      <motion.div
        className="absolute left-[70%] top-[70%] h-4 w-4 rounded-full bg-[#3B82F6]/10"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[80%] top-[30%] h-3 w-3 rounded-full bg-[#EF4444]/10"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hexagon outline (CSS) */}
      <div
        className="animate-spin-reverse absolute right-[15%] bottom-[20%] h-24 w-24 opacity-[0.04]"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          border: "2px solid #D97706",
          background: "transparent",
          boxShadow: "inset 0 0 0 2px #D97706",
        }}
      />

      {/* Gradient rays from center-right */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.03]"
        style={{
          background: "conic-gradient(from 0deg, #EF4444, transparent, #22C55E, transparent, #3B82F6, transparent, #D97706, transparent, #EF4444)",
        }}
      />

      {/* Cross/plus shapes */}
      <motion.div
        className="absolute left-[75%] top-[60%]"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative h-6 w-6">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#22C55E]/10" />
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#22C55E]/10" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white px-6 py-20">
      <SprayDots color="#00000006" />

      {/* Mist blobs - more saturated */}
      <div
        className="mist-blob -right-20 -top-20 h-[500px] w-[500px]"
        style={{ background: "radial-gradient(circle, #EF444440, transparent)", opacity: 0.5 }}
      />
      <div
        className="mist-blob -bottom-32 right-1/4 h-[500px] w-[500px]"
        style={{ background: "radial-gradient(circle, #3B82F640, transparent)", opacity: 0.5 }}
      />
      <div
        className="mist-blob right-1/3 top-1/4 h-[400px] w-[400px]"
        style={{ background: "radial-gradient(circle, #22C55E30, transparent)", opacity: 0.5 }}
      />
      <div
        className="animate-morph mist-blob left-1/2 top-1/2 h-[350px] w-[350px]"
        style={{ background: "radial-gradient(circle, #D9770630, transparent)", opacity: 0.45 }}
      />

      <GeometricShapes />

      <div className="perspective-container relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-[#111]/5 px-4 py-1.5 text-xs font-bold tracking-widest text-[#111]/50 uppercase"
          >
            Cimed Apresenta
          </motion.span>

          <h1 className="text-3d mb-6 text-6xl leading-[0.9] font-black tracking-tighter text-[#111] sm:text-7xl lg:text-8xl">
            SUPER
            <br />
            <span className="animate-gradient bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-transparent">
              CIMED
            </span>
          </h1>

          <p className="mb-6 max-w-md text-lg leading-relaxed text-[#111]/50">
            Proteção antitranspirante de 72 horas. Sem alumínio. Sem parabenos.
            4 fragrâncias com o seu sabor.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 flex items-center gap-4 rounded-2xl border border-[#111]/5 bg-white/60 p-5 shadow-lg backdrop-blur-sm"
          >
            <img
              src="https://istoe.com.br/wp-content/uploads/2022/08/toguro.jpg"
              alt="Toguro - Head de Comunicação Cimed"
              className="hidden h-20 w-20 flex-shrink-0 rounded-full border-2 border-[#111]/10 object-cover object-[center_20%] shadow-md sm:block"
              loading="eager"
            />
            <div>
              <p className="text-lg font-bold text-[#111]/80 sm:text-xl">
                &ldquo;Não chamem de fragrância...
                <br />
                aqui é{" "}
                <span className="animate-gradient bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-transparent">
                  SABOOOOR
                </span>
                !&rdquo;
              </p>
              <p className="mt-2 text-sm font-semibold text-[#111]/30">
                — Toguro, Head de Comunicação Cimed
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#produtos"
              className="shimmer-effect rounded-full bg-[#111] px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-transform hover:scale-105"
            >
              Ver Sabores
            </a>
            <a
              href="#beneficios"
              className="rounded-full border-2 border-[#111]/10 bg-white/50 px-8 py-3.5 text-sm font-bold tracking-wide text-[#111]/60 uppercase backdrop-blur-sm transition-all hover:border-[#111]/30 hover:bg-white/80"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Floating product cans with 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden h-[520px] lg:block"
        >
          {/* Center glow pulse */}
          <div className="animate-scale-pulse absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#EF4444]/10 via-[#D97706]/10 to-[#3B82F6]/10 blur-2xl" />

          {/* Orbit ring decoration */}
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#111]/[0.04]" />

          {products.map(({ name, imageUrl, colorPrimary }, index) => {
            const layout = PRODUCT_LAYOUT[index];

            return (
              <motion.div
                key={name}
                className="product-3d absolute"
                style={{ left: layout.left, top: layout.top }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + layout.delay,
                  type: "spring",
                  damping: 12,
                }}
              >
                <div
                  style={{
                    transform: `rotate(${layout.rotate}deg)`,
                    animation: `float ${layout.floatDuration}s ease-in-out infinite`,
                    animationDelay: `${layout.delay}s`,
                  }}
                >
                  {/* Glow ring behind product */}
                  <div
                    className="glow-ring absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${colorPrimary}20, transparent)`,
                    }}
                  />
                  <img
                    src={imageUrl}
                    alt={name}
                    className="relative h-44 w-auto object-contain drop-shadow-2xl transition-all duration-300 sm:h-48"
                    loading="eager"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile product strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-3 overflow-hidden pb-6 lg:hidden">
        {products.map(({ name, imageUrl, colorPrimary }) => (
          <motion.div
            key={name}
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 -z-10 rounded-full opacity-20 blur-xl"
              style={{ backgroundColor: colorPrimary }}
            />
            <img
              src={imageUrl}
              alt={name}
              className="h-24 w-auto object-contain opacity-30 sm:h-32"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

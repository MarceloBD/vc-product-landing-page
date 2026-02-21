"use client";

import { motion } from "framer-motion";
import SprayDots from "./SprayDots";

const STATS = [
  { value: "11M+", label: "Seguidores", color: "#EF4444" },
  { value: "4", label: "Sabores", color: "#22C55E" },
  { value: "72h", label: "Proteção", color: "#D97706" },
  { value: "0%", label: "Alumínio", color: "#3B82F6" },
];

export default function Ambassador() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-6 py-24 md:py-32">
      <SprayDots color="#ffffff" />

      {/* Geometric decorations */}
      <div className="animate-spin-slow pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full border-2 border-dashed border-white/[0.03]" />
      <div className="animate-spin-reverse pointer-events-none absolute -right-16 bottom-1/4 h-48 w-48 rounded-full border border-white/[0.04]" />

      {/* Glow blobs */}
      <div className="animate-morph pointer-events-none absolute left-1/4 top-0 h-96 w-96 bg-[#EF4444]/[0.04] blur-3xl" />
      <div className="animate-morph pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 bg-[#3B82F6]/[0.04] blur-3xl" style={{ animationDelay: "-4s" }} />

      {/* Orbiting dots */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="animate-orbit h-2 w-2 rounded-full bg-[#EF4444]/20"
          style={{ "--orbit-radius": "200px", "--orbit-duration": "20s" } as React.CSSProperties}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="animate-orbit h-2 w-2 rounded-full bg-[#3B82F6]/20"
          style={{ "--orbit-radius": "250px", "--orbit-duration": "25s" } as React.CSSProperties}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-block text-xs font-bold tracking-[0.3em] text-white/30 uppercase"
        >
          Embaixador
        </motion.span>

        {/* Toguro photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, type: "spring", damping: 15 }}
          className="relative mx-auto mb-6 inline-block"
        >
          <div className="animate-scale-pulse absolute -inset-2 rounded-full bg-gradient-to-br from-[#EF4444]/20 via-[#D97706]/20 to-[#3B82F6]/20 blur-lg" />
          <img
            src="https://lorena.ig.com.br/wp-content/uploads/2025/05/post_23918.jpg"
            alt="Toguro - Embaixador Super Cimed"
            className="relative h-32 w-32 rounded-full border-4 border-white/10 object-cover object-top shadow-2xl sm:h-40 sm:w-40"
            loading="lazy"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3d-light mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          TOGURO
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10"
          style={{ perspective: "800px" }}
        >
          <p className="text-2xl leading-snug font-bold text-white/80 sm:text-3xl lg:text-4xl">
            &ldquo;Cada um desses tem um
            <br />
            <motion.span
              className="animate-gradient inline-block bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-6xl text-transparent sm:text-7xl lg:text-8xl"
              animate={{ rotateX: [0, -5, 0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              SABOOOOR
            </motion.span>
            <br />
            diferente!&rdquo;
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-14 max-w-xl text-base leading-relaxed text-white/40"
        >
          Influenciador digital e embaixador oficial da linha Super Cimed.
          Conhecido pela sua energia contagiante e pela expressão que virou marca registrada.
        </motion.p>

        <div className="perspective-container flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {STATS.map(({ value, label, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glow-shadow group rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.06]"
              style={{ "--glow-color": `${color}20` } as React.CSSProperties}
            >
              <p
                className="text-3xl font-black transition-transform duration-300 group-hover:scale-110 sm:text-4xl"
                style={{ color }}
              >
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-wider text-white/30 uppercase">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

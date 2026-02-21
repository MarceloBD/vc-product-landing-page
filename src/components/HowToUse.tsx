"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Agite",
    description: "Agite bem o frasco antes de usar.",
    color: "#EF4444",
    colorLight: "#FEF2F2",
  },
  {
    number: "02",
    title: "Aplique",
    description: "Aplique a 15cm de distância das axilas.",
    color: "#22C55E",
    colorLight: "#F0FDF4",
  },
  {
    number: "03",
    title: "Espere",
    description: "Aguarde secar antes de se vestir.",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
  },
];

export default function HowToUse() {
  return (
    <section id="como-usar" className="relative overflow-hidden bg-white px-6 py-20 md:py-28">
      {/* Geometric decoration */}
      <div className="animate-spin-slow pointer-events-none absolute -right-12 top-20 h-40 w-40 rounded-full border border-dashed border-[#111]/[0.03]" />

      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-xs font-bold tracking-[0.3em] text-[#111]/30 uppercase"
        >
          Como Usar
        </motion.p>

        {/* Timeline */}
        <div className="perspective-container relative flex flex-col items-start gap-12 md:flex-row md:items-start md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 right-[16.6%] left-[16.6%] hidden h-1.5 rounded-full md:block"
            style={{
              background: "linear-gradient(90deg, #EF4444, #22C55E, #3B82F6)",
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.2), 0 0 20px rgba(34, 197, 94, 0.2), 0 0 20px rgba(59, 130, 246, 0.2)",
            }}
          />

          {STEPS.map(({ number, title, description, color, colorLight }, index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative flex flex-1 flex-col items-center text-center"
            >
              {/* Circle with glow */}
              <div className="relative z-10 mb-6">
                <div
                  className="glow-ring absolute -inset-3 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ backgroundColor: `${color}20` }}
                />
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white shadow-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 8px 30px ${color}30`,
                  }}
                >
                  {number}
                </div>
              </div>

              <h3
                className="mb-2 text-lg font-black uppercase transition-transform duration-300 group-hover:scale-105"
                style={{ color }}
              >
                {title}
              </h3>

              <p className="max-w-[200px] text-sm leading-relaxed text-[#111]/50">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Warning with 3D card effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-sm font-semibold text-amber-700">
            ⚠️ Não aplicar sobre a pele irritada ou lesionada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import SprayDots from "./SprayDots";

function IconShield({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconBan({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

function IconSpray({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="10" width="8" height="12" rx="2" />
      <path d="M12 2v4" />
      <path d="M10 6h4" />
      <path d="M6 4l2 2" />
      <path d="M18 4l-2 2" />
    </svg>
  );
}

function IconDroplet({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

function IconLeaf({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function IconZap({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

interface Feature {
  icon: (color: string) => ReactNode;
  title: string;
  description: string;
  color: string;
  colorLight: string;
}

const FEATURES: Feature[] = [
  {
    icon: (color) => <IconShield color={color} />,
    title: "72h de Proteção",
    description: "Proteção antitranspirante que dura até 3 dias sem reaplicação.",
    color: "#EF4444",
    colorLight: "#FEF2F2",
  },
  {
    icon: (color) => <IconBan color={color} />,
    title: "0% Alumínio",
    description: "Fórmula limpa, sem alumínio. Segura para uso diário.",
    color: "#22C55E",
    colorLight: "#F0FDF4",
  },
  {
    icon: (color) => <IconSpray color={color} />,
    title: "Jato Seco",
    description: "Tecnologia de jato seco para absorção instantânea.",
    color: "#D97706",
    colorLight: "#FFFBEB",
  },
  {
    icon: (color) => <IconDroplet color={color} />,
    title: "Ação Hidratante",
    description: "Hidrata e acalma a pele, seguro pós-depilação.",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
  },
  {
    icon: (color) => <IconLeaf color={color} />,
    title: "Sem Parabenos",
    description: "Livre de parabenos e ingredientes agressivos.",
    color: "#22C55E",
    colorLight: "#F0FDF4",
  },
  {
    icon: (color) => <IconZap color={color} />,
    title: "Secagem Rápida",
    description: "Aplique e vista-se em segundos, sem marcas.",
    color: "#EF4444",
    colorLight: "#FEF2F2",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#fafafa] px-6 py-24 md:py-32">
      <SprayDots color="#00000005" />

      {/* Geometric decorations */}
      <div className="animate-spin-slow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-3xl border border-[#111]/[0.03] opacity-50" />
      <div className="animate-spin-reverse pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border-2 border-dashed border-[#111]/[0.04]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-bold tracking-[0.3em] text-[#111]/25 uppercase">
            Tecnologia
          </span>
          <h2 className="text-3d text-4xl font-black tracking-tight text-[#111] sm:text-5xl">
            Por que{" "}
            <span className="animate-gradient bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-transparent">
              Super Cimed
            </span>
            ?
          </h2>
        </motion.div>

        <div className="perspective-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon, title, description, color, colorLight }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-3d glow-shadow group relative rounded-2xl border border-white/80 bg-white p-7 shadow-lg"
              style={{
                "--glow-color": `${color}25`,
              } as React.CSSProperties}
            >
              {/* Colored accent corner */}
              <div
                className="absolute -right-1 -top-1 h-20 w-20 rounded-bl-[40px] rounded-tr-2xl opacity-[0.07]"
                style={{ backgroundColor: color }}
              />

              {/* Icon with 3D ring */}
              <div className="relative mb-5 inline-flex">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: colorLight }}
                >
                  {icon(color)}
                </div>
                <div
                  className="glow-ring absolute -inset-1 -z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: `${color}15` }}
                />
              </div>

              <h3
                className="mb-2 text-lg font-extrabold"
                style={{ color }}
              >
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-[#111]/45">
                {description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[3px] scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

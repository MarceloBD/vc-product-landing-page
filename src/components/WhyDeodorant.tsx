"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import SprayDots from "./SprayDots";

function IconThermometer({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
    </svg>
  );
}

function IconUsers({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconTrendingUp({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconHeart({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

interface Reason {
  icon: (color: string) => ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  colorLight: string;
}

const REASONS: Reason[] = [
  {
    icon: (color) => <IconThermometer color={color} />,
    title: "Suor é natural, mau odor não precisa ser",
    description: "Seu corpo produz até 1 litro de suor por dia. Um bom desodorante neutraliza as bactérias que causam o mau cheiro, sem bloquear o processo natural.",
    stat: "~1L",
    statLabel: "de suor por dia",
    color: "#EF4444",
    colorLight: "#FEF2F2",
  },
  {
    icon: (color) => <IconUsers color={color} />,
    title: "Confiança em qualquer situação",
    description: "Na academia, no trabalho, no encontro. A segurança de saber que você está protegido muda como você se apresenta ao mundo.",
    stat: "92%",
    statLabel: "se sentem mais confiantes",
    color: "#22C55E",
    colorLight: "#F0FDF4",
  },
  {
    icon: (color) => <IconTrendingUp color={color} />,
    title: "Performance que acompanha seu ritmo",
    description: "Dias longos pedem proteção longa. Desodorantes de alta performance mantêm você seco e fresco por horas, sem precisar reaplicar.",
    stat: "72h",
    statLabel: "de proteção contínua",
    color: "#D97706",
    colorLight: "#FFFBEB",
  },
  {
    icon: (color) => <IconHeart color={color} />,
    title: "Cuidado com a pele, não só com o cheiro",
    description: "Fórmulas modernas hidratam, acalmam e protegem sua pele. Sem alumínio, sem parabenos — ingredientes que respeitam seu corpo.",
    stat: "0%",
    statLabel: "ingredientes agressivos",
    color: "#3B82F6",
    colorLight: "#EFF6FF",
  },
];

export default function WhyDeodorant() {
  return (
    <section className="relative overflow-hidden bg-[#111] px-6 py-24 md:py-32">
      <SprayDots color="#ffffff" />

      {/* Geometric decorations */}
      <div className="animate-spin-slow pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full border border-dashed border-white/[0.03]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-bold tracking-[0.3em] text-white/25 uppercase">
            Pense nisso
          </span>
          <h2 className="text-3d-light mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Por que usar um{" "}
            <span className="animate-gradient bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-transparent">
              desodorante
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/40">
            Todo mundo usa, mas poucos param pra pensar no porquê.
            Não é só sobre cheiro — é sobre confiança, saúde e respeito pelo seu corpo.
          </p>
        </motion.div>

        <div className="perspective-container grid gap-6 sm:grid-cols-2">
          {REASONS.map(({ icon, title, description, stat, statLabel, color, colorLight }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-3d glow-shadow group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-7 backdrop-blur-sm"
              style={{ "--glow-color": `${color}15` } as React.CSSProperties}
            >
              {/* Stat highlight */}
              <div className="absolute -right-2 -top-2 flex h-20 w-20 items-end justify-start rounded-bl-3xl pb-3 pl-3 opacity-[0.06]"
                style={{ backgroundColor: color }}
              />

              <div className="mb-5 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${color}15` }}
                >
                  {icon(color)}
                </div>
                <div>
                  <p className="text-2xl font-black" style={{ color }}>{stat}</p>
                  <p className="text-[10px] font-semibold tracking-wider text-white/30 uppercase">{statLabel}</p>
                </div>
              </div>

              <h3 className="mb-2 text-lg font-extrabold text-white/90">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-white/40">
                {description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-lg font-bold text-white/60">
            Agora imagina tudo isso com{" "}
            <span className="animate-gradient bg-gradient-to-r from-[#EF4444] via-[#D97706] to-[#3B82F6] bg-clip-text text-transparent">
              SABOOOOR
            </span>
            .
          </p>
          <a
            href="#produtos"
            className="shimmer-effect inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold tracking-wide text-[#111] uppercase transition-transform hover:scale-105"
          >
            Conheça os Sabores
          </a>
        </motion.div>
      </div>
    </section>
  );
}

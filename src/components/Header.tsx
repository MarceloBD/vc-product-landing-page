"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Usar", href: "#como-usar" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tighter text-[#111]">
            SUPER
          </span>
          <span className="hidden text-[10px] font-semibold tracking-[0.2em] text-[#111]/40 uppercase sm:block">
            by Cimed
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-[#111]/50 transition-colors hover:text-[#111]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#produtos"
          className="rounded-full bg-[#111] px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-transform hover:scale-105"
        >
          Comprar
        </a>
      </div>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";

const QUICK_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Usar", href: "#como-usar" },
];

const RETAILERS = [
  { name: "Droga Lima", url: "https://www.drogalima.com.br" },
  { name: "Panvel", url: "https://www.panvel.com.br" },
  { name: "Drogasil", url: "https://www.drogasil.com.br" },
];

const VARIANT_COLORS = ["#EF4444", "#22C55E", "#D97706", "#3B82F6"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111] px-6 pt-16 pb-8">
      {/* Subtle glow blobs */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EF4444]/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-[#3B82F6]/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-3d-light text-3xl font-black tracking-tighter text-white">
              SUPER
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/30">
              Linha de desodorantes aerossol da Cimed.
              <br />
              Proteção de 72h com o SABOOOOR que você escolhe.
            </p>
            <div className="mt-4 flex gap-2">
              {VARIANT_COLORS.map((color) => (
                <div
                  key={color}
                  className="h-2 w-8 rounded-full transition-all duration-300 hover:w-12 hover:shadow-lg"
                  style={{
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}40`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/20 uppercase">
              Navegação
            </h3>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Retailers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/20 uppercase">
              Onde Comprar
            </h3>
            <div className="flex flex-col gap-3">
              {RETAILERS.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {name} →
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider & legal */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/20">
            © {new Date().getFullYear()} Cimed. Todos os direitos reservados.
            Este site é uma página promocional e não representa o site oficial da Cimed.
          </p>
        </div>
      </div>
    </footer>
  );
}

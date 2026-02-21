"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Product } from "@/types/Product";
import SprayDots from "./SprayDots";

function ProductSection({ product, index }: { product: Product; index: number }) {
  const {
    name,
    tagline,
    description,
    colorPrimary,
    colorLight,
    imageUrl,
    price,
    buyUrl,
    sizes,
  } = product;

  const isReversed = index % 2 !== 0;

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-28"
      style={{ backgroundColor: colorLight }}
    >
      <SprayDots color={colorPrimary} />

      {/* Geometric decorations per section */}
      <div
        className="animate-spin-slow pointer-events-none absolute h-48 w-48 rounded-full border-2 border-dashed opacity-[0.06]"
        style={{
          borderColor: colorPrimary,
          right: isReversed ? "auto" : "-24px",
          left: isReversed ? "-24px" : "auto",
          top: "10%",
        }}
      />
      <motion.div
        className="pointer-events-none absolute h-6 w-6 rotate-45 rounded-sm opacity-[0.08]"
        style={{
          backgroundColor: colorPrimary,
          left: isReversed ? "85%" : "10%",
          bottom: "15%",
        }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="perspective-container relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"
        style={{ direction: isReversed ? "rtl" : "ltr" }}
      >
        {/* Product image with 3D hover */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
          style={{ direction: "ltr" }}
        >
          <div className="product-3d group relative cursor-pointer">
            {/* Morphing blob behind product */}
            <div
              className="animate-morph absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-80 sm:w-80"
              style={{ backgroundColor: colorPrimary }}
            />

            {/* Glow ring */}
            <div
              className="glow-ring absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                boxShadow: `0 0 60px ${colorPrimary}30, 0 0 120px ${colorPrimary}15`,
              }}
            />

            <img
              src={imageUrl}
              alt={`Desodorante ${name}`}
              className="relative h-64 w-auto object-contain drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] sm:h-80"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ direction: "ltr" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{
              backgroundColor: `${colorPrimary}15`,
              color: colorPrimary,
            }}
          >
            {tagline}
          </motion.span>

          <h2
            className="text-3d mb-4 text-4xl font-black tracking-tight sm:text-5xl"
            style={{ color: colorPrimary }}
          >
            {name}
          </h2>

          <p className="mb-6 max-w-md text-base leading-relaxed text-[#111]/60">
            {description}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            {sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border-2 px-4 py-1.5 text-xs font-bold transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: `${colorPrimary}30`,
                  color: colorPrimary,
                }}
              >
                {size}
              </span>
            ))}
          </div>

          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-effect inline-block rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: colorPrimary,
              boxShadow: `0 4px 20px ${colorPrimary}30`,
            }}
          >
            Comprar — R$ {price}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProductVariants() {
  return (
    <div id="produtos">
      {products.map((product, index) => (
        <ProductSection key={product.variant} product={product} index={index} />
      ))}
    </div>
  );
}

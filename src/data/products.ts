import { VariantType } from "@/enums/VariantType";
import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    variant: VariantType.ENERGY,
    name: "Super Energy",
    tagline: "Energizante e marcante",
    description:
      "Desperte sua energia com uma fragrância vibrante e marcante que acompanha seu ritmo o dia todo.",
    colorPrimary: "#EF4444",
    colorSecondary: "#DC2626",
    colorLight: "#FEF2F2",
    imageUrl:
      "https://cdn1.staticpanvel.com.br/produtos/15/87375-15.jpg",
    price: "14,78",
    buyUrl:
      "https://www.drogalima.com.br/des-super-cimed-aerosol-150ml-72h-energy/p",
    sizes: ["150ml", "250ml"],
  },
  {
    variant: VariantType.CITRUS,
    name: "Super Citrus",
    tagline: "Frescor cítrico e revigorante",
    description:
      "Sinta o frescor intenso dos cítricos que revigora e mantém você confiante a cada momento.",
    colorPrimary: "#22C55E",
    colorSecondary: "#16A34A",
    colorLight: "#F0FDF4",
    imageUrl:
      "https://farmaciaindiana.vtexassets.com/arquivos/ids/392300/7897947621657_01.jpg",
    price: "14,78",
    buyUrl:
      "https://www.drogalima.com.br/des-super-cimed-aerosol-150ml-72h-citrus/p",
    sizes: ["150ml", "250ml"],
  },
  {
    variant: VariantType.WOOD,
    name: "Super Wood",
    tagline: "Aroma marcante e sofisticado",
    description:
      "Sofisticação em cada borrifada. Um aroma amadeirado e envolvente para quem tem atitude.",
    colorPrimary: "#D97706",
    colorSecondary: "#92400E",
    colorLight: "#FFFBEB",
    imageUrl:
      "https://cdn1.staticpanvel.com.br/produtos/15/87373-15.jpg",
    price: "14,78",
    buyUrl:
      "https://www.drogalima.com.br/des-super-cimed-aerosol-150ml-72h-wood/p",
    sizes: ["150ml", "250ml"],
  },
  {
    variant: VariantType.ACQUA,
    name: "Super Acqua",
    tagline: "Leve, limpo e duradouro",
    description:
      "A leveza da água com proteção que dura. Frescor limpo e duradouro para o seu dia a dia.",
    colorPrimary: "#3B82F6",
    colorSecondary: "#2563EB",
    colorLight: "#EFF6FF",
    imageUrl:
      "https://sjdigital.vtexassets.com/arquivos/ids/1173526/desodorante-antitranspirante-super-cimed-aerossol-acqua-150ml-10051179_1.jpg",
    price: "14,78",
    buyUrl:
      "https://www.drogalima.com.br/des-super-cimed-aerosol-150ml-72h-acqua/p",
    sizes: ["150ml", "250ml"],
  },
];

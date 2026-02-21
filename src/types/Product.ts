import { VariantType } from "@/enums/VariantType";

export interface Product {
  variant: VariantType;
  name: string;
  tagline: string;
  description: string;
  colorPrimary: string;
  colorSecondary: string;
  colorLight: string;
  imageUrl: string;
  price: string;
  buyUrl: string;
  sizes: string[];
}

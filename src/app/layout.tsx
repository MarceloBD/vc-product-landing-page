import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SUPER by Cimed | Desodorante Antitranspirante Aerossol",
  description:
    "Linha de desodorantes aerossol Super Cimed. Proteção de até 72 horas, 0% alumínio, sem parabenos. Disponível em Energy, Citrus, Wood e Acqua.",
  keywords: [
    "Super Cimed",
    "desodorante",
    "antitranspirante",
    "aerossol",
    "Toguro",
    "sabor",
    "72 horas",
    "0% alumínio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

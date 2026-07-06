import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LevelTestProvider } from "@/context/LevelTestContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Point Academy | Cours de langues premium",
  description:
    "Programmes d'excellence en langues étrangères et préparation aux examens internationaux. Habilité par le CECRL et accrédité auprès des plus grandes institutions globales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>
          <LevelTestProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LevelTestProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}


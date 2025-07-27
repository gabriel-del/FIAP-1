import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TransacoesProvider } from "./contexts/transacao-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next bank",
  description: "FIAP - Tech Challenge",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} `}>
        <TransacoesProvider>{children}</TransacoesProvider>
      </body>
    </html>
  );
}
